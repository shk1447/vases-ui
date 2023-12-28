import Konva from 'konva';
import { Cmd, CmdActionParameter, CORE_COMMAND } from '../../Interfaces/Commands';
import Undoable from '../Actions/Undoable';

interface UpdateRawInfo {
  id: string;
  attrs: Record<any, any>;
}
interface UpdateInfo {
  shape: Konva.Node;
  attrs: Record<any, any>;
}
export type updateShapeCommandParameter = {
  info: UpdateRawInfo[];
};
export type updateShapeCommandReturn = Undoable | undefined;

/**
 * << Undoable Command >> 
 * 해당 id를 가진 shape들의 속성을 업데이트 한다..
 */

const updateShapeCommand = {
  key: CORE_COMMAND.UPDATE_SHAPE,
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<updateShapeCommandParameter>): updateShapeCommandReturn => {
    if (!param || !param.info) return;

    const findResult = (
      param.info.map(({ id, attrs }) => ({
        shape: stageWrapper.getShapeById(id),
        attrs,
      })) as UpdateInfo[]
    ).filter((value: UpdateInfo) => value.shape !== undefined) as UpdateInfo[];

    const before = findResult.map((value: UpdateInfo) =>
      value.shape.toObject(),
    );
    findResult.forEach(({ shape, attrs }) => {
      shape.setAttrs(attrs);
    });
    const after = findResult.map(({ shape, attrs }: UpdateInfo) => {
      return shape.toObject();
    });
    stageWrapper.currentLayer?.batchDraw();
    return new Undoable(CORE_COMMAND.UPDATE_SHAPE, before, after);
  },
} as Cmd;

export default updateShapeCommand;
