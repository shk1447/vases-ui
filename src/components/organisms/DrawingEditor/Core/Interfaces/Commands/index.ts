import { KonvaEventObject } from "konva/lib/Node";
import ControllerSwitch from "../../ConmmandRegistry/Actions/ControllerSwitch";
import Redoable from "../../ConmmandRegistry/Actions/Redoable";
import Shareable from "../../ConmmandRegistry/Actions/Shareable";
import Undoable from "../../ConmmandRegistry/Actions/Undoable";
import StageWrapper from "../../Wrapper/StageWrapper";
import { CommandRegistryPassPrameter } from "../CommandRegistry";

/**
 * CORE COMMAND ENUM
 */
export enum CORE_COMMAND {
  CREATE_SHAPE = "create-shape", // konva shape를 생성
  SELECT_SHAPE = "select-shape", // konva sahpe를 선택처리
  REMOVE_SHAPE = "remove-shape", // konva shape를 제거
  UPDATE_SHAPE = "update-shape", // konva shape의 속성을 변경
  NOTIFY_MANIPULATION = "notify-manipulation", // undo데이터 만들어 넣기 (선 처리 후 undo 데이터)
  CHANGE_MODE = "change-mode", // 에디터 모드 변경 (임시모드 : 서브 에디팅)
}

interface ShortCutProps {
  altKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
  key: string;
}

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
  // shortCut?: ShortCutProps;
  condition?: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => boolean; // 키 다운시... 커맨드 액션의 실행 조건
  events?: CmdNaitiveEventProps[];
  initializer?: (stageWrapper: StageWrapper) => void;
}

/**
 * 커맨드 (네이티브) 이벤트 연결 속성 인터페이스
 */
export interface CmdNaitiveEventProps {
  type: string; // 브라우저 이벤트 키
  condition: (event: Event, stageWrapper?: StageWrapper) => void | boolean; // 브라우저 이벤트에 따른 커맨드 액션 실행 조건
}

/**
 * 커맨드 액션 파라미터 인터페이스
 */
export type CmdActionParameter<T> = {
  stageWrapper: StageWrapper;
  param: T;
  mouseEvent: KonvaEventObject<any> | undefined;
} & CommandRegistryPassPrameter;
