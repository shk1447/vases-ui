import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { after } from "lodash";
import BaseAbsctractController from "../../../../Core/BaseAbsctractController";
import Undoable from "../../../../Core/ConmmandRegistry/Actions/Undoable";

import { notifyManipulationCommandParameter } from "../../../../Core/ConmmandRegistry/Commands/NotifyManipulation";
import { removeShapeCommandParameter } from "../../../../Core/ConmmandRegistry/Commands/Remove";
import { selectShapeCommandParameter } from "../../../../Core/ConmmandRegistry/Commands/Select";

import { CORE_COMMAND } from "../../../../Core/Interfaces/Commands";
import StageWrapper from "../../../../Core/Wrapper/StageWrapper";
import getRoot from "../../../Utils/getRoot";
import pointsToPath from "../../../Utils/pointsToPath";
import { Point, Polygon } from "@doodle3d/clipper-lib";
import pathToPoints from "../../../Utils/pathToPoints";

export default class SelectionController extends BaseAbsctractController {
  private _selectionLayer: Konva.Layer | null = null;
  private _hasSelected: boolean = false;
  stageMouseinFunction(): void {}
  stageMouseoutFunction(): void {
    this._stageWrapper?.stage?.fire("mouseup");
    this._hasMousedown = false;
  }

  activateFunction(): void {
    this._selectionLayer = new Konva.Layer({ id: "selection-layer" });
    this._stageWrapper?.stage?.add(this._selectionLayer);
  }

  deactivateFunction(): void {
    this._stageWrapper?.commandRegistry?.execute<selectShapeCommandParameter>(
      CORE_COMMAND.SELECT_SHAPE,
      {
        ids: [],
        isSeperate: false,
      }
    );
    this._selectionLayer?.destroy();
    this._selectionLayer = null;
    this.selectionRect = null;
    this.startingPoint = null;
    this.endPoint = null;
    this._hasSelected = false;
  }
  private selectionRect: Konva.Rect | null = null;
  private startingPoint: number[] | null = [];
  private endPoint: number[] | null = [];

  constructor(stageWrapper: StageWrapper) {
    super(stageWrapper);
    this._name = "selection";
  }

  mousedownFunction(e: KonvaEventObject<MouseEvent>): void {
    e.evt.preventDefault();

    /**
     * Stage 클릭하면 Transform 제거
     * background image가 있으면 class name이 Image 이다.
     */
    if (e.evt && e.evt.buttons !== 1) return;
    if (e.evt.buttons === 4) return;
    if (e.target.parent?.getClassName() === "Transformer") return;
    if (
      e.target.getClassName() === "Stage" ||
      e.target.getClassName() === "Image"
    ) {
      this._stageWrapper?.commandRegistry?.execute<selectShapeCommandParameter>(
        CORE_COMMAND.SELECT_SHAPE,
        {
          ids: [],
          isSeperate: false,
        }
      );

      const pos = this._stageWrapper?.getPointerPositionOnLayer(
        "base-layer",
        this._stageWrapper?.stage?.getPointerPosition()
      );

      const x1 = pos?.x;
      const y1 = pos?.y;
      if (x1 && y1) {
        this.startingPoint = [x1, y1];
      }
      return;
    } else if (e.target.getClassName() !== "Image") {
      if (this.startingPoint) {
        this.startingPoint = null;
      }
      const root = getRoot(e.target);
      if (!e.target.getAttr("selectable")) return;
      const target = root ? root : e.target;
      if (target?.getAttr("selected")) {
        // 지금 선택된거 이외의 것은 transform 다 떼고
        const selected = (
          this._stageWrapper as StageWrapper
        ).getSelectedShapes();
        if (
          selected.length > 1 &&
          (
            (this._stageWrapper?.transformLayer as Konva.Layer).getChildren(
              (node: Konva.Node) => node.getClassName() === "Transformer"
            ) as Konva.Transformer[]
          ).length > 1
        ) {
          const filtered = selected.filter(
            (node: Konva.Node) => node.id() !== target.id()
          );
          if (filtered.length) {
            filtered.forEach((node: Konva.Node) => {
              node.draggable(false);
              node.setAttr("selected", false);
            });
            this._stageWrapper?.commandRegistry?.execute<selectShapeCommandParameter>(
              CORE_COMMAND.SELECT_SHAPE,
              {
                ids: [target?.id()],
                isSeperate: false,
              }
            );
            target.fire("mousedown", e);
            this._hasSelected = false;
          }
        }
        return;
      }

      this._stageWrapper?.commandRegistry?.execute<selectShapeCommandParameter>(
        CORE_COMMAND.SELECT_SHAPE,
        {
          ids: [root ? root.id() : (e.target as Konva.Shape).id()],
          isSeperate: false,
        }
      );
      (root ? root : e.target).fire("mousedown", e);
      this._hasSelected = true;
    }
    return;
  }
  mousemoveFunction(e: KonvaEventObject<MouseEvent>): void {
    e.evt.preventDefault();

    if (this._hasSelected) return;
    // if (
    //   e.target.getClassName() === "Stage" ||
    //   e.target.getClassName() === "Image" ||
    //   e.target.getClassName() === "Layer"
    // )
    //   return;
    // if (e.target.parent?.getClassName() === "Transformer") return;
    /**
     * drag 하면 선택 영역 사각형을 만든다.
     */
    const pos = this._stageWrapper?.getPointerPositionOnLayer(
      "base-layer",
      this._stageWrapper?.stage?.getPointerPosition()
    );

    if (this._hasMousedown && e.evt.buttons === 1) {
      const x2 = pos?.x;
      const y2 = pos?.y;

      if (x2 && y2) this.endPoint = [x2, y2];

      if (!this.selectionRect) {
        this.selectionRect = new Konva.Rect({
          stroke: "black",
          strokeWidth: 2,
          dashEnabled: true,
          dash: [4],
          fill: "rgba(0,0,0,0.1)",
          strokeScaleEnabled: false,
          visible: true,
          width: 0,
          height: 0,
        });
        this._selectionLayer?.add(this.selectionRect);
        return;
      }

      if (this.startingPoint && this.endPoint) {
        this.selectionRect?.setAttrs({
          x: Math.min(this.startingPoint[0], this.endPoint[0]),
          y: Math.min(this.startingPoint[1], this.endPoint[1]),
          width: Math.abs(this.endPoint[0] - this.startingPoint[0]),
          height: Math.abs(this.endPoint[1] - this.startingPoint[1]),
        });
        this._stageWrapper?.currentLayer?.batchDraw();
      }
    }
  }

  mouseupFunction(e?: KonvaEventObject<MouseEvent>): void {
    e?.evt?.preventDefault();
    /**
     * mouseup 했을때 영역선택 사각형이 있으면 선택처리 한다.
     */
    if (!this.selectionRect || !this.selectionRect?.visible()) {
      return;
    }

    // 처음에 초기화 시키는 이유가 없어보임...?
    // this._stageWrapper?.commandRegistry?.execute<selectShapeCommandParameter>(
    //   CORE_COMMAND.SELECT_SHAPE,
    //   {
    //     ids: [],
    //     isSeperate: false,
    //   },
    // );

    const box = this.selectionRect?.getClientRect({
      skipStroke: true,
      skipTransform: true,
    });
    const selected = this._stageWrapper?.currentLayer?.getChildren(
      (shape: Konva.Node) => {
        if (!shape.id()) return false;
        if (!shape.getAttr("selectable")) return false;
        if (shape === this.selectionRect) return false;
        if (shape.getClassName() === "Transformer") return false;
        return Konva.Util.haveIntersection(
          box,
          shape.getClientRect({ skipStroke: true, skipTransform: true })
        );
      }
    );
    if (selected && selected.length) {
      this._stageWrapper?.commandRegistry?.execute<selectShapeCommandParameter>(
        CORE_COMMAND.SELECT_SHAPE,
        {
          ids: selected.map((value: Konva.Group | Konva.Shape) => value.id()),
          isSeperate: false,
        }
      );
    }
    this.selectionRect?.destroy();
    this.selectionRect = null;
    this.startingPoint = null;
    this.endPoint = null;
  }
  keydownFunction(e: KeyboardEvent): void {
    if (e.code === "Escape") {
      this._selectionLayer?.destroy();
      this._selectionLayer = null;
    } else if (e.code === "Delete") {
      const selected = this._stageWrapper?.getSelectedShapes();
      if (selected) {
        // selected.forEach((node: Konva.Node) => {
        //   if (node.getClassName() === "Path") {
        //     node.setAttr(
        //       "data",
        //       pointsToPath(
        //         pathToPoints(node.getAttr("data")).map((polygon: Polygon) => {
        //           return polygon.map((point: Point) => {
        //             const transformedPoint = node
        //               ?.getTransform()
        //               .point({ x: point.X, y: point.Y });
        //             return { X: transformedPoint.x, Y: transformedPoint.y };
        //           });
        //         }),
        //         1
        //       )
        //     );
        //   }
        // });
        this._stageWrapper?.commandRegistry?.execute<removeShapeCommandParameter>(
          CORE_COMMAND.REMOVE_SHAPE,
          {
            ids: selected?.map((node: Konva.Node) => node.id()),
          }
        );
        // this._stageWrapper?.commandRegistry?.execute<selectShapeCommandParameter>(
        //   CORE_COMMAND.SELECT_SHAPE,
        //   {
        //     ids: [],
        //     isSeperate: false,
        //   }
        // );
      }
    } else if (
      e.code === "ArrowRight" ||
      e.code === "ArrowLeft" ||
      e.code === "ArrowUp" ||
      e.code === "ArrowDown"
    ) {
      const selected = this._stageWrapper?.getSelectedShapes();

      const beforeData = selected?.map((node: Konva.Node) => {
        const data = node.toObject();
        data.attrs.x = node.x();
        data.attrs.y = node.y();
        data.attrs.skewX = node.skewX();
        data.attrs.skewY = node.skewY();
        data.attrs.scaleX = node.scaleX();
        data.attrs.scaleY = node.scaleY();
        data.attrs.rotation = node.rotation();
        return data;
      });
      if (e.shiftKey) {
        selected?.forEach((node: Konva.Node) => {
          if (e.code === "ArrowRight") {
            node.rotate(e.ctrlKey ? 5 : 10);
          } else if (e.code === "ArrowLeft") {
            node.rotate(e.ctrlKey ? -5 : -10);
          }
        });
      } else {
        selected?.forEach((node: Konva.Node) => {
          if (e.code === "ArrowRight") {
            node.x(node.x() + (e.ctrlKey ? 1 : 10));
          } else if (e.code === "ArrowLeft") {
            node.x(node.x() - (e.ctrlKey ? 1 : 10));
          } else if (e.code === "ArrowUp") {
            node.y(node.y() - (e.ctrlKey ? 1 : 10));
          } else if (e.code === "ArrowDown") {
            node.y(node.y() + (e.ctrlKey ? 1 : 10));
          }
        });
      }
      const afterData = selected?.map((node: Konva.Node) => {
        const data = node.toObject();
        data.attrs.x = node.x();
        data.attrs.y = node.y();
        data.attrs.skewX = node.skewX();
        data.attrs.skewY = node.skewY();
        data.attrs.scaleX = node.scaleX();
        data.attrs.scaleY = node.scaleY();
        data.attrs.rotation = node.rotation();
        return data;
      });
      this._stageWrapper?.commandRegistry?.execute<notifyManipulationCommandParameter>(
        CORE_COMMAND.NOTIFY_MANIPULATION,
        {
          undoables: [
            new Undoable(
              CORE_COMMAND.UPDATE_SHAPE,
              beforeData as Record<any, any>[],
              afterData as Record<any, any>[]
            ),
          ],
        }
      );
    } else if (
      (e.code === "BracketLeft" || e.code === "BracketRight") &&
      e.ctrlKey
    ) {
      const selected = this._stageWrapper?.getSelectedShapes();
      const beforeData = selected?.map((node: Konva.Node) => {
        const data = node.toObject();
        data.attrs.x = node.x();
        data.attrs.y = node.y();
        data.attrs.skewX = node.skewX();
        data.attrs.skewY = node.skewY();
        data.attrs.scaleX = node.scaleX();
        data.attrs.scaleY = node.scaleY();
        data.attrs.rotation = node.rotation();
        return data;
      });
      selected?.forEach((node: Konva.Node) => {
        if (e.code === "BracketRight") {
          node.scale({
            x: node.scaleX() + (e.ctrlKey ? 0.05 : 0.2),
            y: node.scaleY() + (e.ctrlKey ? 0.05 : 0.2),
          });
        } else if (e.code === "BracketLeft") {
          node.scale({
            x: node.scaleX() - (e.ctrlKey ? 0.05 : 0.2),
            y: node.scaleY() - (e.ctrlKey ? 0.05 : 0.2),
          });
        }
      });
      const afterData = selected?.map((node: Konva.Node) => {
        const data = node.toObject();
        data.attrs.x = node.x();
        data.attrs.y = node.y();
        data.attrs.skewX = node.skewX();
        data.attrs.skewY = node.skewY();
        data.attrs.scaleX = node.scaleX();
        data.attrs.scaleY = node.scaleY();
        data.attrs.rotation = node.rotation();
        return data;
      });
      if (beforeData && afterData && beforeData.length && afterData.length) {
        this._stageWrapper?.commandRegistry?.execute<notifyManipulationCommandParameter>(
          CORE_COMMAND.NOTIFY_MANIPULATION,
          {
            undoables: [
              new Undoable(CORE_COMMAND.UPDATE_SHAPE, beforeData, afterData),
            ],
          }
        );
      }
    }
  }
}
