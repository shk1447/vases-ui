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
export enum CORE_COMMAND {
  CREATE_SHAPE = 'create-shape', // konva shape를 생성
  SELECT_SHAPE = 'select-shape', // konva sahpe를 선택처리
  REMOVE_SHAPE = 'remove-shape', // konva shape를 제거
  UPDATE_SHAPE = 'update-shape', // konva shape의 속성을 변경
  NOTIFY_MANIPULATION = 'notify-manipulation', // undo데이터 만들어 넣기 (선 처리 후 undo 데이터)
}

interface ShortCutProps {
  altKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
  key: string;
}

type ToolbarProps = {
  icon: JSX.Element;
};

export interface Cmd {
  key: string | CORE_COMMAND;
  action: <T>({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<T>) =>
    | Undoable
    | Shareable
    | Redoable
    | ControllerSwitch
    | undefined
    | Undoable[]
    | Redoable[];
  shortCut?: ShortCutProps;
  toolbar?: ToolbarProps;
  condition?: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => boolean; // 없으면 무조건 실행
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
export type CmdActionParameter<T> = {
  stageWrapper: StageWrapper;
  param: T;
  mouseEvent: KonvaEventObject<any> | undefined;
} & CommandRegistryPassPrameter;
