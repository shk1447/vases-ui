import ToolChangeAction from '../../../../Core/ConmmandRegistry/Actions/ControllerSwitch';
import { Cmd, CmdActionParameter } from '../../../../Core/Interfaces/Commands';
import SVGIcon from '../../../../Core/Utils/SVGIcon';
import eraser from './eraser.svg';
import EraserController from './EraserController';
import EraserTool from './EraserController';

/**
 * 지우개 툴을 활성화 시키는 커맨드
 */
export type activateEraserControllerCommandParam = undefined;
export type activateEraserControllerCommandReturn = ToolChangeAction;

const activateEraserController = {
  key: 'activate-eraser-controller',
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<activateEraserControllerCommandParam>): activateEraserControllerCommandReturn => {
    stageWrapper.currentTool?.deactivate();
    stageWrapper.currentTool = new EraserController(stageWrapper);
    stageWrapper.currentTool?.activate();
    return new ToolChangeAction('activate-eraser-controller');
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: eraser }),
  },
} as Cmd;

export default activateEraserController;
