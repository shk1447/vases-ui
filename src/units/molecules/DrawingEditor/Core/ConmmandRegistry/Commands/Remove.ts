import Konva from 'konva';
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from '../../Interfaces/Commands';
import Undoable from '../Actions/Undoable';

export type removeShapeCommandParameter = {
  ids: string[];
};
export type removeShapeCommandReturn = Undoable | undefined;

/**
 * << Undoable Command >>
 * 해당 ID를 가진 shape를 삭제한다.
 */
const removeShapeCommand = {
  key: CORE_COMMAND.REMOVE_SHAPE,

  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<removeShapeCommandParameter>): removeShapeCommandReturn => {
    if (!param || !param.ids) return;
    const findResult = param.ids
      .map((id: string) => stageWrapper.getShapeById(id))
      .filter(
        (value: Konva.Node | undefined) => value !== undefined,
      ) as Konva.Node[];

    const removed = findResult.map((value: Konva.Node) => value.toObject());

    findResult.forEach((value: Konva.Node) => value.destroy());

    stageWrapper.currentLayer?.batchDraw();

    return new Undoable(CORE_COMMAND.REMOVE_SHAPE, removed, null);
  },
} as Cmd;

export default removeShapeCommand;
