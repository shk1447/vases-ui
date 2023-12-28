import ControllerSwitch from '../../ConmmandRegistry/Actions/ControllerSwitch';
import Redoable from '../../ConmmandRegistry/Actions/Redoable';
import Shareable from '../../ConmmandRegistry/Actions/Shareable';
import Undoable from '../../ConmmandRegistry/Actions/Undoable';
/**
 * Drawing Editor Component 외부에서 연결하는
 * Core의 command hook
 */
export declare enum OUTER_HANDLER_TYPE {
    COMMAND_EXECUTED = "excuted"
}
/**
 * Command Registry의 core data
 */
export interface CommandRegistryPassPrameter {
    sharedDatum: Map<string, Shareable>;
    undoList: Undoable[];
    redoList: Redoable[];
    currentController: string;
}
export declare type SharedDatum = Map<string, Shareable>;
export declare type CommandExecutedHandlerParam = {
    key: string;
    result: Redoable | Undoable | Shareable | ControllerSwitch | undefined | Undoable[] | Redoable[];
} & CommandRegistryPassPrameter;
