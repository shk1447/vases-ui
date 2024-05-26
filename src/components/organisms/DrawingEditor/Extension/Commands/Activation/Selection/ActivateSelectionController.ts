import ToolChangeAction from "../../../../Core/ConmmandRegistry/Actions/ControllerSwitch";
import { Cmd, CmdActionParameter } from "../../../../Core/Interfaces/Commands";
import SelectionController from "./SelectionController";

/**
 * 선택 툴을 활성화 시키는 커맨드
 */
export type activateSelectionControllerCommandParam = undefined;
export type activateSelectionControllerCommandReturn = ToolChangeAction;

const activateSelectionController = {
  key: "activate-selection-controller",
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<activateSelectionControllerCommandParam>): activateSelectionControllerCommandReturn => {
    stageWrapper.currentTool?.deactivate();
    stageWrapper.currentTool = new SelectionController(stageWrapper);
    stageWrapper.currentTool?.activate();
    return new ToolChangeAction("activate-selection-controller");
  },
} as Cmd;

export default activateSelectionController;
