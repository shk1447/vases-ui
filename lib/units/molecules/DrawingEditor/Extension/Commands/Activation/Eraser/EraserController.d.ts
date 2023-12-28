import { KonvaEventObject } from 'konva/lib/Node';
import StageWrapper from '../../../../Core/Wrapper/StageWrapper';
import BaseAbsctractController from '../../../../Core/BaseAbsctractController';
export default class EraserController extends BaseAbsctractController {
    private _target;
    private _eraser;
    private _clipper;
    private _removeTargets;
    private _mousedownClip;
    private _mouseupClip;
    private _updatePathInfo;
    private _undoables;
    constructor(stageWrapper: StageWrapper);
    mousedownFunction(e: KonvaEventObject<MouseEvent>): void;
    mousemoveFunction(e: KonvaEventObject<MouseEvent>): void;
    mouseupFunction(e?: KonvaEventObject<MouseEvent>): void;
    keydownFunction(e: KeyboardEvent): void;
    activateFunction(): void;
    deactivateFunction(): void;
    stageMouseinFunction(e: MouseEvent): void;
    stageMouseoutFunction(e: MouseEvent): void;
    private _recursive;
    private _erase;
}
