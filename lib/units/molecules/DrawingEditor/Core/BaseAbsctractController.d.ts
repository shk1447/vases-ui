import { KonvaEventObject } from 'konva/lib/Node';
import StageWrapper from './Wrapper/StageWrapper';
export default abstract class BaseAbsctractController {
    protected _stageWrapper: StageWrapper | null;
    protected _hasMousedown: boolean;
    protected _name: string;
    private _isActivated;
    constructor(stageWrapper: StageWrapper);
    get name(): string | null;
    activate(): void;
    deactivate(): void;
    /**
     * 마우스가 stage 영역 밖에서 안으로 들어올 때 호출됨
     */
    abstract stageMouseinFunction(e: MouseEvent): void;
    /**
     * 마우스가 stage 영역 밖으로 나갈 때 호출됨
     */
    abstract stageMouseoutFunction(e: MouseEvent): void;
    /**
     * konva stage에서 mousedown 할 때 호출됨
     * @param e konva event object (mouse event)
     */
    abstract mousedownFunction(e: KonvaEventObject<MouseEvent>): void;
    /**
     * konva stage에서 mousemove 할 때 호출됨
     * @param e konva event object (mouse event)
     */
    abstract mousemoveFunction(e: KonvaEventObject<MouseEvent>): void;
    /**
     * konva stage에서 mouseup 할 때 호출됨
     * @param e konva event object (mouse event)
     */
    abstract mouseupFunction(e: KonvaEventObject<MouseEvent>): void;
    /**
     * window에서 keydown 할 때 호출됨
     * @param e window keyboard event
     */
    abstract keydownFunction(e: KeyboardEvent): void;
    /**
     * Tool이 활성화 될 때 호출
     */
    abstract activateFunction(): void;
    /**
     * Tool이 비활성화 될 때 호출
     */
    abstract deactivateFunction(): void;
    private mousedownHandlerFunction;
    private mousedownHandler;
    private mousemoveHandlerFunction;
    private mousemoveHandler;
    private mouseupHandlerFunction;
    private mouseupHandler;
    private keydownHandlerFunction;
    private keydownHandler;
}
