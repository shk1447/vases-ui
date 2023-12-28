import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { Cmd } from '../../../../Core/Interfaces/Commands';
/**
 * 그룹을 해체하는 커맨드
 */
export declare type ungroupCommandparam = undefined;
export declare type ungroupCommandReturn = Undoable | undefined;
declare const ungroupCommand: Cmd;
export default ungroupCommand;
