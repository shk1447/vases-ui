import { Cmd } from '../../../../Core/Interfaces/Commands';
import Redoable from '../../../../Core/ConmmandRegistry/Actions/Redoable';
/**
 * 가장 최근에 실행했던 커맨드를 되돌리는 커맨드
 */
export declare type undoCommandParam = undefined;
export declare type undoCommandReturn = Redoable | Redoable[] | undefined;
declare const undoCommand: Cmd;
export default undoCommand;
