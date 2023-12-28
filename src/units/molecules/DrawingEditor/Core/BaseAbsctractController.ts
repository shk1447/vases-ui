import { KonvaEventObject } from 'konva/lib/Node';
import StageWrapper from './Wrapper/StageWrapper';

export default abstract class BaseAbsctractController {
  protected _stageWrapper: StageWrapper | null;
  protected _hasMousedown: boolean = false;
  protected _name: string = '';
  private _isActivated: boolean = false;
  constructor(stageWrapper: StageWrapper) {
    this._stageWrapper = stageWrapper;
  }

  get name(): string | null {
    return this._name;
  }

  public activate(): void {
    if (this._isActivated) return;
    const container = this._stageWrapper?.stage?.container();

    if (container) {
      container.tabIndex = 1;
      container.focus();
    }

    this._stageWrapper?.stage?.on('mousedown', this.mousedownHandlerFunction);
    this._stageWrapper?.stage?.on('mousemove', this.mousemoveHandlerFunction);
    this._stageWrapper?.stage?.on('mouseup', this.mouseupHandlerFunction);

    window.addEventListener('keydown', this.keydownHandlerFunction);
    this._isActivated = true;
    this.activateFunction();
  }

  public deactivate(): void {
    this._stageWrapper?.stage?.off('mousedown', this.mousedownHandlerFunction);
    this._stageWrapper?.stage?.off('mousemove', this.mousemoveHandlerFunction);
    this._stageWrapper?.stage?.off('mouseup', this.mouseupHandlerFunction);

    window.removeEventListener('keydown', this.keydownHandlerFunction);
    this._isActivated = false;
    this.deactivateFunction();
  }
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

  private mousedownHandlerFunction = this.mousedownHandler.bind(this);
  private mousedownHandler(e: KonvaEventObject<MouseEvent>) {
    this._hasMousedown = true;
    this.mousedownFunction(e);
  }
  private mousemoveHandlerFunction = this.mousemoveHandler.bind(this);
  private mousemoveHandler(e: KonvaEventObject<MouseEvent>) {
    this.mousemoveFunction(e);
  }
  private mouseupHandlerFunction = this.mouseupHandler.bind(this);
  private mouseupHandler(e: KonvaEventObject<MouseEvent>) {
    this._hasMousedown = false;
    this.mouseupFunction(e);
  }
  private keydownHandlerFunction = this.keydownHandler.bind(this);
  private keydownHandler(e: KeyboardEvent) {
    this.keydownFunction(e);
  }
}
