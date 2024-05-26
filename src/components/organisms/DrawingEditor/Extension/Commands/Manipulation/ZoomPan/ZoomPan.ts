import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { IRect } from "konva/lib/types";
import { Cmd, CmdActionParameter } from "../../../../Core/Interfaces/Commands";
import StageWrapper from "../../../../Core/Wrapper/StageWrapper";
import keyChecker from "../../../Utils/keyChecker";

let initRect = undefined as IRect | undefined;

interface ZoomCommandParameter {
  zoomScale: number;
}

export type zoomInCommandParameter = ZoomCommandParameter;
export type zoomOutCommandParameter = ZoomCommandParameter;
export type zoomInCommandReturn = void;

function zoom(
  stageWrapper: StageWrapper,
  flag: boolean,
  triggeredMouseEvent: boolean = true,
  zoomScale: number = 1.2
) {
  const stage = stageWrapper.stage;
  const backgroundImageLayer = stageWrapper.backgroundImageLayer;
  const currentLayer = stageWrapper.currentLayer;

  if (!backgroundImageLayer || !stage || !currentLayer) return;
  const stagePointer = stage.getPointerPosition();
  let oldScale = stage.scaleX();
  let pointer: Konva.Vector2d;
  if (
    !triggeredMouseEvent ||
    !stagePointer ||
    stagePointer.x < 0 ||
    stagePointer.y < 0
  ) {
    pointer = {
      x: stage.width() / 2,
      y: stage.height() / 2,
    };
  } else {
    // pointer = stageWrapper.getPointerPositionOnLayer(
    //   "background-image-layer",
    //   stage.getPointerPosition()
    // ) as Konva.Vector2d;
    pointer = stage.getPointerPosition() as Konva.Vector2d;
  }

  if (pointer) {
    let mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    // flag true - zoom in
    // flag false - zoom out
    let direction = flag ? 1 : -1;

    let newScale = direction > 0 ? oldScale * zoomScale : oldScale / zoomScale;

    // if (newScale < 1 && oldScale > 1) newScale = 1;

    // if (newScale < 1 || newScale > 10) return;

    // backgroundImageLayer.scale({ x: newScale, y: newScale });
    // currentLayer.scale({ x: newScale, y: newScale });

    stage.scale({ x: newScale, y: newScale });

    let newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    // thx : https://stackoverflow.com/questions/65786935/konvajs-relative-zoom-in-to-pointer-but-non-relative-zoom-out
    // newPos.x = Math.min(newPos.x, 0);
    // newPos.x = Math.max(newPos.x, window.innerWidth * (1 - newScale));
    // newPos.y = Math.min(newPos.y, 0);
    // newPos.y = Math.max(newPos.y, window.innerHeight * (1 - newScale));

    // backgroundImageLayer.position(newPos);
    // currentLayer?.position(newPos);

    stage.position(newPos);

    initRect = backgroundImageLayer.getClientRect();
    // const result = [] as Konva.Shape[];
    // currentLayer.getChildren().forEach((child: Konva.Group | Konva.Shape) => {
    //   stageWrapper.getChildrenWithCondition(
    //     child,
    //     { UIType: "label", className: "Path" },
    //     result
    //   );
    // });

    // result.forEach((child: Konva.Shape) => {
    //   console.log(
    //     child.setAttr("strokeWidth", child.getAttr("strokeWidth") / newScale)
    //   );
    //   console.log(child.getAttr("strokeWidth") / newScale);
    // });

    // console.log("RESULT : ", result);
  }
}

/**
 * 줌 인 커맨드
 */
const zoomInCommand = {
  key: "zoom-in",

  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<zoomInCommandParameter>): void => {
    console.log("mouseEvnet", mouseEvent);
    zoom(stageWrapper, true, mouseEvent ? true : false);
  },

  events: [
    {
      type: "wheel",
      condition: (event: Event) => {
        if ((event as WheelEvent).deltaY < 0) return true;
        return false;
      },
    },
    {
      type: "keydown",
      condition: (event: Event) => {
        const { key } = event as KeyboardEvent;

        return (
          key === "=" &&
          keyChecker({ ctrlKey: true, shiftKey: false }, event as KeyboardEvent)
        );
      },
    },
  ],
} as Cmd;

/**
 * 줌 아웃 커맨드
 */
const zoomOutCommand = {
  key: "zoom-out",
  shortCut: {
    ctrlKey: true,
    key: "[",
  },
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<zoomOutCommandParameter>): void => {
    zoom(stageWrapper, false, mouseEvent ? true : false);
  },

  events: [
    {
      type: "wheel",
      condition: (event: Event) => {
        if ((event as WheelEvent).deltaY >= 0) return true;
        return false;
      },
    },
    {
      type: "keydown",
      condition: (event: Event) => {
        const { key } = event as KeyboardEvent;
        return (
          key === "-" && keyChecker({ ctrlKey: true }, event as KeyboardEvent)
        );
      },
    },
  ],
} as Cmd;

function panning(
  stageWrapper: StageWrapper,
  mouseEvent: KonvaEventObject<any> | undefined
) {
  const stage = stageWrapper.stage;
  let oldScale = stage?.scaleX() as number;

  if (!initRect)
    initRect = stageWrapper?.backgroundImageLayer?.getClientRect() as IRect;

  const pos = stageWrapper.stage?.position() as Konva.Vector2d;
  stageWrapper?.stage?.x(pos.x + mouseEvent?.evt.movementX / 1);
  stageWrapper?.stage?.y(pos.y + mouseEvent?.evt.movementY / 1);

  // const pos2 = stageWrapper.currentLayer?.position() as Konva.Vector2d;
  // stageWrapper?.currentLayer?.x(pos2.x + mouseEvent?.evt.movementX / oldScale);
  // stageWrapper?.currentLayer?.y(pos2.y + mouseEvent?.evt.movementY / oldScale);
  // const currentRect = stageWrapper.backgroundImageLayer?.getClientRect();
  // if (currentRect) {
  //   const topDiff = -currentRect.y;
  //   const leftDiff = -currentRect.x;

  //   const rightDiff =
  //     currentRect.x +
  //     currentRect.width -
  //     (stageWrapper?.stage as Konva.Stage)?.width();

  //   const bottomDiff =
  //     currentRect.y +
  //     currentRect.height -
  //     (stageWrapper?.stage as Konva.Stage)?.height();

  //   if (topDiff < 0 || bottomDiff < 0 || leftDiff < 0 || rightDiff < 0) {
  //     stageWrapper?.backgroundImageLayer?.y((initRect as IRect).y);
  //     stageWrapper?.backgroundImageLayer?.x((initRect as IRect).x);
  //     stageWrapper?.currentLayer?.y((initRect as IRect).y);
  //     stageWrapper?.currentLayer?.x((initRect as IRect).x);
  //     return;
  //   }

  //   stageWrapper?.currentLayer?.y((initRect as IRect).y);
  //   stageWrapper?.currentLayer?.x((initRect as IRect).x);

  //   initRect = currentRect;
  // }
}

let hasPressedSpaceBar = false;
const panCommand = {
  key: "pan",
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<undefined>): void => {
    panning(stageWrapper, mouseEvent);
  },
  events: [
    {
      type: "mousedown",
      condition: (event: MouseEvent) => {
        initRect = undefined;
      },
    },
    {
      type: "mousemove",
      condition: (event: MouseEvent, stageWrapper: StageWrapper) => {
        const container = stageWrapper.stage?.container();

        if (!container) return;

        if (
          (event.buttons === 4 || event.buttons === 1) &&
          hasPressedSpaceBar
        ) {
          container.style.cursor = "grab";
          return true;
        }
        return false;
      },
    },
    {
      type: "keydown",
      condition: (event: KeyboardEvent, stageWrapper: StageWrapper) => {
        if (event.key === " ") {
          hasPressedSpaceBar = true;
        }
      },
    },
    {
      type: "keyup",
      condition: (event: KeyboardEvent, stageWrapper: StageWrapper) => {
        if (event.key === " ") {
          hasPressedSpaceBar = false;
          const container = stageWrapper.stage?.container();
          if (container) {
            container.style.cursor = "default";
          }
        }
      },
    },
  ],
  initializer: (stageWrapper: StageWrapper) => {
    initRect = stageWrapper?.backgroundImageLayer?.getClientRect() as IRect;
  },
} as Cmd;
export { zoomInCommand, zoomOutCommand, panCommand };
