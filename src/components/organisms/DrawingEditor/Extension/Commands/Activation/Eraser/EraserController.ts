import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

import ClipperLib, { Point, Polygon, Polygons } from "@doodle3d/clipper-lib";
import { RenderTarget } from "../../../../Core/Interfaces/Konva";
import StageWrapper from "../../../../Core/Wrapper/StageWrapper";
import ConfigManager from "../../../../Config";
import pathToPoints from "../../../Utils/pathToPoints";
import pointsToPath from "../../../Utils/pointsToPath";
import { CORE_COMMAND } from "../../../../Core/Interfaces/Commands";
import BaseAbsctractController from "../../../../Core/BaseAbsctractController";
import Undoable from "../../../../Core/ConmmandRegistry/Actions/Undoable";
import { notifyManipulationCommandParameter } from "../../../../Core/ConmmandRegistry/Commands/NotifyManipulation";
import { IRect } from "konva/lib/types";
import { removeShapeCommandParameter } from "@vases-ui/components/organisms/DrawingEditor/Core/ConmmandRegistry/Commands/Remove";
import checkOnBackgroundImage from "../../../Utils/checkOnBackgrounImage";
import { OUTER_HANDLER_TYPE } from "@vases-ui/components/organisms/DrawingEditor/Core";

enum EraseEventType {
  MOUSE_DOWN = "@mousedown",
  MOUSE_UP = "@mouseup",
}

const shape = [] as any;
for (let i = 0; i <= 36; i++) {
  shape.push({
    X: Math.cos(i * 36 * (Math.PI / 180)),
    Y: Math.sin(i * 36 * (Math.PI / 180)),
  });
}

ClipperLib.JS.ScaleUpPath(shape, (ConfigManager.eraserRadius / 2) * 100);

export default class EraserController extends BaseAbsctractController {
  // eraser trace
  private _target: Konva.Path | null = null;

  // eraser ui
  private _eraser: Konva.Circle | null = null;

  private _clipper: any = new ClipperLib.Clipper();

  // remove target
  private _removeTargets: Konva.Path[] | null = [];

  private _mousedownClip: Polygons | null = null;
  private _mouseupClip: Polygon | null = null;

  private _undoables: Undoable[] | null = [];

  private _objectEraserTempColor: string = "";

  private _objectEraserTempId: string = "";

  constructor(stageWrapper: StageWrapper) {
    super(stageWrapper);
    this._name = "eraser";
  }

  public afterExecutedCommand(): void {
    this._stageWrapper?.currentLayer
      ?.getChildren()
      .forEach((node: Konva.Node) => {
        this._attachMouseOverHandler(node);
      });
  }
  mousedownFunction(e: KonvaEventObject<MouseEvent>): void {
    if (e.evt && e.evt.buttons !== 1) return;
    if (e.evt.buttons === 4) return;

    if (ConfigManager.eraserMode === "object") {
      if (this._objectEraserTempId === e.target.getAttr("id")) {
        this._stageWrapper?.commandRegistry?.execute(
          CORE_COMMAND.REMOVE_SHAPE,
          {
            ids: [e.target.id()],
          }
        );
        this._objectEraserTempColor = "";
        this._objectEraserTempId = "";
      }
    }
    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      "base-layer",
      this._stageWrapper?.stage?.getPointerPosition()
    );
    if (pos) {
      if (!checkOnBackgroundImage(pos, this._stageWrapper as StageWrapper)) {
        return;
      }

      this._eraser?.position({
        x: pos.x,
        y: pos.y,
      });

      if (!this._target) {
        this._target = new Konva.Path({
          stroke: "rgba(255, 255, 255, 0.6)",
          strokeWidth: ConfigManager.eraserRadius / 2,
          strokeScaleEnabled: true,
          draggable: false,
          id: "eraser-path",
          lineCap: "round",
          lineJoin: "round",
          data: `M ${pos.x} ${pos.y}`,
          UIType: "controller",
        });
        const layer = this._stageWrapper?.currentLayer;
        if (layer) layer.add(this._target);
      }
      if (ConfigManager.eraserMode === "pixel")
        this._erase(EraseEventType.MOUSE_DOWN);
    }
  }

  mousemoveFunction(e: KonvaEventObject<MouseEvent>): void {
    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      "base-layer",
      this._stageWrapper?.stage?.getPointerPosition()
    );

    if (pos) {
      this._eraser?.position({
        x: pos.x,
        y: pos.y,
      });
      this._eraser?.radius(ConfigManager.eraserRadius / 2);
    }

    if (ConfigManager.eraserMode === "object") {
      if (e.target.getClassName() === "Path") {
        if (this._objectEraserTempColor.length) return;
        this._objectEraserTempColor = e.target.getAttr("stroke");
        this._objectEraserTempId = e.target.getAttr("id");
        e.target.setAttr("stroke", "red");
      }
    }
    if (!this._hasMousedown) return;

    if (ConfigManager.eraserMode === "pixel") {
      if (pos) {
        if (!checkOnBackgroundImage(pos, this._stageWrapper as StageWrapper)) {
          this.mouseupFunction();
          return;
        }

        this._target?.moveToTop();
        this._target?.data(this._target.data() + `L ${pos.x} ${pos.y}`);
        this._target?.strokeWidth(ConfigManager.eraserRadius);

        this._stageWrapper?.currentLayer?.batchDraw();
      }
    }
  }
  mouseupFunction(e?: KonvaEventObject<MouseEvent>): void {
    if (ConfigManager.eraserMode === "pixel") {
      this._target?.hide();
      this._erase(EraseEventType.MOUSE_UP);
      this._target?.destroy();
      this._target = null;
      this._stageWrapper?.currentLayer?.batchDraw();
    }
  }
  keydownFunction(e: KeyboardEvent): void {
    if (ConfigManager.eraserMode === "pixel") {
      if (e.code === "Escape") {
        this._target?.destroy();
        this._target = null;
      }
    }

    if (e.code === "Space") {
      this._target?.destroy();
      this._target = null;
    }
  }

  activateFunction(): void {
    this._stageWrapper?.currentLayer
      ?.getChildren()
      .forEach((node: Konva.Node) => {
        this._attachMouseOverHandler(node);
      });

    if (this._eraser) return;
    const eraserUIPoints = [];
    for (let i = 0; i <= 36; i++) {
      eraserUIPoints.push(
        Math.cos(i * 10 * (Math.PI / 180)),
        Math.sin(i * 10 * (Math.PI / 180))
      );
    }

    this._eraser = new Konva.Circle({
      id: "eraser",
      radius: ConfigManager.eraserRadius / 2,
      // strokeWidth: ConfigManager.eraserRadius,
      strokeScaleEnabled: false,
      // stroke: "rgba(255,255,255,.6)",
      fill: "rgba(255,255,255,.6)",
      // points: eraserUIPoints,
      closed: true,
      UIType: "controller",
      scaleX: 1,
      scaleY: 1,
    });
    this._eraser.on("mousemove", (evt: any) => (evt.cancelBubble = true));
    // this._eraser.on("mousedown", (evt: any) => (evt.cancelBubble = true));
    this._eraser?.hide();

    this._stageWrapper?.backgroundImageLayer?.add(this._eraser);
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
  stageMouseinFunction(e: KonvaEventObject<MouseEvent>): void {
    this._eraser?.strokeWidth(ConfigManager.eraserRadius);
    this._eraser?.show();
  }
  stageMouseoutFunction(e: KonvaEventObject<MouseEvent>): void {
    this._eraser?.hide();
    this.mouseupFunction();
  }

  private objectRecursive(node: Konva.Node) {
    const boundingRect = (
      this._eraser as unknown as Konva.Shape
    )?.getClientRect({ skipStroke: false });
    if (
      node !== this._target &&
      node !== this._eraser &&
      Konva.Util.haveIntersection(
        boundingRect,
        node.getClientRect({ skipStroke: true })
      )
    ) {
      if (node.id() === "eraser" || node.getClassName() === "Text") return;
      if (node.getClassName() === "Group") {
        (node as Konva.Group)
          .getChildren()
          .forEach((child: Konva.Node) => this.objectRecursive(child));
      } else {
        this._removeTargets?.push(node as Konva.Path);

        return;
      }
    }
  }

  private _attachMouseOverHandler(node: Konva.Node) {
    if (node !== this._target && node !== this._eraser) {
      if (node.getClassName() === "Text") return;
      if (node.getClassName() === "Group") {
        (node as Konva.Group)
          .getChildren()
          .forEach((child: Konva.Node) => this._attachMouseOverHandler(child));
      } else {
        node.off("mouseleave");
        node.on("mouseleave", (e: any) => {
          if (ConfigManager.eraserMode === "object") {
            node.setAttr("stroke", this._objectEraserTempColor);
            this._objectEraserTempId = "";
            this._objectEraserTempColor = "";
          }
        });
      }
    }
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
        node.getClientRect({ skipStroke: true })
      )
    ) {
      if (node.id() === "eraser" || node.getClassName() === "Text") return;
      if (node.getClassName() === "Group") {
        (node as Konva.Group).getChildren().forEach((child: Konva.Node) => {
          if (child.getAttr("UIType") === "label")
            this._recursive(child, type, clip);
        });
      } else {
        if (node.getAttr("UIType") !== "label") return;

        this._clipper.AddPaths(clip, ClipperLib.PolyType.ptClip, true);

        const nodePoints = pathToPoints((node as Konva.Path).data()).map(
          (polygon: Polygon) => {
            return polygon.map((point: Point) => {
              const transformedPoint = node
                ?.getTransform()
                .point({ x: point.X, y: point.Y }) as unknown as any;

              return { X: transformedPoint.x, Y: transformedPoint.y };
            });
          }
        );

        ClipperLib.JS.ScaleUpPaths(nodePoints, 1000);

        this._clipper.AddPaths(nodePoints, ClipperLib.PolyType.ptSubject, true);

        const solution_polytree = new ClipperLib.PolyTree();
        this._clipper.Execute(
          ClipperLib.ClipType.ctDifference,
          solution_polytree,
          ClipperLib.PolyFillType.pftEvenOdd,
          ClipperLib.PolyFillType.pftEvenOdd
        );

        let polynode = solution_polytree.GetFirst();

        let holes = [] as any[];
        let fills = [] as any[];
        while (polynode) {
          const path = pointsToPath([
            polynode.m_polygon.map((pt: Point) => {
              return { X: pt.X / 1000, Y: pt.Y / 1000 };
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
          return (
            d.path +
            res.map((f: any) => {
              return f.path;
            })
          );
        });

        // 지우개 경로에 비해 node가 매우 작으면 아래와 같은 조건으로 잡아낸다.
        if (!holes.length && !fills.length) {
          this._removeTargets?.push(node as Konva.Path);
          return;
        }

        if (ConfigManager.booleanOperation) {
          if (polyPath.length) {
            polyPath.forEach((path: string, index: number) => {
              const newPolygons = pathToPoints(path);

              if (index === 0) {
                const nodeBefore = node.toObject();
                (node as Konva.Path).data(path + "Z");
                const rect = node.getClientRect({ skipTransform: true });
                node.setAttrs({
                  posX: rect.x,
                  posY: rect.y,
                  lwidth: rect.width,
                  lheight: rect.height,
                });
                this._undoables?.push(
                  new Undoable(
                    CORE_COMMAND.UPDATE_SHAPE,
                    [nodeBefore],
                    [node.toObject()]
                  )
                );
              } else {
                const result = new Konva.Path({
                  stroke: (node as Konva.Path).stroke(),
                  id: uuidv4(),
                  strokeWidth: (node as Konva.Path).strokeWidth(),
                  fill: (node as Konva.Path).fill(),
                  fillEnabled: (node as Konva.Path).fillEnabled(),
                  // dash: (node as Konva.Path).dash(),
                  // dashEnabled: (node as Konva.Path).dashEnabled(),
                  lineCap: (node as Konva.Path).lineCap(),
                  lineJoin: (node as Konva.Path).lineJoin(),
                  opacity: (node as Konva.Path).opacity(),
                  draggable: false,
                  data: path,
                  classId: node.getAttr("classId"),
                  strokeScaleEnabled: false,
                  selectable: true,
                  UIType: "label",
                  selected: false,
                  hitStrokeWidth: 10,
                });
                const rect = result.getClientRect({ skipTransform: true });
                result.setAttrs({
                  posX: rect.x,
                  posY: rect.y,
                  lwidth: rect.width,
                  lheight: rect.height,
                });
                if (node.parent?.getClassName() === "Group") {
                  node.parent.add(result);
                  this._undoables?.push(
                    new Undoable(CORE_COMMAND.CREATE_SHAPE, null, [
                      result.toObject(),
                    ])
                  );
                } else {
                  this._stageWrapper?.currentLayer?.add(result);
                  this._undoables?.push(
                    new Undoable(CORE_COMMAND.CREATE_SHAPE, null, [
                      result.toObject(),
                    ])
                  );
                }
              }
            });
          }
          // this._removeTargets?.push(node as Konva.Path);
        } else {
          if (polyPath.length) {
            const nodeBefore = node.toObject();
            (node as Konva.Path).data(polyPath.join(" ") + "Z");
            this._undoables?.push(
              new Undoable(
                CORE_COMMAND.UPDATE_SHAPE,
                [nodeBefore],
                [node.toObject()]
              )
            );
          }
        }
      }
    }
  }

  private _erase(type: EraseEventType): void {
    if (!this._target) return;

    const layer = this._stageWrapper?.currentLayer;

    if (type === EraseEventType.MOUSE_UP) {
      const eraseTargetPaths = pathToPoints(
        (this._target?.data() as string) + "Z"
      );
      const transfromedEraseTargetPaths = eraseTargetPaths.map(
        (polygon: Polygon) => {
          return polygon.map((pt: Point) => {
            const targetTransform = this._target
              ?.getTransform()
              .point({ x: pt.X, y: pt.Y });
            return { X: targetTransform?.x, Y: targetTransform?.y };
          });
        }
      );

      // path lightening
      const lightened_path = ClipperLib.JS.Lighten(
        transfromedEraseTargetPaths,
        0.1
      );

      ClipperLib.JS.ScaleUpPaths(transfromedEraseTargetPaths, 1000);

      const shape = [];
      for (let i = 0; i <= 36; i++) {
        shape.push({
          X:
            (ConfigManager.eraserRadius / 2) *
            Math.cos(i * 10 * (Math.PI / 180)),
          Y:
            (ConfigManager.eraserRadius / 2) *
            Math.sin(i * 10 * (Math.PI / 180)),
        });
      }

      ClipperLib.JS.ScaleUpPath(shape, 1000);

      // minkowski sum
      const eraser_paths_polygon = ClipperLib.Clipper.MinkowskiSum(
        shape,
        transfromedEraseTargetPaths,
        false
      ) as Polygons;

      eraser_paths_polygon.map((polygon: Polygon) =>
        ClipperLib.Clipper.CleanPolygon(polygon, 100)
      );

      ClipperLib.JS.ScaleDownPaths(eraser_paths_polygon, 1000);

      const perimeter =
        ClipperLib.JS.PerimeterOfPaths(lightened_path, false, 1) / 1000;

      this._mouseupClip = eraser_paths_polygon as any;

      if (this._mousedownClip) {
        if (this._mouseupClip) {
          this._clipper.Clear();

          // ClipperLib.JS.ScaleUpPaths(this._mousedownClip, 1000);
          ClipperLib.JS.ScaleUpPaths(this._mouseupClip, 1000);

          const _shape = [];
          for (let i = 0; i <= 36; i++) {
            _shape.push({
              X:
                (ConfigManager.eraserRadius / 2) *
                Math.cos(i * 10 * (Math.PI / 180)),
              Y:
                (ConfigManager.eraserRadius / 2) *
                Math.sin(i * 10 * (Math.PI / 180)),
            });
          }

          const _clip = _shape?.map((point: Point) => {
            const transformedPoint = this._eraser
              ?.getTransform()
              .point({ x: point.X, y: point.Y }) as Konva.Vector2d;
            return {
              X: transformedPoint.x,
              Y: transformedPoint.y,
            };
          }) as Point[];

          ClipperLib.JS.ScaleUpPath(_clip, 1000);

          this._clipper.AddPaths([_clip], ClipperLib.PolyType.ptSubject, true);

          this._clipper.AddPaths(
            this._mouseupClip,
            ClipperLib.PolyType.ptClip,
            true
          );
          // const test = new ClipperLib.Paths();
          // this._clipper.Execute(
          //   ClipperLib.ClipType.ctUnion,
          //   test,
          //   ClipperLib.PolyFillType.pftNegative,
          //   ClipperLib.PolyFillType.pftNonZero
          // );

          const solution_polytree = new ClipperLib.PolyTree();

          this._clipper.Execute(
            ClipperLib.ClipType.ctUnion,
            solution_polytree,
            ClipperLib.PolyFillType.pftEvenOdd,
            ClipperLib.PolyFillType.pftNonZero
          );
          this._clipper.Clear();

          let polynode = solution_polytree.GetFirst();
          // let polyPath = [] as string[];

          let holes = [] as any[];
          let fills = [] as any[];
          while (polynode) {
            const path = pointsToPath([
              polynode.m_polygon.map((pt: Point) => {
                return { X: pt.X / 1000, Y: pt.Y / 1000 };
              }),
            ]);

            if (polynode.IsHole()) {
              if (perimeter > ConfigManager.eraserRadius) {
                holes.push({
                  parent: polynode.Parent(),
                  path: path,
                });
              } else {
                // holes.push({
                //   parent: solution_polytree.GetFirst(),
                //   path: path,
                // });
              }
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
            return (
              d.path +
              res.map((f: any) => {
                return f.path;
              })
            );
          });

          // this._stageWrapper?.backgroundImageLayer?.add(
          //   new Konva.Path({
          //     id: "test",
          //     strokeWidth: 1,
          //     stroke: "red",
          //     data: polyPath[0],
          //   })
          // );
          // console.log("PolyPath: ", polyPath);

          const clip = pathToPoints(polyPath[0]);
          ClipperLib.JS.ScaleUpPaths(clip, 1000);

          layer?.getChildren().forEach((node: Konva.Node) => {
            this._recursive(node, type, clip);
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
      const shape = [];
      for (let i = 0; i <= 36; i++) {
        shape.push({
          X: Math.cos(i * 10 * (Math.PI / 180)),
          Y: Math.sin(i * 10 * (Math.PI / 180)),
        });
      }
      ClipperLib.JS.ScaleUpPath(shape, ConfigManager.eraserRadius);

      const clip = shape?.map((point: Point) => {
        const transformedPoint = this._eraser
          ?.getTransform()
          .point({ x: point.X, y: point.Y }) as Konva.Vector2d;
        return {
          X: transformedPoint.x,
          Y: transformedPoint.y,
        };
      }) as Point[];

      ClipperLib.JS.ScaleUpPath(clip, 1000);

      this._mousedownClip = [clip];
    }

    if (this._removeTargets?.length) {
      this._undoables?.push(
        ...this._removeTargets?.map(
          (value: Konva.Shape) =>
            new Undoable(CORE_COMMAND.REMOVE_SHAPE, [value.toObject()], null)
        )
      );

      this._removeTargets.forEach((value: Konva.Shape) => value.destroy());
      this._removeTargets = [];
    }
    if (this._undoables?.length) {
      this._stageWrapper?.commandRegistry?.execute<notifyManipulationCommandParameter>(
        CORE_COMMAND.NOTIFY_MANIPULATION,
        {
          undoables: this._undoables,
        }
      );
      this._undoables = [];
    }

    if (this._eraser) this._eraser?.moveToTop();

    this._stageWrapper?.currentLayer?.batchDraw();
  }
}
