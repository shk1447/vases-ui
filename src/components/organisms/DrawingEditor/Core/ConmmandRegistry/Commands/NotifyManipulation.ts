import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from '../../Interfaces/Commands';
import Undoable from '../Actions/Undoable';

export type notifyManipulationCommandParameter = {
  undoables: Undoable[];
};
export type notifyManipulationCommandReturn = Undoable[];

/**
 * << Undoable Command >>
 * 커맨드를 통한 업데이트가 대신 직접 Shape을 업데이트 한 후에
 * undo 관리를 위해 강제로 삽입하는 커맨드
 */
const notifyManipulationCommand = {
  key: CORE_COMMAND.NOTIFY_MANIPULATION,
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<notifyManipulationCommandParameter>): notifyManipulationCommandReturn => {
    return [...param.undoables];
  },
} as Cmd;

export default notifyManipulationCommand;
