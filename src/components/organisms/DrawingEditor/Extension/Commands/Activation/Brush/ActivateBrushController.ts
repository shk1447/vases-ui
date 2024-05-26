import ToolChangeAction from "../../../../Core/ConmmandRegistry/Actions/ControllerSwitch";
import { Cmd, CmdActionParameter } from "../../../../Core/Interfaces/Commands";
import BrushController from "./BrushController";

/**
 * 자유 폐쇄 곡선 툴을 활성화 하는 커맨드
 */
export type activateBrushControllerCommandParam = undefined;
export type activateBrushControllerCommandReturn = ToolChangeAction;

const activateBrushController = {
  key: "activate-brush-controller",
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<activateBrushControllerCommandParam>): activateBrushControllerCommandReturn => {
    stageWrapper.currentTool?.deactivate();
    stageWrapper.currentTool = new BrushController(stageWrapper);
    stageWrapper.currentTool?.activate();
    return new ToolChangeAction("activate-brush-controller");
  },
} as Cmd;
export default activateBrushController;
