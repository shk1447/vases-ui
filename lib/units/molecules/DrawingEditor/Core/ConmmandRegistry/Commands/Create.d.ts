import Konva from 'konva';
import { Cmd } from '../../Interfaces/Commands';
import { RenderTarget } from '../../Interfaces/Konva';
import Undoable from '../Actions/Undoable';
export declare type createShapeCommandParameter = {
    nodes: (Konva.Node | Konva.Shape | Konva.Group | RenderTarget)[];
};
export declare type createShapeCommandReturn = Undoable | undefined;
/**
 * << Undoable Command >>
 * Shape를 레이어에 붙이는 커맨드
 */
declare const createShapeCommand: Cmd;
export default createShapeCommand;
