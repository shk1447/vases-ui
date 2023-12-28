import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { Cmd } from '../../../../Core/Interfaces/Commands';
/**
 * 선택된 것을 레이어 내 한단계 위로 옮기는 커맨드
 */
export declare type moveUpCommandParam = undefined;
export declare type moveUpCommandReturn = Undoable | undefined;
declare const moveUpCommand: Cmd;
export default moveUpCommand;
