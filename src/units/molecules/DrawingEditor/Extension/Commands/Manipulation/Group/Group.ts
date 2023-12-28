import Konva from 'konva';

import group from './group.svg';
import { v4 as uuidv4 } from 'uuid';
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from '../../../../Core/Interfaces/Commands';
import { CommandRegistryPassPrameter } from '../../../../Core/Interfaces/CommandRegistry';
import SVGIcon from '../../../../Core/Utils/SVGIcon';
import { selectShapeCommandParameter } from '../../../../Core/ConmmandRegistry/Commands/Select';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';

/**
 * 선택된 것을 그룹화 하는 커맨드
 */
export type groupCommandParam = undefined;
export type groupCommandReturn = Undoable | undefined;

const groupCommand = {
  key: 'group',
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<groupCommandParam>): groupCommandReturn => {
    const currentTool = stageWrapper.currentTool;
    const currentLayer = stageWrapper.currentLayer;
    if (!currentLayer || !currentTool || currentTool?.name !== 'selection')
      return;

    const nodes = stageWrapper.getSelectedShapes();
    if (!nodes || !nodes.length) return;

    const before = nodes?.map((node: Konva.Node) => node.toObject());

    const group = new Konva.Group({
      draggable: true,
      id: uuidv4(),
    });
    nodes.forEach((node: Konva.Node) => {
      group.add(node as Konva.Shape);
      node.draggable(false);
      node.setAttr('selected', false);
    });
    const rect = group.getClientRect();
    group.offset({
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2,
    });
    group.position({
      x: rect.x + rect.width / 2,
      y: rect.y + rect.height / 2,
    });

    currentLayer?.add(group);
    currentLayer?.batchDraw();

    stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
      CORE_COMMAND.SELECT_SHAPE,
      {
        ids: [group.id()],
        isSeperate: true,
      },
    );
    return new Undoable('group', before, [group.toObject()]);
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: group }),
  },
  condition: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => {
    return (
      sharedDatum.has(CORE_COMMAND.SELECT_SHAPE) &&
      (sharedDatum.get(CORE_COMMAND.SELECT_SHAPE)?.data?.length as number) > 1
    );
  },
} as Cmd;

export default groupCommand;
