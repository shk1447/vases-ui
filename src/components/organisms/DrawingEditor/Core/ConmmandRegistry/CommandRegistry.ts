import { KonvaEventObject } from "konva/lib/Node";
import { OUTER_HANDLER_TYPE, SharedDatum } from "../Interfaces/CommandRegistry";
import {
  Cmd,
  CmdNaitiveEventProps,
  CORE_COMMAND,
} from "../Interfaces/Commands";
import StageWrapper, {
  DRAWING_EDITER_EDIT_MODE,
} from "../Wrapper/StageWrapper";
import ControllerSwitch from "./Actions/ControllerSwitch";
import ToolChangeAction from "./Actions/ControllerSwitch";
import Redoable from "./Actions/Redoable";
import Shareable from "./Actions/Shareable";
import CommandData from "./Actions/Shareable";
import Undoable from "./Actions/Undoable";
import addUndoableCommand from "./Commands/NotifyManipulation";
import createShapeCommand from "./Commands/Create";
import removeShapeCommand from "./Commands/Remove";
import selectShapeCommand from "./Commands/Select";
import updateShapeCommand from "./Commands/Update";
import changeModeCommand from "./Commands/ChangeMode";

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
    this._commands?.set(changeModeCommand.key, changeModeCommand);
  }
  private _commands: Map<string, Cmd> | null = new Map();

  // Shareable Command Map
  private _sharedDatum: Map<string, Shareable> | null = new Map();
  // Undo List
  private _undoList: (Undoable | Undoable[])[] | null = [];
  // Redo List
  private _redoList: (Redoable | Redoable[])[] | null = [];
  // Current Controller name
  private _currentController: string | null = "";

  public onAddedCommand: ((commandList: string[]) => void) | null = null;

  private _listenrs: Map<string, ((event: any) => void)[]> = new Map();

  public getCommandList(): string[] {
    return this._commands ? Array.from(this._commands.keys()) : [];
  }

  public clearRedo(): void {
    this._redoList = [];
  }

  public clearUndoRedoList(): void {
    this._undoList = [];
    this._redoList = [];
  }

  get undoList(): (Redoable | Redoable[])[] | null {
    return this._undoList;
  }

  get redoList(): (Redoable | Redoable[])[] | null {
    return this._redoList;
  }

  private _keydownHandler = (_e: any) => {
    if (
      (_e.ctrlKey && _e.shiftKey && _e.keyCode === 187) ||
      (_e.ctrlKey && _e.keyCode === 189)
    ) {
      _e.preventDefault();
    }

    this._listenrs.get("keydown")?.forEach((f: (event: any) => void) => {
      f(_e);
    });
  };

  private _keyupHandler = (_e: any) => {
    this._listenrs.get("keyup")?.forEach((f: (event: any) => void) => {
      f(_e);
    });
  };

  public clearCommand(): void {
    (this._commands ? Array.from(this._commands.entries()) : []).forEach(
      (value: [string, Cmd]) => {
        value[1].events?.forEach((e: CmdNaitiveEventProps) => {
          for (const [key, value] of this._listenrs) {
            if (key === "keydown" || key === "keyup") {
              value.forEach((f: (event: any) => void) => {
                // this._stageWrapper?.stage
                //   ?.container()
                // window.removeEventListener(key, f);
              });
            } else {
              value.forEach((f: (event: any) => void) => {
                this._stageWrapper?.stage?.off(key, f);
              });
            }
          }
        });
      }
    );
    window.removeEventListener("keydown", this._keydownHandler);
    window.removeEventListener("keyup", this._keyupHandler);
    this._listenrs.clear();
    this._commands?.clear();
    this._commands?.set(createShapeCommand.key, createShapeCommand);
    this._commands?.set(removeShapeCommand.key, removeShapeCommand);
    this._commands?.set(selectShapeCommand.key, selectShapeCommand);
    this._commands?.set(updateShapeCommand.key, updateShapeCommand);
    this._commands?.set(addUndoableCommand.key, addUndoableCommand);
    this._commands?.set(changeModeCommand.key, changeModeCommand);
  }

  public addCommands(commands: Cmd[]) {
    commands.forEach((command: Cmd) => {
      if (this._commands?.has(command.key)) return;
      this._commands?.set(command.key, command);

      if (command.events) {
        command.events.forEach((e: CmdNaitiveEventProps) => {
          if (!this._listenrs.has(e.type)) {
            this._listenrs.set(e.type, []);
          }
          if (e.type === "keydown" || e.type === "keyup") {
            const handler = (event: KeyboardEvent) => {
              if (
                !e.condition ||
                e.condition(event, this._stageWrapper as StageWrapper)
              ) {
                if (
                  command.condition &&
                  command.condition({
                    sharedDatum: this._sharedDatum as SharedDatum,
                    undoList: this._undoList as Undoable[],
                    redoList: this._redoList as Redoable[],
                    currentController: this._currentController as string,
                  })
                ) {
                  this.execute(command.key, undefined);
                }
                // 커맨드 실행 조건이 없으면 무조건 실행
                if (!command.condition) this.execute(command.key, undefined);
              }
            };
            this._listenrs.get(e.type)?.push(handler);
          } else {
            const handler = (event: KonvaEventObject<any>) => {
              if (
                !e.condition ||
                e?.condition(event.evt, this._stageWrapper as StageWrapper)
              ) {
                if (
                  command.condition &&
                  command.condition({
                    sharedDatum: this._sharedDatum as SharedDatum,
                    undoList: this._undoList as Undoable[],
                    redoList: this._redoList as Redoable[],
                    currentController: this._currentController as string,
                  })
                ) {
                  this.execute(command.key, undefined, event);
                }

                // 커맨드 실행 조건이 없으면 무조건 실행
                if (!command.condition)
                  this.execute(command.key, undefined, event);
              }
            };
            this._listenrs.get(e.type)?.push(handler);

            this._stageWrapper?.stage?.on(e.type, handler);
          }
        });
      }
      if (command.initializer) {
        command.initializer(this._stageWrapper as StageWrapper);
      }
    });
    window.addEventListener("keydown", this._keydownHandler);
    window.addEventListener("keyup", this._keyupHandler);
    this.onAddedCommand &&
      this.onAddedCommand(
        this._commands ? Array.from(this._commands.keys()) : []
      );
  }

  public execute<P>(
    key: string | CORE_COMMAND,
    parameter?: P,
    mouseEvent?: KonvaEventObject<any>
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

        if (constructorName === Undoable.name) {
          this._undoList?.push(result as Undoable);
          if ((this._undoList as Undoable[]).length > 30)
            (this._undoList as Undoable[]).shift();
          if ((result as Undoable).clearRedo) this._redoList = [];
        } else if (constructorName === Redoable.name) {
          (this._redoList as Redoable[]).push(result as Redoable);
        } else if (constructorName === Shareable.name) {
          this._sharedDatum?.delete(key);
          this._sharedDatum?.set(key, result as CommandData);
        } else if (constructorName === ControllerSwitch.name) {
          this._currentController = (result as ToolChangeAction).actionName;
        } else if (
          result &&
          Array.isArray(result) &&
          !result.filter(
            (value: Undoable | Redoable | ControllerSwitch | Shareable) =>
              value.constructor.name === Redoable.name ||
              value.constructor.name === Shareable.name ||
              value.constructor.name === ControllerSwitch.name
          ).length
        ) {
          this._undoList?.push(result as Undoable[]);
        } else if (
          result &&
          Array.isArray(result) &&
          !result.filter(
            (value: Undoable | Redoable | ControllerSwitch | Shareable) =>
              value.constructor.name === Undoable.name ||
              value.constructor.name === Shareable.name ||
              value.constructor.name === ControllerSwitch.name
          ).length
        ) {
          this._redoList?.push(result as Redoable[]);
        }
      }

      const commandExecutedHandler = this._stageWrapper?.outerHandlers?.get(
        OUTER_HANDLER_TYPE.COMMAND_EXECUTED
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

      if (this._stageWrapper?.currentTool?.afterExecutedCommand) {
        this._stageWrapper?.currentTool?.afterExecutedCommand();
      }
    }
  }

  public destroy() {
    this.clearCommand();
    this._stageWrapper = null;
    this._commands?.clear();
    this._commands = null;
    this._sharedDatum?.clear();
    this._sharedDatum = null;
    this._undoList = null;
    this._redoList = null;
    this._currentController = null;
  }

  private _mode: DRAWING_EDITER_EDIT_MODE = DRAWING_EDITER_EDIT_MODE.NORMAL;
  private _tempUndo: (Undoable | Undoable[])[] = [];
  private _tempRedo: (Redoable | Redoable[])[] = [];

  get mode(): DRAWING_EDITER_EDIT_MODE {
    return this._mode;
  }
  set mode(mode: DRAWING_EDITER_EDIT_MODE) {
    this._mode = mode;
    // undo, redo 메모리를 유지해야 한다!
    // temp모드이면 undo redo 옮겨놓는다.
    // normal모드이면 옮겨 뒀던 undo, redo를 옮겨 놓는다.
    if (mode === DRAWING_EDITER_EDIT_MODE.TEMP) {
      if (this._redoList) {
        this._tempRedo = [...this._redoList];
        this._redoList.splice(0);
      }

      if (this._undoList) {
        this._tempUndo = [...this._undoList];
        this._undoList.splice(0);
      }
    } else {
      if (this._redoList) {
        this._redoList.splice(0);
        this._redoList.push(...this._tempRedo);
        this._tempRedo = [];
      }

      if (this._undoList) {
        this._undoList.splice(0);
        this._undoList.push(...this._tempUndo);
        this._tempRedo = [];
      }
    }
  }
}
