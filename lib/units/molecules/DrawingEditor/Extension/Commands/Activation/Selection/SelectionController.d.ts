import Konva from 'konva';
import { KonvaEventObject } from 'konva/lib/Node';
import BaseAbsctractController from '../../../../Core/BaseAbsctractController';
import StageWrapper from '../../../../Core/Wrapper/StageWrapper';
export default class SelectionController extends BaseAbsctractController {
    private _selectionLayer;
    stageMouseinFunction(): void;
    stageMouseoutFunction(): void;
    activateFunction(): void;
    deactivateFunction(): void;
    private selectionRect;
    private startingPoint;
    private endPoint;
    constructor(stageWrapper: StageWrapper);
    /**
     * Transformer를 만들어주는 함수
     * @param selected 선택된 노드들
     * @returns Konva.Transformer
     */
    _createTransformer(selected: Konva.Node[]): Konva.Transformer;
    mousedownFunction(e: KonvaEventObject<MouseEvent>): void;
    mousemoveFunction(e: KonvaEventObject<MouseEvent>): void;
    mouseupFunction(e?: KonvaEventObject<MouseEvent>): void;
    keydownFunction(e: KeyboardEvent): void;
}
