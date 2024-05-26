import { TransformerConfig } from "konva/lib/shapes/Transformer";
import { MutableRefObject } from "react";
import Redoable from "../../../ConmmandRegistry/Actions/Redoable";
import Undoable from "../../../ConmmandRegistry/Actions/Undoable";
import {
  CommandExecutedHandlerParam,
  SharedDatum,
} from "../../CommandRegistry";
import { Cmd } from "../../Commands";
import { CanvasImperativeInterface } from "../Canvas";

export interface DrawingEditorProps {
  // imgSrc: string;
  width: string;
  height: string;
  color: string;
  brushRadius?: number;
  eraserRadius?: number;
  enableTransfromerOutOfScreen?: boolean;
  cmds: Cmd[];
  commandExcutedHandler?: ({
    key,
    result,
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandExecutedHandlerParam) => void;
  backgroundImageLoaded?: () => void;
  minimap?: boolean;
  transformerStyle?: TransformerConfig;

  srcs?: string[];
  fitImage?: boolean;
}

export interface ICommandContext {
  canvas: MutableRefObject<CanvasImperativeInterface | undefined>;
  sharedDatum: SharedDatum;
  undoList: Undoable[];
  redoList: Redoable[];
  currentController: string;
}
