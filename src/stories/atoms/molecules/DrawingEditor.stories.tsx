import React, { useState } from 'react';
import { CommandExecutedHandlerParam } from '../../../units/molecules/DrawingEditor/Core/Interfaces/CommandRegistry';
import { DrawingEditorProps } from '../../../units/molecules/DrawingEditor/Core/Interfaces/UI/DrawingEditor';
import DrawingEditor from '../../../units/molecules/DrawingEditor/Core/UI/DrawingEditor';
import activateEraserController from '../../../units/molecules/DrawingEditor/Extension/Commands/Activation/Eraser/ActivateEraserController';
import activateAutoFillPathController from '../../../units/molecules/DrawingEditor/Extension/Commands/Activation/Path/ActivateAutoFillPathController';
import activateSelectionController from '../../../units/molecules/DrawingEditor/Extension/Commands/Activation/Selection/ActivateSelectionController';
import activateVertexPathController from '../../../units/molecules/DrawingEditor/Extension/Commands/Activation/Vertex/ActivateVertexPathController';

import copyCommand from '../../../units/molecules/DrawingEditor/Extension/Commands/Manipulation/Copy/Copy';
import moveDownCommand from '../../../units/molecules/DrawingEditor/Extension/Commands/Manipulation/MoveDown/MoveDown';
import moveToBottomCommand from '../../../units/molecules/DrawingEditor/Extension/Commands/Manipulation/MoveToBottom/MoveToBottom';
import moveToTopCommand from '../../../units/molecules/DrawingEditor/Extension/Commands/Manipulation/MoveToTop/MoveToTop';
import moveUpCommand from '../../../units/molecules/DrawingEditor/Extension/Commands/Manipulation/MoveUp/MoveUp';
import pasteCommand from '../../../units/molecules/DrawingEditor/Extension/Commands/Manipulation/Paste/Paste';
import redoCommand from '../../../units/molecules/DrawingEditor/Extension/Commands/Manipulation/Redo/Redo';
import undoCommand from '../../../units/molecules/DrawingEditor/Extension/Commands/Manipulation/Undo/Undo';

import {
  zoomInCommand,
  zoomOutCommand,
  panCommand,
} from '../../../units/molecules/DrawingEditor/Extension/Commands/Manipulation/ZoomPan/ZoomPan';

export default {
  title: 'VASES-UI/Molecules/DrawingEditor',
  component: DrawingEditor,
};

export const Default = (props: DrawingEditorProps) => {
  return <DrawingEditor {...props}></DrawingEditor>;
};

Default.storyName = 'Default';
// https://picsum.photos/200/300
// https://source.unsplash.com/user/c_v_r/1900x800
Default.args = {
  width: '100%',
  height: '100%',
  imgSrc: 'https://picsum.photos/1900/800',
  booleanOperation: true,
  color: '#ff0000',
  eraserRadius: 20,
  cmds: [
    zoomInCommand,
    zoomOutCommand,
    panCommand,
    activateEraserController,
    activateVertexPathController,
    activateAutoFillPathController,
    activateSelectionController,
    moveToTopCommand,
    moveToBottomCommand,
    moveUpCommand,
    moveDownCommand,
    copyCommand,
    pasteCommand,
    redoCommand,
    undoCommand,
  ],
  commandExcutedHandler: (param: CommandExecutedHandlerParam) => {},
};
