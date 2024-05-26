import { KonvaEventObject } from "konva/lib/Node";
import StageWrapper from "./Wrapper/StageWrapper";

export default abstract class BaseAbsctractController {
  protected _stageWrapper: StageWrapper | null;
  protected _hasMousedown: boolean = false;
  protected _name: string = "";
  private _isActivated: boolean = false;
  private _hasSpacebarPressed: boolean = false;
  constructor(stageWrapper: StageWrapper) {
    this._stageWrapper = stageWrapper;
  }

  get name(): string | null {
    return this._name;
  }

  public activate(): void {
    // if (this._isActivated) return;
    const container = this._stageWrapper?.stage?.container();

    if (container) {
      container.tabIndex = 1;
      container.focus();
    }

    this._stageWrapper?.stage?.on("mousedown", this.mousedownHandlerFunction);
    this._stageWrapper?.stage?.on("mousemove", this.mousemoveHandlerFunction);
    this._stageWrapper?.stage?.on("mouseup", this.mouseupHandlerFunction);

    // this._stageWrapper?.stage
    //   ?.container()
    window.addEventListener("keydown", this.keydownHandlerFunction);

    // this._stageWrapper?.stage
    //   ?.container()
    window.addEventListener("keyup", this.keyupHandlerFunction);
    this._isActivated = true;
    this.activateFunction();
  }

  public deactivate(): void {
    this._stageWrapper?.stage?.off("mousedown", this.mousedownHandlerFunction);
    this._stageWrapper?.stage?.off("mousemove", this.mousemoveHandlerFunction);
    this._stageWrapper?.stage?.off("mouseup", this.mouseupHandlerFunction);

    // this._stageWrapper?.stage
    //   ?.container()
    window.removeEventListener("keydown", this.keydownHandlerFunction);
    // this._stageWrapper?.stage
    //   ?.container()
    window.removeEventListener("keyup", this.keyupHandlerFunction);
    this._isActivated = false;
    this.deactivateFunction();
  }
  /**
   * 마우스가 stage 영역 밖에서 안으로 들어올 때 호출됨
   */
  abstract stageMouseinFunction(e: KonvaEventObject<MouseEvent>): void;

  /**
   * 마우스가 stage 영역 밖으로 나갈 때 호출됨
   */
  abstract stageMouseoutFunction(e: KonvaEventObject<MouseEvent>): void;

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

  /**
   * Command가 호출 되고 나서 호출
   */

  public afterExecutedCommand(): void {}

  /**
    0 : 버튼이 없거나 초기화되지 않음
    1 : 기본 버튼(보통 왼쪽 버튼)
    2 : 보조 버튼(보통 오른쪽 버튼)
    4 : 보조 버튼(일반적으로 마우스 휠 버튼 또는 가운데 버튼)
    8 : 네 번째 버튼(일반적으로 "브라우저 뒤로" 버튼)
    16 : 5 번째 버튼 (일반적으로 "Browser Forward"버튼)
   */
  private mousedownHandlerFunction = this.mousedownHandler.bind(this);
  private mousedownHandler(e: KonvaEventObject<MouseEvent>) {
    if (this._hasSpacebarPressed) return;

    this._hasMousedown = true;
    this.mousedownFunction(e);
  }
  private mousemoveHandlerFunction = this.mousemoveHandler.bind(this);
  private mousemoveHandler(e: KonvaEventObject<MouseEvent>) {
    if (e.evt && (e.evt.buttons === 0 || e.evt.buttons === 1)) {
      this.mousemoveFunction(e);
    }
    if (this._hasSpacebarPressed) return;
    if (e.evt && e.evt.buttons !== 1) return;
  }
  private mouseupHandlerFunction = this.mouseupHandler.bind(this);
  private mouseupHandler(e: KonvaEventObject<MouseEvent>) {
    if (this._hasSpacebarPressed) return;
    if (!this._hasMousedown) return;
    this._hasMousedown = false;
    this.mouseupFunction(e);
  }
  private keydownHandlerFunction = this.keydownHandler.bind(this);
  private keydownHandler(e: KeyboardEvent) {
    if (e.key === " ") this._hasSpacebarPressed = true;
    this.keydownFunction(e);
  }

  private keyupHandlerFunction = this.keyupHandler.bind(this);
  private keyupHandler(e: KeyboardEvent) {
    if (e.key === " ") this._hasSpacebarPressed = false;
  }
}
