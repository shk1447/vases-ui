import { KonvaEventObject } from 'konva/lib/Node';
import StageWrapper from '../../../../Core/Wrapper/StageWrapper';
import BaseAbsctractController from '../../../../Core/BaseAbsctractController';
export default class AutoFillPathController extends BaseAbsctractController {
    private _clip;
    private _startPoint;
    private _clipper;
    private _undoables;
    private _removeTargets;
    constructor(stageWrapper: StageWrapper);
    stageMouseinFunction(e: MouseEvent): void;
    stageMouseoutFunction(): void;
    mousedownFunction(e: KonvaEventObject<MouseEvent>): void;
    mousemoveFunction(e: KonvaEventObject<MouseEvent>): void;
    mouseupFunction(e?: KonvaEventObject<MouseEvent>): void;
    private _targetSimplify;
    private _recursive;
    keydownFunction(e: KeyboardEvent): void;
    activateFunction(): void;
    deactivateFunction(): void;
}
