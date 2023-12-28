import ToolChangeAction from '../../../../Core/ConmmandRegistry/Actions/ControllerSwitch';
import { Cmd, CmdActionParameter } from '../../../../Core/Interfaces/Commands';
import SVGIcon from '../../../../Core/Utils/SVGIcon';
import PathController from './AutoFillPathController';
import PathTool from './AutoFillPathController';
import path from './pencil.svg';

/**
 * 자유 폐쇄 곡선 툴을 활성화 하는 커맨드
 */
export type activatePathControllerCommandParam = undefined;
export type activatePathControllerCommandReturn = ToolChangeAction;

const activateAutoFillPathController = {
  key: 'activate-auto-fill-path-controller',
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<activatePathControllerCommandParam>): activatePathControllerCommandReturn => {
    stageWrapper.currentTool?.deactivate();
    stageWrapper.currentTool = new PathController(stageWrapper);
    stageWrapper.currentTool?.activate();
    return new ToolChangeAction('activate-path-controller');
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: path }),
  },
} as Cmd;
export default activateAutoFillPathController;
