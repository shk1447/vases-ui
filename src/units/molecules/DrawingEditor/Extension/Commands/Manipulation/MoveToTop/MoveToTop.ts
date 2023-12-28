import Konva from 'konva';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { CommandRegistryPassPrameter } from '../../../../Core/Interfaces/CommandRegistry';
import { Cmd, CmdActionParameter, CORE_COMMAND } from '../../../../Core/Interfaces/Commands';
import SVGIcon from '../../../../Core/Utils/SVGIcon';
import move_to_top from './move_front.svg';

/**
 * 선택된 것을 레이어 최상단으로 옮기는 커맨드
 */
export type moveToTopCommandParam = undefined;
export type moveToTopCommandReturn = Undoable | undefined;

const moveToTopCommand = {
  key: 'move-to-top',

  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<moveToTopCommandParam>): moveToTopCommandReturn => {
    const nodes = stageWrapper.getSelectedShapes();
    if (!nodes || !nodes.length) return;
    const before = nodes?.map((node: Konva.Node) => {
      const b = node.toObject();
      b.attrs.zIndex = node.zIndex();
      return b;
    });
    nodes.forEach((node: Konva.Node) => node.moveToTop());
    const after = nodes?.map((node: Konva.Node) => {
      const a = node.toObject();
      a.attrs.zIndex = node.zIndex();
      return a;
    });
    return new Undoable('move-to-top', before, after);
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: move_to_top }),
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

export default moveToTopCommand;
