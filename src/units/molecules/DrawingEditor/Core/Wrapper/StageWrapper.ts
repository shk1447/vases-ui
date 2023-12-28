import Konva from 'konva';
import BaseAbsctracController from '../BaseAbsctractController';
import Tool from '../BaseAbsctractController';
import CommandRegistry from '../ConmmandRegistry/CommandRegistry';
import {
  CommandExecutedHandlerParam,
  OUTER_HANDLER_TYPE,
} from '../Interfaces/CommandRegistry';

import { APIWrapper } from './APIWrapper';

/*
  1. a = { name : 'lim'} , b = {sayName: () => console.log(this.name)}
   -> Object.assign(a, b)
   // {name : 'lim', sayName: () => console.log(this.name)}
  2. a = {name : 'lim', b : { sayName: () => console.log(this.name)}}
*/

export default class StageWrapper extends APIWrapper {
  private _currentTool: Tool | null = null;
  private _commandRegistry: CommandRegistry | null = null;
  private _outerHandlers: Map<OUTER_HANDLER_TYPE, (param: any) => void> | null =
    new Map();

  private _transformLayer: Konva.Layer | null;

  get transformLayer(): Konva.Layer | null {
    return this._transformLayer;
  }

  get commandRegistry(): CommandRegistry | null {
    return this._commandRegistry;
  }

  get currentTool(): BaseAbsctracController | null {
    return this._currentTool;
  }

  get outerHandlers(): Map<
    OUTER_HANDLER_TYPE,
    (param: CommandExecutedHandlerParam) => void
  > | null {
    return this._outerHandlers;
  }

  set currentTool(currentTool: Tool | null) {
    this._currentTool = currentTool;
  }

  constructor(stage: Konva.Stage) {
    super(stage);
    this._commandRegistry = new CommandRegistry(this);
    this._stage = stage;
    this._backgroundImageLayer = new Konva.Layer({
      id: 'background-image-layer',
    });
    this._transformLayer = new Konva.Layer({
      id: 'transform-layer',
    });

    this._stage?.add(this._backgroundImageLayer);
    this._currentLayer = new Konva.Layer({ id: 'base-layer' });
    this._stage?.add(this._currentLayer);
    this._stage?.add(this._transformLayer);
  }

  public refreshHandler(
    type: OUTER_HANDLER_TYPE,
    handler: (param: any) => void,
  ) {
    if (this._outerHandlers?.has(type)) {
      const func = this._outerHandlers.get(type) as () => void;
      this._stage?.off(type);
      this._outerHandlers.set(type, func === handler ? func : handler);
      this._stage?.on(type, (param: any) => handler(param.data));
    } else {
      this._outerHandlers?.set(type, handler);
      this._stage?.on(type, (param: any) => handler(param.data));
    }
  }

  public destroy(): void {
    super.destory();
    this._currentTool = null;

    this._transformLayer?.destroy();
    this._transformLayer = null;

    this._stage = null;

    this._commandRegistry?.destroy();
    this._commandRegistry = null;

    this._outerHandlers?.clear();
    this._outerHandlers = null;
  }
}
