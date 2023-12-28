import { Cmd } from '../../../../Core/Interfaces/Commands';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
/**
 * 가장 최근에 되돌렸던 것을 원상복구하는 커맨드
 */
export declare type redoCommandParam = undefined;
export declare type redoCommandReturn = Undoable | Undoable[] | undefined;
declare const redoCommand: Cmd;
export default redoCommand;
