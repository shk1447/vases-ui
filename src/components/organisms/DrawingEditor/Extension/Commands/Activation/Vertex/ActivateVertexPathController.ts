import ToolChangeAction from "../../../../Core/ConmmandRegistry/Actions/ControllerSwitch";
import { Cmd, CmdActionParameter } from "../../../../Core/Interfaces/Commands";

import VertextController from "./VertexController";

export type activateVertextPathControllerCommandParam = undefined;
export type activateVertextPathControllerCommandReturn = ToolChangeAction;

const activateVertexPathController = {
  key: "activate-vertexpath-controller",
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<activateVertextPathControllerCommandParam>): activateVertextPathControllerCommandReturn => {
    stageWrapper.currentTool?.deactivate();
    stageWrapper.currentTool = new VertextController(stageWrapper);
    stageWrapper.currentTool?.activate();

    return new ToolChangeAction("activate-vertexpath-controller");
  },
} as Cmd;

export default activateVertexPathController;
