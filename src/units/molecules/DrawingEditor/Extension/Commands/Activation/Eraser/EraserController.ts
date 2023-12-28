import Konva from 'konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { v4 as uuidv4 } from 'uuid';

import ClipperLib, { Point, Polygon, Polygons } from '@doodle3d/clipper-lib';
import { RenderTarget } from '../../../../Core/Interfaces/Konva';
import StageWrapper from '../../../../Core/Wrapper/StageWrapper';
import ConfigManager from '../../../../Config';
import pathToPoints from '../../../Utils/pathToPoints';
import pointsToPath from '../../../Utils/pointsToPath';
import { CORE_COMMAND } from '../../../../Core/Interfaces/Commands';
import BaseAbsctractController from '../../../../Core/BaseAbsctractController';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { notifyManipulationCommandParameter } from '../../../../Core/ConmmandRegistry/Commands/NotifyManipulation';

enum EraseEventType {
  MOUSE_DOWN = '@mousedown',
  MOUSE_UP = '@mouseup',
}
export default class EraserController extends BaseAbsctractController {
  // eraser trace
  private _target: Konva.Path | null = null;
  // eraser ui
  private _eraser: Konva.Line | null = null;

  private _clipper: any = new ClipperLib.Clipper();

  // remove target
  private _removeTargets: Konva.Path[] | null = [];

  private _mousedownClip: Polygons | null = null;
  private _mouseupClip: Polygon | null = null;

  private _updatePathInfo: any[] | null = [];

  private _undoables: Undoable[] | null = [];

  constructor(stageWrapper: StageWrapper) {
    super(stageWrapper);
    this._name = 'eraser';
  }

  mousedownFunction(e: KonvaEventObject<MouseEvent>): void {
    if (e.evt.buttons === 4) return;
    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      'base-layer',
      this._stageWrapper?.stage?.getPointerPosition(),
    );
    if (pos) {
      if (!this._target) {
        this._target = new Konva.Path({
          stroke: 'rgba(255,255,255,0.6)',
          strokeWidth: ConfigManager.eraserRadius,
          draggable: false,
          id: uuidv4(),
          lineCap: 'round',
          lineJoin: 'round',
          data: `M ${pos.x} ${pos.y}`,
        });
        const layer = this._stageWrapper?.currentLayer;
        if (layer) layer.add(this._target);
        this._erase(EraseEventType.MOUSE_DOWN);
      }
      this._eraser?.position({
        x: pos.x,
        y: pos.y,
      });
      this._eraser?.strokeWidth(ConfigManager.eraserRadius);
    }
  }

  mousemoveFunction(e: KonvaEventObject<MouseEvent>): void {
    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      'base-layer',
      this._stageWrapper?.stage?.getPointerPosition(),
    );
    if (pos) {
      this._eraser?.position({
        x: pos.x,
        y: pos.y,
      });
      this._eraser?.strokeWidth(ConfigManager.eraserRadius);
    }

    if (!this._hasMousedown) return;

    if (pos) {
      this._target?.moveToTop();
      this._target?.data(this._target.data() + `L ${pos.x} ${pos.y}`);
      this._stageWrapper?.currentLayer?.batchDraw();
    }
  }
  mouseupFunction(e?: KonvaEventObject<MouseEvent>): void {
    this._target?.hide();
    this._erase(EraseEventType.MOUSE_UP);
    this._target?.destroy();
    this._target = null;

    this._stageWrapper?.currentLayer?.batchDraw();
  }
  keydownFunction(e: KeyboardEvent): void {
    if (e.code === 'Escape') {
      this._target = null;
    }
  }

  activateFunction(): void {
    const eraserUIPoints = [];
    for (let i = 0; i <= 36; i++) {
      eraserUIPoints.push(
        Math.cos(i * 10 * (Math.PI / 180)),
        Math.sin(i * 10 * (Math.PI / 180)),
      );
    }
    this._eraser = new Konva.Line({
      id: 'eraser',
      strokeWidth: ConfigManager.eraserRadius,
      stroke: 'rgba(255,255,255,.6)',
      fill: 'rgba(255,255,255,.6)',
      points: eraserUIPoints,
      closed: true,
      visible: false,
    });
    this._stageWrapper?.currentLayer?.add(this._eraser);
  }

  deactivateFunction(): void {
    this._target?.remove();
    this._target?.destroy();
    this._target = null;

    this._eraser?.remove();
    this._eraser?.destroy();
    this._eraser = null;

    this._mousedownClip = null;
    this._mouseupClip = null;

    this._clipper = null;
    this._removeTargets = null;

    this._stageWrapper = null;
    this._undoables = null;
  }
  stageMouseinFunction(e: MouseEvent): void {
    this._hasMousedown = e.buttons === 1 ? true : false;
    this._eraser?.show();
    this._eraser?.moveToTop();
  }
  stageMouseoutFunction(e: MouseEvent): void {
    this._eraser?.hide();
  }

  private _recursive(node: Konva.Node, type: EraseEventType, clip: Polygons) {
    if (!this._target) return;
    this._clipper.Clear();
    const boundingRect = (
      this._target as unknown as Konva.Shape
    )?.getClientRect({ skipStroke: false });
    if (
      node !== this._target &&
      node !== this._eraser &&
      Konva.Util.haveIntersection(
        boundingRect,
        node.getClientRect({ skipStroke: true }),
      )
    ) {
      if (node.getClassName() === 'Group') {
        (node as Konva.Group)
          .getChildren()
          .forEach((child: Konva.Node) => this._recursive(child, type, clip));
      } else {
        this._clipper.AddPaths(clip, ClipperLib.PolyType.ptClip, true);

        const nodePoints = pathToPoints((node as Konva.Path).data()).map(
          (polygon: Polygon) => {
            return polygon.map((point: Point) => {
              const transformedPoint = node
                ?.getAbsoluteTransform()
                .point({ x: point.X, y: point.Y }) as unknown as any;

              return { X: transformedPoint.x, Y: transformedPoint.y };
            });
          },
        );

        this._clipper.AddPaths(nodePoints, ClipperLib.PolyType.ptSubject, true);

        const intersection_paths = new ClipperLib.Paths();
        this._clipper.Execute(
          ClipperLib.ClipType.ctIntersection,
          intersection_paths,
          ClipperLib.PolyFillType.pftNonZero,
          ClipperLib.PolyFillType.pftNonZero,
        );

        if (!intersection_paths.length) return;

        const solution_polytree = new ClipperLib.PolyTree();
        this._clipper.Execute(
          ClipperLib.ClipType.ctDifference,
          solution_polytree,
          ClipperLib.PolyFillType.pftNonZero,
          ClipperLib.PolyFillType.pftNonZero,
        );

        let polynode = solution_polytree.GetFirst();

        let holes = [] as any[];
        let fills = [] as any[];
        while (polynode) {
          const path = pointsToPath([
            polynode.m_polygon.map((pt: Point) => {
              const transformed = node.parent
                ?.getAbsoluteTransform()
                .copy()
                .invert()
                .point({ x: pt.X, y: pt.Y }) as Konva.Vector2d;
              return { X: transformed.x, Y: transformed.y };
            }),
          ]);
          if (polynode.IsHole()) {
            holes.push({
              parent: polynode.Parent(),
              path: path,
            });
          } else {
            fills.push({
              target: polynode,
              path: path,
            });
          }
          polynode = polynode.GetNext();
        }
        const polyPath = fills.map((d: any) => {
          const res = holes.filter((p: any) => p.parent === d.target);
          return d.path + res.map((f: any) => f.path);
        });

        // 지우개 경로에 비해 node가 매우 작으면 아래와 같은 조건으로 잡아낸다.
        if (intersection_paths.length && !holes.length && !fills.length) {
          this._removeTargets?.push(node as Konva.Path);
          return;
        }
        if (ConfigManager.booleanOperation) {
          if (polyPath.length) {
            polyPath.forEach((path: string) => {
              const newPolygons = pathToPoints(path);
              const rect = ClipperLib.Clipper.GetBounds(newPolygons);
              const result = new Konva.Path({
                stroke: (node as Konva.Path).stroke(),
                id: uuidv4(),
                strokeWidth: (node as Konva.Path).strokeWidth(),
                fill: (node as Konva.Path).fill(),
                lineCap: (node as Konva.Path).lineCap(),
                lineJoin: (node as Konva.Path).lineJoin(),
                opacity: (node as Konva.Path).opacity(),
                draggable: false,
                data: path,
                x: rect.left + (rect.right - rect.left) / 2,
                y: rect.top + (rect.bottom - rect.top) / 2,
                offset: {
                  x: rect.left + (rect.right - rect.left) / 2,
                  y: rect.top + (rect.bottom - rect.top) / 2,
                },
              });
              if (node.parent?.getClassName() === 'Group') {
                node.parent.add(result);
                this._undoables?.push(
                  new Undoable(CORE_COMMAND.CREATE_SHAPE, null, [
                    result.toObject(),
                  ]),
                );
              } else {
                this._stageWrapper?.currentLayer?.add(result);
                this._undoables?.push(
                  new Undoable(CORE_COMMAND.CREATE_SHAPE, null, [
                    result.toObject(),
                  ]),
                );
              }
            });
          }
          this._removeTargets?.push(node as Konva.Path);
        } else {
          if (polyPath.length) {
            const nodeBefore = node.toObject();
            (node as Konva.Path).data(polyPath.join(' ') + 'Z');
            this._undoables?.push(
              new Undoable(
                CORE_COMMAND.UPDATE_SHAPE,
                [nodeBefore],
                [node.toObject()],
              ),
            );
          }
        }
      }
    }
  }

  private _erase(type: EraseEventType): void {
    if (!this._target) return;
    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      'base-layer',
      this._stageWrapper?.stage?.getPointerPosition(),
    );
    if (pos) {
      const newPath = this._target?.data() + `L ${pos.x} ${pos.y}`;
      this._target?.data(newPath);
    }
    const layer = this._stageWrapper?.currentLayer;
    const layerScale = this._stageWrapper?.currentLayer
      ?.getAbsoluteTransform()
      .decompose().scaleX as number;

    if (type === EraseEventType.MOUSE_UP) {
      const eraseTargetPaths = pathToPoints(
        (this._target?.data() as string) + 'Z',
      );
      const transfromedEraseTargetPaths = eraseTargetPaths.map(
        (polygon: Polygon) => {
          return polygon.map((pt: Point) => {
            const targetTransform = this._target
              ?.getAbsoluteTransform()
              .point({ x: pt.X, y: pt.Y });
            return { X: targetTransform?.x, Y: targetTransform?.y };
          });
        },
      );

      // path lightening
      const lightened_path = ClipperLib.JS.Lighten(
        transfromedEraseTargetPaths,
        1,
      );
      ClipperLib.JS.ScaleUpPaths(lightened_path, 100);

      // lightened path가 빈 배열이면 너무 짧게 mousemove 했다는 것이므로..
      if (!lightened_path.length) {
        layer?.getChildren().forEach((node: Konva.Node) => {
          this._recursive(node, type, this._mousedownClip as Polygons);
        });
        if (this._removeTargets?.length) {
          this._undoables?.push(
            ...this._removeTargets?.map(
              (value: Konva.Shape) =>
                new Undoable(
                  CORE_COMMAND.REMOVE_SHAPE,
                  [value.toObject()],
                  null,
                ),
            ),
          );

          this._removeTargets.forEach((value: Konva.Shape) => value.destroy());
          this._removeTargets = [];
        }
        if (this._undoables?.length) {
          this._stageWrapper?.commandRegistry?.execute<notifyManipulationCommandParameter>(
            CORE_COMMAND.NOTIFY_MANIPULATION,
            {
              undoables: this._undoables,
            },
          );
          this._undoables = [];
        }
        return;
      }

      const shape = [];
      for (let i = 0; i <= 36; i++) {
        shape.push({
          X: Math.cos(i * 36 * (Math.PI / 180)),
          Y: Math.sin(i * 36 * (Math.PI / 180)),
        });
      }

      ClipperLib.JS.ScaleUpPath(
        shape,
        (ConfigManager.eraserRadius / 2) * 100 * layerScale,
      );

      // minkowski sum
      const eraser_paths_polygon = ClipperLib.Clipper.MinkowskiSum(
        shape,
        lightened_path,
        ClipperLib.PolyFillType.pftEvenOdd,
        false,
      ) as Polygons;

      ClipperLib.JS.ScaleUpPaths(eraser_paths_polygon, 0.01);

      const clip = ClipperLib.Clipper.SimplifyPolygons(
        eraser_paths_polygon,
        ClipperLib.PolyFillType.pftNonZero,
      );

      this._mouseupClip = clip;

      if (this._mousedownClip) {
        if (this._mouseupClip) {
          this._clipper.Clear();

          this._clipper.AddPaths(
            this._mousedownClip,
            ClipperLib.PolyType.ptSubject,
            true,
          );
          this._clipper.AddPaths(
            this._mouseupClip,
            ClipperLib.PolyType.ptClip,
            true,
          );
          const union_clip = new ClipperLib.Paths();
          this._clipper.Execute(
            ClipperLib.ClipType.ctUnion,
            union_clip,
            ClipperLib.PolyFillType.pftNonZero,
            ClipperLib.PolyFillType.pftNonZero,
          );
          this._clipper.Clear();

          layer?.getChildren().forEach((node: Konva.Node) => {
            this._recursive(node, type, union_clip);
          });
        } else {
          layer?.getChildren().forEach((node: Konva.Node) => {
            this._recursive(node, type, this._mousedownClip as Polygons);
          });
        }
      }

      this._mousedownClip = null;
      this._mouseupClip = null;
    } else if (type === EraseEventType.MOUSE_DOWN) {
      const erasePoint = this._eraser
        ?.points()
        .reduce((acc: any[], curr: number, currentIndex: number) => {
          if (currentIndex % 2 === 1) acc[acc.length - 1].Y = curr;
          else acc.push({ X: curr, Y: null });
          return acc;
        }, []) as Polygon;
      ClipperLib.JS.ScaleUpPath(erasePoint, ConfigManager.eraserRadius / 2);

      const clip = erasePoint?.map((point: Point) => {
        const transformedPoint = this._eraser
          ?.getAbsoluteTransform()
          .point({ x: point.X, y: point.Y }) as Konva.Vector2d;
        return { X: transformedPoint.x, Y: transformedPoint.y };
      }) as Point[];

      this._mousedownClip = [clip];
    }

    if (this._removeTargets?.length) {
      this._undoables?.push(
        ...this._removeTargets?.map(
          (value: Konva.Shape) =>
            new Undoable(CORE_COMMAND.REMOVE_SHAPE, [value.toObject()], null),
        ),
      );

      this._removeTargets.forEach((value: Konva.Shape) => value.destroy());
      this._removeTargets = [];
    }
    if (this._undoables?.length) {
      this._stageWrapper?.commandRegistry?.execute<notifyManipulationCommandParameter>(
        CORE_COMMAND.NOTIFY_MANIPULATION,
        {
          undoables: this._undoables,
        },
      );
      this._undoables = [];
    }

    if (this._eraser) this._eraser?.moveToTop();

    this._stageWrapper?.currentLayer?.batchDraw();
  }
}
