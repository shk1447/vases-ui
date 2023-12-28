import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { Cmd } from '../../../../Core/Interfaces/Commands';
/**
 * 선택된 것을 레이어 최하단으로 옮기는 커맨드
 */
export declare type moveToBottomCommandParam = undefined;
export declare type moveToBottomCommandReturn = Undoable | undefined;
declare const moveToBottomCommand: Cmd;
export default moveToBottomCommand;
