import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import { Cmd } from '../../../../Core/Interfaces/Commands';
/**
 * 선택된 것을 레이어 내 한단계 아래로 옮기는 커맨드
 */
export declare type moveDownCommandParam = undefined;
export declare type moveDownCommandReturn = Undoable | undefined;
declare const moveDownCommand: Cmd;
export default moveDownCommand;
