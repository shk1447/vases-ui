import React, { ForwardedRef, forwardRef, memo } from 'react';
import { useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import { OUTER_HANDLER_TYPE } from '../../Interfaces/CommandRegistry';
import { Cmd } from '../../Interfaces/Commands';
import { CanvasImperativeInterface } from '../../Interfaces/UI/Canvas';

import KonvaWrapper from '../../Wrapper/KonvaWrapper';
import StageWrapper from '../../Wrapper/StageWrapper';

export interface CanvasProps {
  cmds: Cmd[];
  onSizeChanged: () => void;
  onCommandExcuted?: (param: any) => void;
}

const Canvas = (
  props: CanvasProps,
  ref: ForwardedRef<CanvasImperativeInterface | undefined>,
): JSX.Element => {
  const container = useRef<HTMLDivElement | null>(null);
  const konvaWrapper = useRef<KonvaWrapper | null>(null);

  const refreshHandlers = useCallback(() => {
    if (props.onCommandExcuted)
      konvaWrapper.current?.stageWrapper?.refreshHandler(
        OUTER_HANDLER_TYPE.COMMAND_EXECUTED,
        props.onCommandExcuted,
      );
  }, [props.onCommandExcuted]);

  useEffect(() => {
    konvaWrapper.current = new KonvaWrapper(
      container.current as HTMLDivElement,
    );
    const myObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        konvaWrapper.current?.stage?.width(entry.contentRect.width);
        konvaWrapper.current?.stage?.height(entry.contentRect.height);
        props.onSizeChanged();
      });
    });
    myObserver.observe(container.current as HTMLDivElement);

    return () => {
      myObserver.disconnect();
      konvaWrapper.current?.destroy();
      konvaWrapper.current = null;
    };
  }, [container]);

  useEffect(() => {
    if (konvaWrapper.current) {
      konvaWrapper.current?.stageWrapper?.commandRegistry?.addCommands(
        props.cmds,
      );
      konvaWrapper.current?.stageWrapper?.currentTool?.deactivate();
      (konvaWrapper.current?.stageWrapper as StageWrapper).currentTool = null;
    }
  }, [props.cmds]);

  useEffect(() => {
    refreshHandlers();
  }, [props.onCommandExcuted]);

  useImperativeHandle(
    ref,
    () => {
      return {
        stageWrapper: () => konvaWrapper.current?.stageWrapper,
      };
    },
    [konvaWrapper.current],
  );
  return (
    <div
      id="my-canvas"
      ref={container}
      style={{
        boxSizing: 'border-box',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      }}
    ></div>
  );
};

export default memo(forwardRef(Canvas));
