import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { Cmd } from '../../../../Core/Interfaces/Commands';
/**
 * 선택된 것을 레이어 최상단으로 옮기는 커맨드
 */
export declare type moveToTopCommandParam = undefined;
export declare type moveToTopCommandReturn = Undoable | undefined;
declare const moveToTopCommand: Cmd;
export default moveToTopCommand;
