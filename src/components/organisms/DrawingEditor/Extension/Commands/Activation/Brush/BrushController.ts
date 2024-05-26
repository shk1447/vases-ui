import Konva from "konva";
import ClipperLib, { Point, Polygon, Polygons } from "@doodle3d/clipper-lib";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";
import StageWrapper from "../../../../Core/Wrapper/StageWrapper";
import ConfigManager from "../../../../Config";
import pathToPoints from "../../../Utils/pathToPoints";
import pointsToPath from "../../../Utils/pointsToPath";
import { CORE_COMMAND } from "../../../../Core/Interfaces/Commands";
import BaseAbsctractController from "../../../../Core/BaseAbsctractController";
import Undoable from "../../../../Core/ConmmandRegistry/Actions/Undoable";
import { notifyManipulationCommandParameter } from "../../../../Core/ConmmandRegistry/Commands/NotifyManipulation";
import getRoot from "../../../Utils/getRoot";
import { IRect } from "konva/lib/types";
import checkOnBackgroundImage from "../../../Utils/checkOnBackgrounImage";
import cropWithBackgroundImage from "../../../Utils/cropWithBackgroundImage";

export default class BrushController extends BaseAbsctractController {
  // current drawing
  private _clip: Konva.Path | null = null;

  //clipper
  private _clipper: any = null;

  // undoables
  private _undoables: Undoable[] | null = [];

  // remove list
  private _removeTargets: Konva.Node[] | null = [];

  private _brush: Konva.Circle | null = null;

  constructor(stageWrapper: StageWrapper) {
    super(stageWrapper);
    this._name = "path";
  }

  stageMouseinFunction(e: KonvaEventObject<MouseEvent>): void {
    this._brush?.strokeWidth(ConfigManager.brushRadius);
    this._brush?.show();
  }
  stageMouseoutFunction(): void {
    this._brush?.hide();
    this.mouseupFunction();
  }

  mousedownFunction(e: KonvaEventObject<MouseEvent>): void {
    if (e.evt && e.evt.buttons !== 1) return;
    if (e.evt.buttons === 4) return;
    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      "base-layer",
      this._stageWrapper?.stage?.getPointerPosition()
    );
    if (pos) {
      if (!checkOnBackgroundImage(pos, this._stageWrapper as StageWrapper)) {
        return;
      }

      if (!this._clip) {
        this._clip = new Konva.Path({
          strokeWidth: ConfigManager.brushRadius / 2,
          stroke: ConfigManager.color,
          lineCap: "round",
          id: uuidv4(),
          lineJoin: "round",
          data: `M${pos.x} ${pos.y}`,
          draggable: false,
          selectable: true,
          UIType: "label",
          selected: false,
        });

        const layer = this._stageWrapper?.currentLayer;
        if (layer) layer.add(this._clip);
      }
    }
  }

  mousemoveFunction(e: KonvaEventObject<MouseEvent>): void {
    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      "base-layer",
      this._stageWrapper?.stage?.getPointerPosition()
    );

    if (pos) {
      this._brush?.position({
        x: pos.x,
        y: pos.y,
      });

      this._brush?.radius(ConfigManager.brushRadius / 2);
      this._brush?.fill(ConfigManager.color);
    }

    if (!this._hasMousedown) return;

    if (pos) {
      if (!checkOnBackgroundImage(pos, this._stageWrapper as StageWrapper)) {
        this.mouseupFunction();
        return;
      }

      const newPath = this._clip?.data() + `L ${pos.x} ${pos.y}`;
      this._clip?.data(newPath);
      this._clip?.strokeWidth(ConfigManager.brushRadius);

      this._stageWrapper?.currentLayer?.batchDraw();
    }
  }

  mouseupFunction(e?: KonvaEventObject<MouseEvent>): void {
    if (!this._targetSimplify()) {
      this._clip?.destroy();
      this._clip = null;
      return;
    }

    if (ConfigManager.booleanOperation) {
      this._stageWrapper?.currentLayer
        ?.getChildren()
        .forEach((node: Konva.Node) => {
          this._recursive(node);
        });
    }

    const targetAfter = this._clip?.toObject();

    const afterRect = this._clip?.getClientRect({ skipTransform: true }) as {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    targetAfter.attrs.posX = afterRect.x;
    targetAfter.attrs.posY = afterRect.y;
    targetAfter.attrs.lwidth = afterRect.width;
    targetAfter.attrs.lheight = afterRect.height;

    this._undoables?.push(
      new Undoable(CORE_COMMAND.CREATE_SHAPE, null, [targetAfter])
    );

    if (this._removeTargets?.length) {
      this._removeTargets.forEach((node: Konva.Node) => {
        const root = getRoot(node);
        let before;

        before = node.toObject();
        node.destroy();
        this._undoables?.push(
          new Undoable(CORE_COMMAND.REMOVE_SHAPE, [before], null)
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
        }
      );
      this._undoables = [];
    }

    this._clip = null;
  }

  private _targetSimplify(): boolean {
    if (!this._clip) return false;

    const scale = this._stageWrapper?.getScale() as number;

    const clipPath = pathToPoints((this._clip?.data() as string) + "Z");
    const transfromedEraseTargetPaths = clipPath.map((polygon: Polygon) => {
      return polygon.map((pt: Point) => {
        const targetTransform = this._clip
          ?.getTransform()
          .point({ x: pt.X, y: pt.Y });
        return { X: targetTransform?.x, Y: targetTransform?.y };
      });
    });

    const lightened_path = ClipperLib.JS.Lighten(
      transfromedEraseTargetPaths,
      0.1 / scale
    );
    ClipperLib.JS.ScaleUpPaths(transfromedEraseTargetPaths, 1000);

    const shape = [];
    for (let i = 0; i <= 36; i++) {
      shape.push({
        X: (ConfigManager.brushRadius / 2) * Math.cos(i * 10 * (Math.PI / 180)),
        Y: (ConfigManager.brushRadius / 2) * Math.sin(i * 10 * (Math.PI / 180)),
      });
    }

    ClipperLib.JS.ScaleUpPath(shape, 1000);

    // minkowski sum
    const eraser_paths_polygon = ClipperLib.Clipper.MinkowskiSum(
      shape,
      transfromedEraseTargetPaths,
      ClipperLib.PolyFillType.pftEvenOdd,
      false
    ) as Polygons;

    eraser_paths_polygon.map((polygon: Polygon) =>
      ClipperLib.Clipper.CleanPolygon(polygon, 100)
    );

    ClipperLib.JS.ScaleDownPaths(eraser_paths_polygon, 1000);

    // console.log(pointsToPath(eraser_paths_polygon));

    // console.log(
    //   pointsToPath(
    //     eraser_paths_polygon.map((polygon: Polygon) =>
    //       ClipperLib.Clipper.CleanPolygon(polygon)
    //     )
    //   )
    // );

    // this._stageWrapper?.backgroundImageLayer?.add(
    //   new Konva.Path({
    //     id: "test",
    //     strokeWidth: 1,
    //     stroke: "red",
    //     data: pointsToPath(eraser_paths_polygon),
    //   })
    // );

    const perimeter =
      ClipperLib.JS.PerimeterOfPaths(lightened_path, false, 1) / 1000;

    const solution_polytree = new ClipperLib.PolyTree();

    this._clipper.Clear();

    const _shape = [];
    for (let i = 0; i <= 36; i++) {
      _shape.push({
        X: (ConfigManager.brushRadius / 2) * Math.cos(i * 10 * (Math.PI / 180)),
        Y: (ConfigManager.brushRadius / 2) * Math.sin(i * 10 * (Math.PI / 180)),
      });
    }

    const _clip = _shape?.map((point: Point) => {
      const transformedPoint = this._brush
        ?.getTransform()
        .point({ x: point.X, y: point.Y }) as Konva.Vector2d;
      return {
        X: transformedPoint.x,
        Y: transformedPoint.y,
      };
    }) as Point[];

    ClipperLib.JS.ScaleUpPath(_clip, 1000);

    ClipperLib.JS.ScaleUpPaths(eraser_paths_polygon, 1000);

    this._clipper.AddPaths([_clip], ClipperLib.PolyType.ptSubject, true);
    this._clipper.AddPaths(
      eraser_paths_polygon,
      ClipperLib.PolyType.ptClip,
      true
    );

    this._clipper.Execute(
      ClipperLib.ClipType.ctUnion,
      solution_polytree,
      ClipperLib.PolyFillType.pftEvenOdd,
      ClipperLib.PolyFillType.pftEvenOdd
    );
    this._clipper.Clear();

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
        if (perimeter > ConfigManager.brushRadius) {
          holes.push({
            parent: polynode.Parent(),
            path: path,
          });
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
        (res.length
          ? res
              .map((f: any) => {
                return f.path;
              })
              .join(" ")
          : "")
      );
    });

    if (!polyPath.length) return false;

    const cropped = cropWithBackgroundImage(
      polyPath[0],
      this._stageWrapper as StageWrapper,
      this._clipper
    );

    if (cropped) {
      // this._stageWrapper?.backgroundImageLayer?.add(
      //   new Konva.Path({
      //     id: "test",
      //     strokeWidth: 1,
      //     stroke: "red",
      //     data: cropped,
      //   })
      // );
      this._clip.data(cropped);
      this._clip.setAttr("strokeWidth", 0);
      this._clip.setAttr("fill", ConfigManager.color);
      this._clip.opacity(0.5);
      return true;
    } else {
      return false;
    }
  }

  private _recursive(node: Konva.Node) {
    if (this._clip !== node) {
      if (node.id() === "brush" || node.getClassName() === "Text") return;
      if (node.getClassName() === "Group") {
        (node as Konva.Group).getChildren().forEach((child: Konva.Node) => {
          if (child.getAttr("UIType") === "label") this._recursive(child);
        });
      } else {
        if (node.getAttr("UIType") !== "label") return;
        this._clipper.Clear();

        const scale = this._stageWrapper?.getScale() as number;

        const clipPaths = pathToPoints(this._clip?.data() as string).map(
          (polygon: Polygon) => {
            return polygon.map((point: Point) => {
              const transformedPoint = this._clip
                ?.getTransform()
                .point({ x: point.X, y: point.Y }) as Konva.Vector2d;

              return { X: transformedPoint.x, Y: transformedPoint.y };
            });
          }
        );

        ClipperLib.JS.ScaleUpPaths(clipPaths, 1000 / scale);

        this._clipper.AddPaths(clipPaths, ClipperLib.PolyType.ptClip, true);
        const newTargetPoints = pathToPoints((node as Konva.Path).data()).map(
          (polygon: Polygon) => {
            return polygon.map((point: Point) => {
              const transformedPoint = node
                ?.getTransform()
                .point({ x: point.X, y: point.Y }) as Konva.Vector2d;

              return { X: transformedPoint.x, Y: transformedPoint.y };
            });
          }
        );

        ClipperLib.JS.ScaleUpPaths(newTargetPoints, 1000 / scale);

        this._clipper.AddPaths(
          newTargetPoints,
          ClipperLib.PolyType.ptSubject,
          true
        );
        const intersection_paths = new ClipperLib.Paths();

        this._clipper.Execute(
          ClipperLib.ClipType.ctIntersection,
          intersection_paths,
          ClipperLib.PolyFillType.pftNonZero,
          ClipperLib.PolyFillType.pftNonZero
        );

        if (!intersection_paths.length) return;

        // 포함되는가? (clip이 subject보다 큰 경우)
        const clipClientRect = this._clip?.getClientRect({
          skipTransform: true,
        }) as IRect;
        const subjectRect = node.getClientRect({ skipTransform: true });

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
        if ((node as Konva.Path).stroke() === ConfigManager.color) {
          clipType = ClipperLib.ClipType.ctUnion;
        } else {
          // 다르면 subtract
          clipType = ClipperLib.ClipType.ctDifference;
        }

        this._clipper.Execute(
          clipType,
          solution_polytree,
          ClipperLib.PolyFillType.pftNonZero,
          ClipperLib.PolyFillType.pftNonZero
        );

        let polynode = solution_polytree.GetFirst();

        let polyPath = [] as string[];
        while (polynode) {
          let path;
          if (clipType === ClipperLib.ClipType.ctDifference) {
            path = pointsToPath([
              polynode.m_polygon.map((pt: Point) => {
                const transformed = node
                  ?.getTransform()
                  .copy()
                  .invert()
                  .point({
                    x: (pt.X * scale) / 1000,
                    y: (pt.Y * scale) / 1000,
                  }) as Konva.Vector2d;
                return { X: transformed.x, Y: transformed.y };
              }),
            ]);
          } else {
            path = pointsToPath([
              polynode.m_polygon.map((pt: Point) => {
                const transformed = this._clip
                  ?.getTransform()
                  .copy()
                  .invert()
                  .point({
                    x: (pt.X * scale) / 1000,
                    y: (pt.Y * scale) / 1000,
                  }) as Konva.Vector2d;
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
            polyPath.forEach((path: string, index: number) => {
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
                node.parent?.position({ x: 0, y: 0 });
                node.parent?.scale({ x: 1, y: 1 });
                node.parent?.rotate(0);

                node.setAttr("strokeScaleEnabled", false);
              } else {
                const result = new Konva.Path({
                  stroke: (node as Konva.Path).stroke(),
                  id: uuidv4(),
                  strokeWidth: (node as Konva.Path).strokeWidth(),
                  fill: (node as Konva.Path).fill(),

                  lineCap: (node as Konva.Path).lineCap(),
                  lineJoin: (node as Konva.Path).lineJoin(),
                  opacity: (node as Konva.Path).opacity(),
                  draggable: false,
                  data: path + "Z",
                  classId: node.getAttr("classId"),
                  selectable: true,
                  UIType: "label",
                  selected: false,
                  strokeScaleEnabled: false,
                });
                const rect = result.getClientRect({ skipTransform: true });
                result.setAttrs({
                  posX: rect.x,
                  posY: rect.y,
                  lwidth: rect.width,
                  lheight: rect.height,
                });
                this._stageWrapper?.currentLayer?.add(result);

                this._undoables?.push(
                  new Undoable(CORE_COMMAND.CREATE_SHAPE, null, [
                    result.toObject(),
                  ])
                );
              }
            });
          } else {
            // clip에 병합
            this._clip?.data(polyPath.join(" ") + "Z");
            this._removeTargets?.push(node);
          }
        }
      }
    }
  }

  keydownFunction(e: KeyboardEvent): void {
    if (e.code === "Escape" || e.code === "Space") {
      this._clip?.destroy();
      this._clip = null;
    }
  }

  activateFunction(): void {
    this._clipper = new ClipperLib.Clipper();

    const brushUIPoints = [];

    for (let i = 0; i <= 36; i++) {
      brushUIPoints.push(
        Math.cos(i * 10 * (Math.PI / 180)),
        Math.sin(i * 10 * (Math.PI / 180))
      );
    }

    this._brush = new Konva.Circle({
      id: "brush",
      radius: ConfigManager.brushRadius / 2,
      strokeScaleEnabled: false,
      // stroke: ConfigManager.color,
      fill: ConfigManager.color,
      // fill: "rgba(255,255,255,.6)",
      // points: brushUIPoints,
      // closed: true,
      visible: false,
      opacity: 0.4,
      UIType: "controller",
    });
    this._brush?.hide();

    this._stageWrapper?.backgroundImageLayer?.add(this._brush);

    const img = this._stageWrapper?.backgroundImageLayer?.getChildren(
      (child: Konva.Node) => child.getClassName() === "Image"
    );
  }
  deactivateFunction(): void {
    this._clip?.destroy();
    this._clip = null;
    this._brush?.destroy();
    this._brush = null;
    this._clipper = null;
    this._undoables = null;
    this._removeTargets = null;
  }
}
