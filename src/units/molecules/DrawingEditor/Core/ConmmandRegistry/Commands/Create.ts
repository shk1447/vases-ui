import Konva from 'konva';
import { Cmd, CmdActionParameter, CORE_COMMAND } from '../../Interfaces/Commands';
import { RenderTarget } from '../../Interfaces/Konva';
import Undoable from '../Actions/Undoable';

export type createShapeCommandParameter = {
  nodes: (Konva.Node | Konva.Shape | Konva.Group | RenderTarget)[];
};

export type createShapeCommandReturn = Undoable | undefined;

/**
 * << Undoable Command >> 
 * Shape를 레이어에 붙이는 커맨드
 */
const createShapeCommand = {
  key: CORE_COMMAND.CREATE_SHAPE,
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<createShapeCommandParameter>): createShapeCommandReturn => {
    if (!param || !param.nodes) return;

    const currentLayer = stageWrapper.currentLayer;
    if (!currentLayer) return;

    param.nodes.forEach(
      (value: Konva.Node | Konva.Shape | Konva.Group | RenderTarget) => {
        if (!(value as RenderTarget).target)
          currentLayer.add(value as Konva.Shape | Konva.Group);
        else {
          (value as RenderTarget).target.forEach(
            (t: Konva.Shape | Konva.Group) => {
              (value as RenderTarget).parent.add(t);
            },
          );
        }
      },
    );

    const created = param.nodes
      .map((value: Konva.Node | Konva.Shape | Konva.Group | RenderTarget) => {
        if (!(value as RenderTarget).target)
          return (value as Konva.Shape | Konva.Group).toObject();
        else
          return (value as RenderTarget).target.map(
            (t: Konva.Shape | Konva.Group) => t.toObject(),
          );
      })
      .flat();
    stageWrapper.currentLayer?.batchDraw();

    return new Undoable(CORE_COMMAND.CREATE_SHAPE, null, created);
  },
} as Cmd;

export default createShapeCommand;
