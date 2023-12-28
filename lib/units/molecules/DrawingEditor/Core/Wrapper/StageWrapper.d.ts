import Konva from 'konva';
import BaseAbsctracController from '../BaseAbsctractController';
import Tool from '../BaseAbsctractController';
import CommandRegistry from '../ConmmandRegistry/CommandRegistry';
import { CommandExecutedHandlerParam, OUTER_HANDLER_TYPE } from '../Interfaces/CommandRegistry';
import { APIWrapper } from './APIWrapper';
export default class StageWrapper extends APIWrapper {
    private _currentTool;
    private _commandRegistry;
    private _outerHandlers;
    private _transformLayer;
    get transformLayer(): Konva.Layer | null;
    get commandRegistry(): CommandRegistry | null;
    get currentTool(): BaseAbsctracController | null;
    get outerHandlers(): Map<OUTER_HANDLER_TYPE, (param: CommandExecutedHandlerParam) => void> | null;
    set currentTool(currentTool: Tool | null);
    constructor(stage: Konva.Stage);
    refreshHandler(type: OUTER_HANDLER_TYPE, handler: (param: any) => void): void;
    destroy(): void;
}
