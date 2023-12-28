
import { jsx, css } from '@emotion/react'
import React, {
  createContext,
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FlexLayout } from '../../../../atoms/layouts/FlexLayout';
import ConfigManager from '../../Config';
import ControllerSwitch from '../ConmmandRegistry/Actions/ControllerSwitch';
import Redoable from '../ConmmandRegistry/Actions/Redoable';
import Undoable from '../ConmmandRegistry/Actions/Undoable';
import {
  CommandExecutedHandlerParam,
  SharedDatum,
} from '../Interfaces/CommandRegistry';
import { Cmd } from '../Interfaces/Commands';
import { CanvasImperativeInterface } from '../Interfaces/UI/Canvas';

import {
  DrawingEditorProps,
  ICommandContext,
} from '../Interfaces/UI/DrawingEditor';
import { MinimapImperativeInterface } from '../Interfaces/UI/Minimap';
import Canvas from './Canvas/Canvas';
import Minimap from './Minimap/Minimap';
import Toolbar from './Toolbar/Toolbar';
import ToolBarItem from './Toolbar/ToolbarItem';

export const CanvasContext =
  createContext<ICommandContext | undefined>(undefined);

const LabelingTools = (
  { ...props }: DrawingEditorProps,
  ref: ForwardedRef<CanvasImperativeInterface | undefined>,
) => {
  const { imgSrc, width, height, cmds } = props;

  const canvasRef = useRef<CanvasImperativeInterface>();
  const minimapRef = useRef<MinimapImperativeInterface>();

  const [sharedDatum, setSharedDatum] = useState<SharedDatum | null>();
  const [undoList, setUndoList] = useState<Undoable[] | null>([]);
  const [redoList, setRedoList] = useState<Redoable[] | null>([]);
  const [currentController, setCurrentController] =
    useState<string | null>(null);

  useEffect(() => {
    canvasRef.current
      ?.stageWrapper()
      ?.commandRegistry?.execute('activate-selection-controller');

    return () => {
      setSharedDatum(null);
      setUndoList(null);
      setRedoList(null);
      setCurrentController(null);
    };
  }, []);

  useImperativeHandle(ref, () => canvasRef.current, [canvasRef]);

  useEffect(() => {
    ConfigManager.booleanOperation = props.booleanOperation;
  }, [props.booleanOperation]);

  useEffect(() => {
    ConfigManager.color = props.color;
  }, [props.color]);

  useEffect(() => {
    ConfigManager.eraserRadius = props.eraserRadius;
  }, [props.eraserRadius]);

  const ToolbarItems = useMemo(() => {
    return cmds
      .filter((cmd: Cmd) => cmd.toolbar && cmd.toolbar?.icon)
      .map((cmd: Cmd, idx: number) => {
        return <ToolBarItem command={cmd} key={`toolbarItem${idx}`} />;
      });
  }, [cmds]);

  const onCommandExcutedHandler = useCallback(
    ({
      key,
      result,
      sharedDatum,
      undoList,
      redoList,
      currentController,
    }: CommandExecutedHandlerParam) => {
      if (props.commandExcutedHandler) {
        props.commandExcutedHandler({
          key,
          result,
          sharedDatum,
          undoList,
          redoList,
          currentController,
        });
      }
      console.log(
        '%c ----------------------------------------',
        'background: #091C4C; color: #ffffff',
      );
      console.log('KEY : ', key);
      console.log('RESULT : ', result);
      console.log('SHAREABLE : ', sharedDatum);
      console.log('UNDO LIST :', undoList);
      console.log('REDO LIST : ', redoList);
      console.log(
        '%c ----------------------------------------',
        'background: #091C4C; color: #ffffff',
      );
      console.log('\n');

      setSharedDatum(sharedDatum);
      setUndoList(undoList);
      setRedoList(redoList);
      setCurrentController(result instanceof ControllerSwitch ? key : null);

      minimapRef.current?.minimapWrapper()?.viewBoxUpdate({
        scale: canvasRef.current?.stageWrapper()?.currentLayer?.scale(),
        pos: canvasRef.current?.stageWrapper()?.currentLayer?.getPosition(),
      });
    },
    [props.commandExcutedHandler],
  );

  const sizeChangedHandler = useCallback(() => {
    canvasRef.current?.stageWrapper()?.importImageFromURL(imgSrc);
    if (minimapRef.current) {
      minimapRef.current.fullMapSizeChange();
      minimapRef.current.minimapWrapper()?.MinimapSetUp(imgSrc);
    }
  }, []);
  return (
    <CanvasContext.Provider
      value={{
        canvas: canvasRef,
        sharedDatum: sharedDatum as SharedDatum,
        undoList: undoList as Undoable[],
        redoList: redoList as Redoable[],
        currentController: currentController as string,
      }}
    >
      <FlexLayout
        direction="column"
        gap={0}
        css={css`
          width: ${width};
          height: ${height};
        `}
      >
        {props.cmds.length > 0 && (
          <Toolbar align="horizontal" itemComponent={ToolbarItems}></Toolbar>
        )}
        <Canvas
          ref={canvasRef}
          onCommandExcuted={onCommandExcutedHandler}
          cmds={props.cmds}
          onSizeChanged={sizeChangedHandler}
        />
        <Minimap ref={minimapRef} ratio={{ height: 4, width: 4 }} />
      </FlexLayout>
    </CanvasContext.Provider>
  );
};

export default forwardRef(LabelingTools);
