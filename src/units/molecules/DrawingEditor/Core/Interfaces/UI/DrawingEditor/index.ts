import { MutableRefObject } from 'react';
import Redoable from '../../../ConmmandRegistry/Actions/Redoable';
import Undoable from '../../../ConmmandRegistry/Actions/Undoable';
import { CommandExecutedHandlerParam, SharedDatum } from '../../CommandRegistry';
import { Cmd } from '../../Commands';
import { CanvasImperativeInterface } from '../Canvas';

export interface DrawingEditorProps {
  imgSrc: string;
  width: string;
  height: string;
  color: string;
  booleanOperation: boolean;
  eraserRadius: number;
  cmds: Cmd[];
  commandExcutedHandler?: ({
    key,
    result,
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandExecutedHandlerParam) => void;
}

export interface ICommandContext {
  canvas: MutableRefObject<CanvasImperativeInterface | undefined>;
  sharedDatum: SharedDatum;
  undoList: Undoable[];
  redoList: Redoable[];
  currentController: string;
}
