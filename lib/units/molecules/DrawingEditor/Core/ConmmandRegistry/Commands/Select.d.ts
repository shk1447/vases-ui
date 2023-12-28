import { Cmd } from '../../Interfaces/Commands';
import Shareable from '../Actions/Shareable';
export declare type selectShapeCommandParameter = {
    ids: string[];
    isSeperate: boolean;
};
export declare type selectShapeCommandReturn = Shareable | undefined;
declare const selectShapeCommand: Cmd;
export default selectShapeCommand;
