import Konva from 'konva';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { selectShapeCommandParameter } from '../../../../Core/ConmmandRegistry/Commands/Select';
import { CommandRegistryPassPrameter } from '../../../../Core/Interfaces/CommandRegistry';
import { Cmd, CmdActionParameter, CORE_COMMAND } from '../../../../Core/Interfaces/Commands';
import SVGIcon from '../../../../Core/Utils/SVGIcon';

import ungroup from './ungroup.svg';

/**
 * 그룹을 해체하는 커맨드
 */
export type ungroupCommandparam = undefined;
export type ungroupCommandReturn = Undoable | undefined;

const ungroupCommand = {
  key: 'ungroup',
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<ungroupCommandparam>): ungroupCommandReturn => {
    const currentTool = stageWrapper.currentTool;
    const currentLayer = stageWrapper.currentLayer;
    if (!currentLayer || !currentTool || currentTool?.name !== 'selection')
      return;

    const nodes = stageWrapper.getSelectedShapes();
    if (!nodes || !nodes.length) return;

    const before = nodes?.map((node: Konva.Node) => node.toObject());

    const children = (nodes[0] as Konva.Group)
      .getChildren()
      .map((child: Konva.Node) => child);

    children.forEach((child: Konva.Node) => {
      const pos = child.getAbsolutePosition();
      const scale = child.getAbsoluteScale();
      const rotation = child.getAbsoluteRotation();

      child.setAttrs({
        x: pos.x,
        y: pos.y,
        scaleX: scale.x,
        scaleY: scale.y,
        rotation: rotation,
      });
      child.moveTo(currentLayer);
    });

    (nodes[0] as Konva.Group).removeChildren();
    (nodes[0] as Konva.Group).destroy();

    stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
      CORE_COMMAND.SELECT_SHAPE,
      {
        ids: (children as Konva.Shape[]).map((child: Konva.Shape) =>
          child.id(),
        ),
        isSeperate: true,
      },
    );

    return new Undoable(
      'ungroup',
      before,
      children.map((child: Konva.Node) => child.toObject()),
    );
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: ungroup }),
  },
  condition: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => {
    return (
      sharedDatum.has(CORE_COMMAND.SELECT_SHAPE) &&
      sharedDatum.get(CORE_COMMAND.SELECT_SHAPE)?.data?.length === 1 &&
      (sharedDatum.get(CORE_COMMAND.SELECT_SHAPE)?.data as Record<any, any>[])[0]
        .className === 'Group'
    );
  },
} as Cmd;

export default ungroupCommand;
