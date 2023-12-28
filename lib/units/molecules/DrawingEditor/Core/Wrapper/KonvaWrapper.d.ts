import Konva from 'konva';
import StageWrapper from './StageWrapper';
export default class KonvaWrapper {
    private _container;
    private _stage;
    private _stageWrapper;
    get stage(): Konva.Stage | null;
    get stageWrapper(): StageWrapper | null;
    constructor(container: HTMLDivElement);
    private _initialize;
    private _initWatchFocueBlur;
    private _focusAndBlurHandlerFunction;
    private _focusAndBlurHandler;
    private _initStageMouseInOut;
    private _mouseinHandlerFunction;
    private _mouseinHandler;
    private _mouseoutHandlerFunction;
    private _mouseoutHandler;
    private _contextmenuHandlerFunction;
    private _contextmenuHandler;
    destroy(): void;
}
