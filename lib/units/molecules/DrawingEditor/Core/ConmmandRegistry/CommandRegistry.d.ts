import { KonvaEventObject } from 'konva/lib/Node';
import { Cmd, CORE_COMMAND } from '../Interfaces/Commands';
import StageWrapper from '../Wrapper/StageWrapper';
export default class CommandRegistry {
    private _stageWrapper;
    constructor(stageWrapper: StageWrapper);
    private _commands;
    private _sharedDatum;
    private _undoList;
    private _redoList;
    private _currentController;
    clearCommand(): void;
    addCommand(command: Cmd): void;
    addCommands(commands: Cmd[]): void;
    private ShortCutInitHandle;
    execute<P>(key: string | CORE_COMMAND, parameter?: P, mouseEvent?: KonvaEventObject<any>): void;
    destroy(): void;
}
