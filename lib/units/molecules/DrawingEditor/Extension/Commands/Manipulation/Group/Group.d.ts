import { Cmd } from '../../../../Core/Interfaces/Commands';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
/**
 * 선택된 것을 그룹화 하는 커맨드
 */
export declare type groupCommandParam = undefined;
export declare type groupCommandReturn = Undoable | undefined;
declare const groupCommand: Cmd;
export default groupCommand;
