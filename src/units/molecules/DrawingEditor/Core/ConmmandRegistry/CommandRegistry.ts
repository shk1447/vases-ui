import { KonvaEventObject } from 'konva/lib/Node';
import { OUTER_HANDLER_TYPE, SharedDatum } from '../Interfaces/CommandRegistry';
import { Cmd, CORE_COMMAND } from '../Interfaces/Commands';
import StageWrapper from '../Wrapper/StageWrapper';
import ControllerSwitch from './Actions/ControllerSwitch';
import ToolChangeAction from './Actions/ControllerSwitch';
import Redoable from './Actions/Redoable';
import Shareable from './Actions/Shareable';
import CommandData from './Actions/Shareable';
import Undoable from './Actions/Undoable';
import addUndoableCommand from './Commands/NotifyManipulation';
import createShapeCommand from './Commands/Create';
import removeShapeCommand from './Commands/Remove';
import selectShapeCommand from './Commands/Select';
import updateShapeCommand from './Commands/Update';

export default class CommandRegistry {
  private _stageWrapper: StageWrapper | null = null;
  constructor(stageWrapper: StageWrapper) {
    this._stageWrapper = stageWrapper;

    /** 내장 COMMANDS */
    this._commands?.set(createShapeCommand.key, createShapeCommand);
    this._commands?.set(removeShapeCommand.key, removeShapeCommand);
    this._commands?.set(selectShapeCommand.key, selectShapeCommand);
    this._commands?.set(updateShapeCommand.key, updateShapeCommand);
    this._commands?.set(addUndoableCommand.key, addUndoableCommand);
  }
  private _commands: Map<string, Cmd> | null = new Map();

  // Shareable Command Map
  private _sharedDatum: Map<string, Shareable> | null = new Map();
  // Undo List
  private _undoList: (Undoable | Undoable[])[] | null = [];
  // Redo List
  private _redoList: (Redoable | Redoable[])[] | null = [];
  // Current Controller name
  private _currentController: string | null = '';

  public clearCommand(): void {
    this._commands?.clear();
  }

  public addCommand(command: Cmd) {
    this._commands?.set(command.key, command);
  }

  public addCommands(commands: Cmd[]) {
    commands.forEach((command: Cmd) => {
      this._commands?.set(command.key, command);

      if (command.event) {
        this._stageWrapper?.stage?.on(
          command.event.type,
          (event: KonvaEventObject<any>) => {
            if (
              !command.event?.condition ||
              command.event?.condition(event.evt)
            ) {
              this.execute(command.key, undefined, event);
            }
          },
        );
      }
      if (command.initializer) {
        command.initializer(this._stageWrapper as StageWrapper);
      }
    });
    this.ShortCutInitHandle();
  }

  private ShortCutInitHandle() {
    window.addEventListener('keydown', (evt: KeyboardEvent) => {
      evt.preventDefault();
      evt.stopPropagation();
      const eventData = {
        altKey: evt.altKey,
        shiftKey: evt.shiftKey,
        ctrlKey: evt.ctrlKey,
        metaKey: evt.metaKey,
        key: evt.key.toLowerCase(),
      };
      for (let [key, value] of (this._commands as Map<string, Cmd>).entries()) {
        if (value.shortCut) {
          if (
            eventData.shiftKey === (value.shortCut.shiftKey ?? false) &&
            eventData.ctrlKey === (value.shortCut.ctrlKey ?? false) &&
            eventData.metaKey === (value.shortCut.metaKey ?? false) &&
            eventData.altKey === (value.shortCut.altKey ?? false) &&
            eventData.key === value.shortCut.key.toLowerCase()
          ) {
            if (
              value.condition &&
              value.condition({
                sharedDatum: this._sharedDatum as SharedDatum,
                undoList: this._undoList as Undoable[],
                redoList: this._redoList as Redoable[],
                currentController: this._currentController as string,
              })
            ) {
              this.execute(key);
            }
            if (!value.condition) this.execute(key);
          }
        }
      }
    });
  }

  public execute<P>(
    key: string | CORE_COMMAND,
    parameter?: P,
    mouseEvent?: KonvaEventObject<any>,
  ): void {
    const commandFunc = this._commands?.get(key as string)?.action;
    if (commandFunc) {
      const result = commandFunc<P>({
        stageWrapper: this._stageWrapper as StageWrapper,
        sharedDatum: this._sharedDatum as SharedDatum,
        undoList: this._undoList as Undoable[],
        redoList: this._redoList as Redoable[],
        currentController: this._currentController as string,
        param: parameter as P,
        mouseEvent: mouseEvent ? mouseEvent : undefined,
      });

      if (result) {
        const constructorName = (
          result as
            | Undoable
            | Shareable
            | Redoable
            | ControllerSwitch
            | Redoable[]
            | Undoable[]
        ).constructor.name;

        if (constructorName === 'Undoable') {
          this._undoList?.push(result as Undoable);
          if ((this._undoList as Undoable[]).length > 30)
            (this._undoList as Undoable[]).shift();
          if ((result as Undoable).clearRedo) this._redoList = [];
        } else if (constructorName === 'Redoable') {
          (this._redoList as Redoable[]).push(result as Redoable);
        } else if (constructorName === 'Shareable') {
          this._sharedDatum?.delete(key);
          this._sharedDatum?.set(key, result as CommandData);
        } else if (constructorName === 'ControllerSwitch') {
          this._currentController = (result as ToolChangeAction).actionName;
        } else if (
          result &&
          Array.isArray(result) &&
          !result.filter(
            (value: Undoable | Redoable | ControllerSwitch | Shareable) =>
              value.constructor.name === 'Redoable' ||
              value.constructor.name === 'Shareable' ||
              value.constructor.name === 'ControllerSwitch',
          ).length
        ) {
          this._undoList?.push(result as Undoable[]);
        } else if (
          result &&
          Array.isArray(result) &&
          !result.filter(
            (value: Undoable | Redoable | ControllerSwitch | Shareable) =>
              value.constructor.name === 'Undoable' ||
              value.constructor.name === 'Shareable' ||
              value.constructor.name === 'ControllerSwitch',
          ).length
        ) {
          this._redoList?.push(result as Redoable[]);
        }
      }

      const commandExecutedHandler = this._stageWrapper?.outerHandlers?.get(
        OUTER_HANDLER_TYPE.COMMAND_EXECUTED,
      );

      if (commandExecutedHandler) {
        commandExecutedHandler({
          key: key,
          result: result,
          sharedDatum: new Map(this._sharedDatum),
          undoList: [...(this._undoList as Undoable[])],
          redoList: [...(this._redoList as Redoable[])],
          currentController: this._currentController as string,
        });
      }
    }
  }

  public destroy() {
    this._stageWrapper = null;
    this._commands?.clear();
    this._commands = null;
    this._sharedDatum?.clear();
    this._sharedDatum = null;
    this._undoList = null;
    this._redoList = null;
    this._currentController = null;
  }
}
