import Konva from 'konva';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { CommandRegistryPassPrameter } from '../../../../Core/Interfaces/CommandRegistry';
import { Cmd, CmdActionParameter, CORE_COMMAND } from '../../../../Core/Interfaces/Commands';
import SVGIcon from '../../../../Core/Utils/SVGIcon';
import move_up from './move_forward.svg';

/**
 * 선택된 것을 레이어 내 한단계 위로 옮기는 커맨드
 */
export type moveUpCommandParam = undefined;
export type moveUpCommandReturn = Undoable | undefined;

const moveUpCommand = {
  key: 'move-up',

  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<moveUpCommandParam>): moveUpCommandReturn => {
    const nodes = stageWrapper.getSelectedShapes();
    if (!nodes || !nodes.length) return;
    const before = nodes?.map((node: Konva.Node) => {
      const b = node.toObject();
      b.attrs.zIndex = node.zIndex();
      return b;
    });
    nodes.forEach((node: Konva.Node) => node.moveUp());
    const after = nodes?.map((node: Konva.Node) => {
      const a = node.toObject();
      a.attrs.zIndex = node.zIndex();
      return a;
    });
    return new Undoable('move-up', before, after);
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: move_up }),
  },
  condition: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => {
    return sharedDatum.has(CORE_COMMAND.SELECT_SHAPE);
  },
} as Cmd;

export default moveUpCommand;
