import { Cmd } from '../../Interfaces/Commands';
import Undoable from '../Actions/Undoable';
export declare type notifyManipulationCommandParameter = {
    undoables: Undoable[];
};
export declare type notifyManipulationCommandReturn = Undoable[];
/**
 * << Undoable Command >>
 * 커맨드를 통한 업데이트가 대신 직접 Shape을 업데이트 한 후에
 * undo 관리를 위해 강제로 삽입하는 커맨드
 */
declare const notifyManipulationCommand: Cmd;
export default notifyManipulationCommand;
