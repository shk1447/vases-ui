import Konva from 'konva';
import ClipperLib, { Point, Polygon, Polygons } from '@doodle3d/clipper-lib';
import { KonvaEventObject } from 'konva/lib/Node';
import { v4 as uuidv4 } from 'uuid';
import StageWrapper from '../../../../Core/Wrapper/StageWrapper';
import ConfigManager from '../../../../Config';
import pathToPoints from '../../../Utils/pathToPoints';
import pointsToPath from '../../../Utils/pointsToPath';
import { CORE_COMMAND } from '../../../../Core/Interfaces/Commands';
import BaseAbsctractController from '../../../../Core/BaseAbsctractController';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { notifyManipulationCommandParameter } from '../../../../Core/ConmmandRegistry/Commands/NotifyManipulation';
import getRoot from '../../../Utils/getRoot';
import { IRect } from 'konva/lib/types';

export default class AutoFillPathController extends BaseAbsctractController {
  // current drawing
  private _clip: Konva.Path | null = null;

  private _startPoint: any | null = null;

  //clipper
  private _clipper: any = null;

  // undoables
  private _undoables: Undoable[] | null = [];

  // remove list
  private _removeTargets: Konva.Node[] | null = [];

  constructor(stageWrapper: StageWrapper) {
    super(stageWrapper);
    this._name = 'path';
  }

  stageMouseinFunction(e: MouseEvent): void {
    this._hasMousedown = e.buttons === 1 ? true : false;
  }
  stageMouseoutFunction(): void {}

  mousedownFunction(e: KonvaEventObject<MouseEvent>): void {
    if (e.evt.buttons === 4) return;
    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      'base-layer',
      this._stageWrapper?.stage?.getPointerPosition(),
    );
    if (pos) {
      this._startPoint = { x: pos.x, y: pos.y };
      if (!this._clip) {
        this._clip = new Konva.Path({
          stroke: ConfigManager.color,
          strokeWidth: 1,
          lineCap: 'round',
          id: uuidv4(),
          lineJoin: 'round',
          data: `M${pos.x} ${pos.y}`,
          draggable: false,
        });

        const layer = this._stageWrapper?.currentLayer;
        if (layer) layer.add(this._clip);
      }
    }
  }

  mousemoveFunction(e: KonvaEventObject<MouseEvent>): void {
    if (!this._hasMousedown) return;

    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      'base-layer',
      this._stageWrapper?.stage?.getPointerPosition(),
    );
    if (pos) {
      const newPath = this._clip?.data() + `L ${pos.x} ${pos.y}`;
      this._clip?.data(newPath);
      this._stageWrapper?.currentLayer?.batchDraw();
    }
  }

  mouseupFunction(e?: KonvaEventObject<MouseEvent>): void {
    const clipBefore = this._clip?.toObject();

    this._targetSimplify();
    this._undoables?.push(
      new Undoable(CORE_COMMAND.CREATE_SHAPE, null, [this._clip?.toObject()]),
    );

    if (ConfigManager.booleanOperation) {
      this._stageWrapper?.currentLayer
        ?.getChildren()
        .forEach((node: Konva.Node) => {
          this._recursive(node);
        });
    }

    const targetAfter = this._clip?.toObject();

    this._undoables?.push(
      new Undoable(CORE_COMMAND.UPDATE_SHAPE, [clipBefore], [targetAfter]),
    );

    if (this._removeTargets?.length) {
      this._removeTargets.forEach((node: Konva.Node) => {
        const root = getRoot(node);
        let before;

        before = node.toObject();
        node.destroy();
        this._undoables?.push(
          new Undoable(CORE_COMMAND.REMOVE_SHAPE, [before], null),
        );
        if (root && root.getChildren().length === 0) {
          root.destroy();
        }
      });
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

    this._clip = null;
  }

  private _targetSimplify() {
    if (!this._clip) return;
    // 폐곡선으로 만들어 준다.
    const newPath =
      this._clip.data() + `L ${this._startPoint.x} ${this._startPoint.y} Z`;
    this._clip.data(newPath);

    // 자동 채움
    this._clip.fill(ConfigManager.color);

    const targetPoints = pathToPoints(this._clip?.data());
    // 폐곡선 정점 ligntening
    const lightened_path = ClipperLib.JS.Lighten(targetPoints, 1);

    // 폐곡선 폴리곤 simplify
    const simplifyPonints = ClipperLib.Clipper.SimplifyPolygons(
      lightened_path,
      ClipperLib.PolyFillType.pftNonZero,
    ) as Polygons;

    this._clip.data(pointsToPath(simplifyPonints));
    this._clip.opacity(0.5);
  }

  private _recursive(node: Konva.Node) {
    if (this._clip !== node) {
      if (node.getClassName() === 'Group') {
        (node as Konva.Group)
          .getChildren()
          .forEach((child: Konva.Node) => this._recursive(child));
      } else {
        this._clipper.Clear();

        this._clipper.AddPaths(
          pathToPoints(this._clip?.data() as string).map((polygon: Polygon) => {
            return polygon.map((point: Point) => {
              const transformedPoint = this._clip
                ?.getAbsoluteTransform()
                .point({ x: point.X, y: point.Y }) as Konva.Vector2d;

              return { X: transformedPoint.x, Y: transformedPoint.y };
            });
          }),
          ClipperLib.PolyType.ptClip,
          true,
        );
        const newTargetPoints = pathToPoints((node as Konva.Path).data()).map(
          (polygon: Polygon) => {
            return polygon.map((point: Point) => {
              const transformedPoint = node
                ?.getAbsoluteTransform()
                .point({ x: point.X, y: point.Y }) as Konva.Vector2d;

              return { X: transformedPoint.x, Y: transformedPoint.y };
            });
          },
        );

        this._clipper.AddPaths(
          newTargetPoints,
          ClipperLib.PolyType.ptSubject,
          true,
        );
        const intersection_paths = new ClipperLib.Paths();

        this._clipper.Execute(
          ClipperLib.ClipType.ctIntersection,
          intersection_paths,
          ClipperLib.PolyFillType.pftNonZero,
          ClipperLib.PolyFillType.pftNonZero,
        );

        if (!intersection_paths.length) return;

        // 포함되는가? (clip이 subject보다 큰 경우)
        const clipClientRect = this._clip?.getClientRect() as IRect;
        const subjectRect = node.getClientRect();

        const intersectionParemeter =
          ClipperLib.JS.PerimeterOfPaths(intersection_paths);
        const subjectPerimeter =
          ClipperLib.JS.PerimeterOfPaths(newTargetPoints);

        if (
          clipClientRect.x < subjectRect.x &&
          clipClientRect.x + clipClientRect.width >
            subjectRect.x + subjectRect.width &&
          clipClientRect.y < subjectRect.y &&
          clipClientRect.y + clipClientRect.height >
            subjectRect.y + subjectRect.height &&
          intersectionParemeter === subjectPerimeter
        ) {
          this._removeTargets?.push(node);
        }

        const solution_polytree = new ClipperLib.PolyTree();

        let clipType = null;
        // 색이 같으면 union
        if ((node as Konva.Path).fill() === ConfigManager.color) {
          clipType = ClipperLib.ClipType.ctUnion;
        } else {
          // 다르면 subtract
          clipType = ClipperLib.ClipType.ctDifference;
        }

        this._clipper.Execute(
          clipType,
          solution_polytree,
          ClipperLib.PolyFillType.pftNonZero,
          ClipperLib.PolyFillType.pftNonZero,
        );

        let polynode = solution_polytree.GetFirst();

        let polyPath = [] as string[];
        while (polynode) {
          let path;
          if (clipType === ClipperLib.ClipType.ctDifference) {
            path = pointsToPath([
              polynode.m_polygon.map((pt: Point) => {
                const transformed = node
                  ?.getAbsoluteTransform()
                  .copy()
                  .invert()
                  .point({ x: pt.X, y: pt.Y }) as Konva.Vector2d;
                return { X: transformed.x, Y: transformed.y };
              }),
            ]);
          } else {
            path = pointsToPath([
              polynode.m_polygon.map((pt: Point) => {
                const transformed = this._clip
                  ?.getAbsoluteTransform()
                  .copy()
                  .invert()
                  .point({ x: pt.X, y: pt.Y }) as Konva.Vector2d;
                return { X: transformed.x, Y: transformed.y };
              }),
            ]);
          }

          if (polynode.IsHole()) {
            polyPath[polyPath.length - 1] += path;
          } else {
            polyPath.push(path);
          }
          polynode = polynode.GetNext();
        }

        if (polyPath.length) {
          if (clipType === ClipperLib.ClipType.ctDifference && this._clip) {
            // subject path 변경
            const before = node.toObject();
            (node as Konva.Path).data(polyPath.join(' ') + 'Z');
            const after = node.toObject();
            this._undoables?.push(
              new Undoable(CORE_COMMAND.UPDATE_SHAPE, [before], [after]),
            );
          } else {
            // clip에 병합
            this._clip?.data(polyPath.join(' ') + 'Z');
            this._removeTargets?.push(node);
          }
        }
      }
    }
  }

  keydownFunction(e: KeyboardEvent): void {
    if (e.code === 'Escape') {
      const pos = this._stageWrapper?.stage?.getPointerPosition();
      if (pos) {
        const newPath = this._clip?.data() + `L ${pos.x} ${pos.y} Z`;
        this._clip?.data(newPath);
      }
      this._clip = null;
    }
  }

  activateFunction(): void {
    this._clipper = new ClipperLib.Clipper();
  }
  deactivateFunction(): void {
    this._clip = null;
    this._clipper = null;
    this._undoables = null;
    this._startPoint = null;
    this._removeTargets = null;
  }
}
