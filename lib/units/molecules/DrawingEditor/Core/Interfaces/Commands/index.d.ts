/// <reference types="react" />
import { KonvaEventObject } from 'konva/lib/Node';
import ControllerSwitch from '../../ConmmandRegistry/Actions/ControllerSwitch';
import Redoable from '../../ConmmandRegistry/Actions/Redoable';
import Shareable from '../../ConmmandRegistry/Actions/Shareable';
import Undoable from '../../ConmmandRegistry/Actions/Undoable';
import StageWrapper from '../../Wrapper/StageWrapper';
import { CommandRegistryPassPrameter } from '../CommandRegistry';
/**
 * CORE COMMAND ENUM
 */
export declare enum CORE_COMMAND {
    CREATE_SHAPE = "create-shape",
    SELECT_SHAPE = "select-shape",
    REMOVE_SHAPE = "remove-shape",
    UPDATE_SHAPE = "update-shape",
    NOTIFY_MANIPULATION = "notify-manipulation"
}
interface ShortCutProps {
    altKey?: boolean;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    metaKey?: boolean;
    key: string;
}
declare type ToolbarProps = {
    icon: JSX.Element;
};
export interface Cmd {
    key: string | CORE_COMMAND;
    action: <T>({ stageWrapper, sharedDatum, undoList, redoList, currentController, param, mouseEvent, }: CmdActionParameter<T>) => Undoable | Shareable | Redoable | ControllerSwitch | undefined | Undoable[] | Redoable[];
    shortCut?: ShortCutProps;
    toolbar?: ToolbarProps;
    condition?: ({ sharedDatum, undoList, redoList, currentController, }: CommandRegistryPassPrameter) => boolean;
    event?: CmdNaitiveEventProps;
    initializer?: (stageWrapper: StageWrapper) => void;
}
/**
 * 커맨드 (네이티브) 이벤트 연결 속성 인터페이스
 */
interface CmdNaitiveEventProps {
    type: string;
    condition: (event: Event) => void | boolean;
}
/**
 * 커맨드 액션 파라미터 인터페이스
 */
export declare type CmdActionParameter<T> = {
    stageWrapper: StageWrapper;
    param: T;
    mouseEvent: KonvaEventObject<any> | undefined;
} & CommandRegistryPassPrameter;
export {};
