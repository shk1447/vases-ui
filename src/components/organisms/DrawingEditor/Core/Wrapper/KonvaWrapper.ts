import Konva from "konva";
import StageWrapper from "./StageWrapper";
import { KonvaEventListener, KonvaEventObject } from "konva/lib/Node";

export default class KonvaWrapper {
  private _container: HTMLDivElement | null = null;

  private _stage: Konva.Stage | null = null;
  private _stageWrapper: StageWrapper | null = null;

  get stage(): Konva.Stage | null {
    return this._stage;
  }

  get stageWrapper(): StageWrapper | null {
    return this._stageWrapper;
  }

  constructor(container: HTMLDivElement) {
    this._container = container;

    this._initialize();
    this._initWatchFocueBlur();
    // this._initContext();
    this._initStageMouseInOut();
  }

  private _initialize(): void {
    this._stage = new Konva.Stage({
      container: this._container as HTMLDivElement,
      width: this._container?.clientWidth,
      height: this._container?.clientHeight,
    });

    this._stageWrapper = new StageWrapper(this._stage);
  }

  private _initWatchFocueBlur(): void {
    window.addEventListener("mousedown", this._focusAndBlurHandlerFunction);
  }
  private _focusAndBlurHandlerFunction = this._focusAndBlurHandler.bind(this);
  private _focusAndBlurHandler(e: MouseEvent) {
    if (
      (e.target as HTMLElement)?.parentElement?.className === "konvajs-content"
    ) {
      // console.log('focus');
    } else {
      // console.log('blur');
    }
  }

  private _initStageMouseInOut(): void {
    // this._container?.addEventListener(
    //   "mouseenter",
    //   this._mouseinHandlerFunction
    // );
    // this._container?.addEventListener(
    //   "mouseleave",
    //   this._mouseoutHandlerFunction
    // );

    this._stage?.on("mouseenter", this._mouseinHandlerFunction);

    this._stage?.on("mouseleave", this._mouseoutHandlerFunction);
  }

  private _mouseinHandlerFunction = this._mouseinHandler.bind(this);
  private _mouseinHandler(e: KonvaEventObject<MouseEvent>) {
    this._stageWrapper?.currentTool?.stageMouseinFunction(e);
  }

  private _mouseoutHandlerFunction = this._mouseoutHandler.bind(this);
  private _mouseoutHandler(e: KonvaEventObject<MouseEvent>) {
    this._stageWrapper?.currentTool?.stageMouseoutFunction(e);
  }

  // private _initContext(): void {
  //   this._container?.addEventListener(
  //     'contextmenu',
  //     this._contextmenuHandlerFunction,
  //   );
  // }

  private _contextmenuHandlerFunction = this._contextmenuHandler.bind(this);
  private _contextmenuHandler(e: MouseEvent) {
    e.preventDefault();
  }

  public destroy(): void {
    window.removeEventListener("mousedown", this._focusAndBlurHandlerFunction);
    this._stage?.off("mouseenter", this._mouseinHandlerFunction);
    this._stage?.off("mouseleave", this._mouseoutHandlerFunction);
    this._container?.removeEventListener(
      "contextmenu",
      this._contextmenuHandlerFunction
    );
    this._stage?.off();
    this._stage?.destroy();
    this._stage = null;
    this._container = null;
    this._stageWrapper?.destroy();
    this._stageWrapper = null;
  }
}
