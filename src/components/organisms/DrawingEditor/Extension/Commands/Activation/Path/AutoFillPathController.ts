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
    this._name = "path";
  }

  stageMouseinFunction(e: KonvaEventObject<MouseEvent>): void {
    this._hasMousedown = e.evt.buttons === 1 ? true : false;
  }
  stageMouseoutFunction(): void {
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

      this._startPoint = { x: pos.x, y: pos.y };
      if (!this._clip) {
        this._clip = new Konva.Path({
          stroke: ConfigManager.color,
          strokeWidth: 1,
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
    if (!this._hasMousedown) return;

    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      "base-layer",
      this._stageWrapper?.stage?.getPointerPosition()
    );
    if (pos) {
      if (!checkOnBackgroundImage(pos, this._stageWrapper as StageWrapper)) {
        this.mouseupFunction();
        return;
      }
      console.log(pos);

      const newPath = this._clip?.data() + `L ${pos.x} ${pos.y}`;
      this._clip?.data(newPath);
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
    // 폐곡선으로 만들어 준다.
    const newPath =
      this._clip.data() + `L ${this._startPoint.x} ${this._startPoint.y} Z`;
    this._clip.data(newPath);

    // 자동 채움
    this._clip.fill(ConfigManager.color);

    const targetPoints = pathToPoints(this._clip?.data());
    // 폐곡선 정점 ligntening
    const lightened_path = ClipperLib.JS.Lighten(targetPoints, 0.1);

    if (!lightened_path.length) return false;

    // 폐곡선 폴리곤 simplify
    // const simplifyPonints = ClipperLib.Clipper.SimplifyPolygons(
    //   lightened_path,
    //   ClipperLib.PolyFillType.pftNonZero
    // ) as Polygons;

    const cropped = cropWithBackgroundImage(
      newPath,
      this._stageWrapper as StageWrapper,
      this._clipper
    );

    if (cropped) {
      this._clip.data(pointsToPath(targetPoints));
      this._clip.opacity(0.5);
      return true;
    } else {
      return false;
    }
  }

  private _recursive(node: Konva.Node) {
    if (this._clip !== node) {
      if (node.getClassName() === "Text") return;
      if (node.getClassName() === "Group") {
        (node as Konva.Group).getChildren().forEach((child: Konva.Node) => {
          if (child.getAttr("UIType") === "label") this._recursive(child);
        });
      } else {
        if (node.getAttr("UIType") !== "label") return;
        this._clipper.Clear();

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
        ClipperLib.JS.ScaleUpPaths(clipPaths, 1000);

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

        ClipperLib.JS.ScaleUpPaths(newTargetPoints, 1000);

        this._clipper.AddPaths(
          newTargetPoints,
          ClipperLib.PolyType.ptSubject,
          true
        );
        const intersection_paths = new ClipperLib.Paths();

        console.log("INTERSECTION : ", intersection_paths);
        this._clipper.Execute(
          ClipperLib.ClipType.ctIntersection,
          intersection_paths,
          ClipperLib.PolyFillType.pftNonZero,
          ClipperLib.PolyFillType.pftNonZero
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
        if ((node as Konva.Path).stroke() === ConfigManager.color) {
          clipType = ClipperLib.ClipType.ctUnion;
        } else {
          // 다르면 subtract
          clipType = ClipperLib.ClipType.ctDifference;
        }

        this._clipper.Execute(
          clipType,
          solution_polytree,
          ClipperLib.PolyFillType.pftEvenOdd,
          ClipperLib.PolyFillType.pftEvenOdd
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
                  .point({ x: pt.X / 1000, y: pt.Y / 1000 }) as Konva.Vector2d;
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
                  .point({ x: pt.X / 1000, y: pt.Y / 1000 }) as Konva.Vector2d;
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
                  strokeScaleEnabled: false,
                  selected: false,
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
    if (e.code === "Escape") {
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
