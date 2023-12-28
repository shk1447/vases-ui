import Konva from 'konva';
import Shareable from '../../../../Core/ConmmandRegistry/Actions/Shareable';
import { CommandRegistryPassPrameter } from '../../../../Core/Interfaces/CommandRegistry';
import { Cmd, CmdActionParameter, CORE_COMMAND } from '../../../../Core/Interfaces/Commands';
import SVGIcon from '../../../../Core/Utils/SVGIcon';

import copy from './copy.svg';

export type copyCommandParam = undefined;
export type copyCommandReturn = Shareable | undefined;

/**
 * 선택된 것을 복사하는 커맨드
 */
const copyCommand = {
  key: 'copy',
  shortCut: {
    ctrlKey: true,
    key: 'c',
  },
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<copyCommandParam>) => {
    const nodes = stageWrapper.getSelectedShapes();
    if (!nodes || !nodes.length) return;
    return new Shareable(nodes.map((node: Konva.Node) => node.toObject()));
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: copy }),
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

export default copyCommand;
