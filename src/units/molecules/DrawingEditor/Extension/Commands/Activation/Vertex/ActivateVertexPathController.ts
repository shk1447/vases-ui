import Konva from 'konva';

import { v4 as uuidv4 } from 'uuid';
import vertex from './vertex.svg';
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from '../../../../Core/Interfaces/Commands';
import { CommandRegistryPassPrameter } from '../../../../Core/Interfaces/CommandRegistry';
import ToolChangeAction from '../../../../Core/ConmmandRegistry/Actions/ControllerSwitch';
import SVGIcon from '../../../../Core/Utils/SVGIcon';

import { selectShapeCommandParameter } from '../../../../Core/ConmmandRegistry/Commands/Select';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import VertextController from './VertexController';

export type activateVertextPathControllerCommandParam = undefined;
export type activateVertextPathControllerCommandReturn = ToolChangeAction;

const activateVertexPathController = {
  key: 'activate-vertexpath-controller',
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<activateVertextPathControllerCommandParam>): activateVertextPathControllerCommandReturn => {
    stageWrapper.currentTool?.deactivate();
    stageWrapper.currentTool = new VertextController(stageWrapper);
    stageWrapper.currentTool?.activate();

    return new ToolChangeAction('activate-vertexpath-controller');
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: vertex }),
  },
  condition: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => {
    return true;
  },
} as Cmd;

export default activateVertexPathController;
