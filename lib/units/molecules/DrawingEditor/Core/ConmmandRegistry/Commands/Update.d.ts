import { Cmd } from '../../Interfaces/Commands';
import Undoable from '../Actions/Undoable';
interface UpdateRawInfo {
    id: string;
    attrs: Record<any, any>;
}
export declare type updateShapeCommandParameter = {
    info: UpdateRawInfo[];
};
export declare type updateShapeCommandReturn = Undoable | undefined;
/**
 * << Undoable Command >>
 * 해당 id를 가진 shape들의 속성을 업데이트 한다..
 */
declare const updateShapeCommand: Cmd;
export default updateShapeCommand;
