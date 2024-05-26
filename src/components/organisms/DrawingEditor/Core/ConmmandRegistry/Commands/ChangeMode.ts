import {
  CORE_COMMAND,
  Cmd,
  CmdActionParameter,
} from "../../Interfaces/Commands";
import { DRAWING_EDITER_EDIT_MODE } from "../../Wrapper/StageWrapper";

export type changeModeCommandParameter = {
  mode: DRAWING_EDITER_EDIT_MODE;
};

export type changeModeCommandReturn = undefined;

const changeModeCommand = {
  key: CORE_COMMAND.CHANGE_MODE,
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<changeModeCommandParameter>): changeModeCommandReturn => {
    stageWrapper.mode = param.mode;
    return;
  },
} as Cmd;

export default changeModeCommand;
