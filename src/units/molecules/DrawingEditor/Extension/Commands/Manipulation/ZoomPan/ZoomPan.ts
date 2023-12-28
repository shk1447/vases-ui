import Konva from 'konva';
import zoom_in from './zoom-in.svg';
import zoom_out from './zoom-out.svg';
import { IRect } from 'konva/lib/types';
import { KonvaEventObject } from 'konva/lib/Node';
import StageWrapper from '../../../../Core/Wrapper/StageWrapper';
import { Cmd, CmdActionParameter } from '../../../../Core/Interfaces/Commands';
import SVGIcon from '../../../../Core/Utils/SVGIcon';

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
  zoomScale: number = 1.2,
) {
  const stage = stageWrapper.stage;
  const backgroundImageLayer = stageWrapper.backgroundImageLayer;
  const currentLayer = stageWrapper.currentLayer;

  if (!backgroundImageLayer || !stage || !currentLayer) return;
  const stagePointer = stage.getPointerPosition();
  let oldScale = backgroundImageLayer.scaleX();
  let pointer: Konva.Vector2d;
  if (!stagePointer || stagePointer.x < 0 || stagePointer.y < 0) {
    pointer = {
      x: stage.container().clientWidth / 2,
      y: stage.container().clientHeight / 2,
    };
  } else {
    pointer = stageWrapper.getPointerPositionOnLayer(
      'background-image-layer',
      stage.getPointerPosition(),
    ) as Konva.Vector2d;
  }

  if (pointer) {
    let mousePointTo = {
      x: (pointer.x - backgroundImageLayer.x()) / oldScale,
      y: (pointer.y - backgroundImageLayer.y()) / oldScale,
    };

    // flag true - zoom in
    // flag false - zoom out
    let direction = flag ? 1 : -1;

    let newScale = direction > 0 ? oldScale * zoomScale : oldScale / zoomScale;

    if (newScale < 1 && oldScale > 1) newScale = 1;

    if (newScale < 1 || newScale > 1000) return;

    backgroundImageLayer.scale({ x: newScale, y: newScale });
    currentLayer.scale({ x: newScale, y: newScale });

    let newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };
    // thx : https://stackoverflow.com/questions/65786935/konvajs-relative-zoom-in-to-pointer-but-non-relative-zoom-out
    newPos.x = Math.min(newPos.x, 0);
    newPos.x = Math.max(newPos.x, window.innerWidth * (1 - newScale));
    newPos.y = Math.min(newPos.y, 0);
    newPos.y = Math.max(newPos.y, window.innerHeight * (1 - newScale));

    backgroundImageLayer.position(newPos);
    currentLayer?.position(newPos);
  }
}

/**
 * 줌 인 커맨드
 */
const zoomInCommand = {
  key: 'zoom-in',
  shortCut: {
    ctrlKey: true,
    key: ']',
  },
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<zoomInCommandParameter>): void => {
    zoom(stageWrapper, true);
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: zoom_in }),
  },
  event: {
    type: 'wheel',
    condition: (event: Event) => {
      if ((event as WheelEvent).deltaY < 0) return true;
      return false;
    },
  },
} as Cmd;

/**
 * 줌 아웃 커맨드
 */
const zoomOutCommand = {
  key: 'zoom-out',
  shortCut: {
    ctrlKey: true,
    key: '[',
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
    zoom(stageWrapper, false);
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: zoom_out }),
  },
  event: {
    type: 'wheel',
    condition: (event: Event) => {
      if ((event as WheelEvent).deltaY >= 0) return true;
      return false;
    },
  },
} as Cmd;

function panning(
  stageWrapper: StageWrapper,
  mouseEvent: KonvaEventObject<any> | undefined,
) {
  const pos = stageWrapper.backgroundImageLayer?.position() as Konva.Vector2d;
  stageWrapper?.backgroundImageLayer?.x(pos.x + mouseEvent?.evt.movementX);
  stageWrapper?.backgroundImageLayer?.y(pos.y + mouseEvent?.evt.movementY);

  const currentRect = stageWrapper.backgroundImageLayer?.getClientRect();
  if (currentRect) {
    const topDiff = -currentRect.y;
    const leftDiff = -currentRect.x;

    const rightDiff =
      currentRect.x +
      currentRect.width -
      (stageWrapper?.stage as Konva.Stage)?.container().getBoundingClientRect()
        .width;

    const bottomDiff =
      currentRect.y +
      currentRect.height -
      (stageWrapper?.stage as Konva.Stage)?.container().getBoundingClientRect()
        .height;

    if (topDiff < 0 || bottomDiff < 0 || leftDiff < 0 || rightDiff < 0) {
      stageWrapper?.backgroundImageLayer?.y((initRect as IRect).y);
      stageWrapper?.backgroundImageLayer?.x((initRect as IRect).x);
      stageWrapper?.currentLayer?.y((initRect as IRect).y);
      stageWrapper?.currentLayer?.x((initRect as IRect).x);
      return;
    }

    stageWrapper?.currentLayer?.y((initRect as IRect).y);
    stageWrapper?.currentLayer?.x((initRect as IRect).x);

    initRect = currentRect;
  }
}

const panCommand = {
  key: 'pan',
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
  event: {
    type: 'mousemove',
    condition: (event: MouseEvent) => {
      if (event.buttons === 4) return true;
      return false;
    },
  },
  initializer: (stageWrapper: StageWrapper) => {
    initRect = stageWrapper?.backgroundImageLayer?.getClientRect() as IRect;
  },
} as Cmd;
export { zoomInCommand, zoomOutCommand, panCommand };
