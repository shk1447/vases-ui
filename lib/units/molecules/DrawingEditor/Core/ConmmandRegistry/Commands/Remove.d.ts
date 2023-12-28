import { Cmd } from '../../Interfaces/Commands';
import Undoable from '../Actions/Undoable';
export declare type removeShapeCommandParameter = {
    ids: string[];
};
export declare type removeShapeCommandReturn = Undoable | undefined;
/**
 * << Undoable Command >>
 * 해당 ID를 가진 shape를 삭제한다.
 */
declare const removeShapeCommand: Cmd;
export default removeShapeCommand;
