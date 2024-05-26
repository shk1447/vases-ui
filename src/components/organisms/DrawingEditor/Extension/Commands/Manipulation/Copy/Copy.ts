import Konva from "konva";
import Shareable from "../../../../Core/ConmmandRegistry/Actions/Shareable";
import { CommandRegistryPassPrameter } from "../../../../Core/Interfaces/CommandRegistry";
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from "../../../../Core/Interfaces/Commands";
import keyChecker from "../../../Utils/keyChecker";

export type copyCommandParam = undefined;
export type copyCommandReturn = Shareable | undefined;

/**
 * 선택된 것을 복사하는 커맨드
 */
const copyCommand = {
  key: "copy",
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
  condition: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => {
    return sharedDatum.has(CORE_COMMAND.SELECT_SHAPE);
  },
  events: [
    {
      type: "keydown",
      condition: (event: Event) => {
        const { key } = event as KeyboardEvent;

        return (
          key === "c" && keyChecker({ ctrlKey: true }, event as KeyboardEvent)
        );
      },
    },
  ],
} as Cmd;

export default copyCommand;
