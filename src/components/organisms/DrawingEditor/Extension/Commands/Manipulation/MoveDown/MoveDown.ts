import Konva from "konva";
import Undoable from "../../../../Core/ConmmandRegistry/Actions/Undoable";
import { CommandRegistryPassPrameter } from "../../../../Core/Interfaces/CommandRegistry";
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from "../../../../Core/Interfaces/Commands";

/**
 * 선택된 것을 레이어 내 한단계 아래로 옮기는 커맨드
 */
export type moveDownCommandParam = undefined;
export type moveDownCommandReturn = Undoable | undefined;

const moveDownCommand = {
  key: "move-down",

  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<moveDownCommandParam>): moveDownCommandReturn => {
    const nodes = stageWrapper.getSelectedShapes();
    if (!nodes || !nodes.length) return;
    const before = nodes?.map((node: Konva.Node) => {
      const b = node.toObject();
      b.attrs.zIndex = node.zIndex();
      return b;
    });
    nodes.forEach((node: Konva.Node) => node.moveDown());
    const after = nodes?.map((node: Konva.Node) => {
      const a = node.toObject();
      a.attrs.zIndex = node.zIndex();
      return a;
    });
    return new Undoable("move-down", before, after);
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

export default moveDownCommand;
