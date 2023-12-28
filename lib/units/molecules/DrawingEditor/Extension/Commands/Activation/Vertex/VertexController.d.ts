import { KonvaEventObject } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import BaseAbsctractController from '../../../../Core/BaseAbsctractController';
import StageWrapper from '../../../../Core/Wrapper/StageWrapper';
export default class VertextController extends BaseAbsctractController {
    private _isPolygonEnd;
    private _vertexRadius;
    private _points;
    private _group;
    private _circles;
    private _lines;
    constructor(stageWrapper: StageWrapper);
    get points(): Vector2d[] | null;
    stageMouseinFunction(): void;
    stageMouseoutFunction(): void;
    activateFunction(): void;
    deactivateFunction(): void;
    clear(): void;
    mousedownFunction(e: KonvaEventObject<MouseEvent>): void;
    mousemoveFunction(e: KonvaEventObject<MouseEvent>): void;
    mouseupFunction(e?: KonvaEventObject<MouseEvent>): void;
    keydownFunction(e: KeyboardEvent): void;
}
