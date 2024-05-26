import { TransformerConfig } from "konva/lib/shapes/Transformer";
import React, { ForwardedRef, forwardRef, memo, useState } from "react";
import { useCallback, useEffect, useImperativeHandle, useRef } from "react";
import { OUTER_HANDLER_TYPE } from "../../Interfaces/CommandRegistry";
import { Cmd } from "../../Interfaces/Commands";
import { CanvasImperativeInterface } from "../../Interfaces/UI/Canvas";
import NoImage from "../../Interfaces/UI/NoImage/NoImage";

import KonvaWrapper from "../../Wrapper/KonvaWrapper";
import StageWrapper from "../../Wrapper/StageWrapper";

const equals = (a: string[], b: string[]) =>
  a.length === b.length && a.every((v, i) => v === b[i]);
export interface CanvasProps {
  cmds: Cmd[];
  onCommandExcuted?: (param: any) => void;
  onBackgroundImageLoaded?: () => void;
  transformderStyle?: TransformerConfig;
  srcs?: string[];
  minimap?: boolean;
  fitImage?: boolean;
}

const Canvas = (
  props: CanvasProps,
  ref: ForwardedRef<CanvasImperativeInterface | undefined>
): JSX.Element => {
  const container = useRef<HTMLDivElement | null>(null);
  const konvaWrapper = useRef<KonvaWrapper | null>(null);

  useEffect(() => {
    return () => {
      konvaWrapper.current?.destroy();
      konvaWrapper.current = null;
    };
  }, []);
  useEffect(() => {
    if (!container.current) return;

    konvaWrapper.current = new KonvaWrapper(
      container.current as HTMLDivElement
    );

    /** Canvas Resize Observer */
    const myObserver = new ResizeObserver((entries) => {
      if (!props.fitImage) {
        konvaWrapper.current?.stageWrapper
          ?.importImageFromURL(konvaWrapper.current.stageWrapper.srcs)
          .then((d: boolean) => {
            const handler =
              konvaWrapper.current?.stageWrapper?.outerHandlers?.get(
                OUTER_HANDLER_TYPE.BACKGROUND_IMAGE_LOADED
              );

            handler && handler();
            setIsLoadImageError(false);
            // minimap update
          })
          .catch(() => {
            setIsLoadImageError(true);

            konvaWrapper.current?.stageWrapper?.backgroundImageLayer?.destroyChildren();
            konvaWrapper.current?.stageWrapper?.currentLayer?.destroyChildren();
          });
      } else {
        konvaWrapper.current?.stageWrapper
          ?.importFitImageFromURL(konvaWrapper.current.stageWrapper.srcs)
          .then((d: boolean) => {
            const handler =
              konvaWrapper.current?.stageWrapper?.outerHandlers?.get(
                OUTER_HANDLER_TYPE.BACKGROUND_IMAGE_LOADED
              );

            handler && handler();
            setIsLoadImageError(false);
            // minimap update
          })
          .catch(() => {
            setIsLoadImageError(true);

            konvaWrapper.current?.stageWrapper?.backgroundImageLayer?.destroyChildren();
            konvaWrapper.current?.stageWrapper?.currentLayer?.destroyChildren();
          });
      }
    });
    myObserver.observe(container.current as HTMLDivElement);

    return () => {
      myObserver.disconnect();
      konvaWrapper.current?.destroy();
      konvaWrapper.current = null;
    };
  }, [container, props.fitImage]);

  useEffect(() => {
    // apply transformer custom style
    if (konvaWrapper.current?.stageWrapper && props.transformderStyle) {
      konvaWrapper.current.stageWrapper.transformerStyle =
        props.transformderStyle;
    }
  }, [props.transformderStyle, konvaWrapper.current]);

  const [cmds, setCmds] = useState<Cmd[]>(props.cmds);

  useEffect(() => {
    /** Background Image Load by srcs */
    // konvaWrapper.current?.stageWrapper?.commandRegistry?.clearCommand();
    // konvaWrapper.current?.stageWrapper?.commandRegistry?.addCommands(cmds);

    if (
      equals(
        props.srcs as string[],
        konvaWrapper.current?.stageWrapper?.srcs as string[]
      )
    )
      return;

    konvaWrapper.current?.stageWrapper?.commandRegistry?.clearUndoRedoList();
    if (props.srcs && props.srcs.length) {
      if (!props.fitImage) {
        konvaWrapper.current?.stageWrapper
          ?.importImageFromURL(props.srcs)
          .then((d: boolean) => {
            const handler =
              konvaWrapper.current?.stageWrapper?.outerHandlers?.get(
                OUTER_HANDLER_TYPE.BACKGROUND_IMAGE_LOADED
              );

            handler && handler();
            setIsLoadImageError(false);
            // minimap update
          })
          .catch((e: any) => {
            setIsLoadImageError(true);

            konvaWrapper.current?.stageWrapper?.backgroundImageLayer?.destroyChildren();
            konvaWrapper.current?.stageWrapper?.currentLayer?.destroyChildren();
          });
      } else {
        konvaWrapper.current?.stageWrapper
          ?.importFitImageFromURL(props.srcs)
          .then((d: boolean) => {
            const handler =
              konvaWrapper.current?.stageWrapper?.outerHandlers?.get(
                OUTER_HANDLER_TYPE.BACKGROUND_IMAGE_LOADED
              );

            handler && handler();
            setIsLoadImageError(false);
            // minimap update
          })
          .catch((e: any) => {
            setIsLoadImageError(true);

            konvaWrapper.current?.stageWrapper?.backgroundImageLayer?.destroyChildren();
            konvaWrapper.current?.stageWrapper?.currentLayer?.destroyChildren();
          });
      }
    }
  }, [props.srcs, props.fitImage]);

  useEffect(() => {
    // add commands to core (command registry)
    if (konvaWrapper.current) {
      // setCmds(props.cmds);
      konvaWrapper.current?.stageWrapper?.commandRegistry?.clearCommand();
      konvaWrapper.current?.stageWrapper?.commandRegistry?.addCommands(
        props.cmds
      );
    }
  }, [props.cmds, konvaWrapper.current]);

  const refreshHandlers = useCallback(() => {
    if (props.onCommandExcuted)
      konvaWrapper.current?.stageWrapper?.refreshHandler(
        OUTER_HANDLER_TYPE.COMMAND_EXECUTED,
        props.onCommandExcuted
      );
    if (props.onBackgroundImageLoaded) {
      konvaWrapper.current?.stageWrapper?.refreshHandler(
        OUTER_HANDLER_TYPE.BACKGROUND_IMAGE_LOADED,
        props.onBackgroundImageLoaded
      );
    }
  }, [props.onCommandExcuted, props.onBackgroundImageLoaded]);

  useEffect(() => {
    // trace memory address of onCommandExecuted, onBackgroundImageLoaded funtions
    refreshHandlers();
  }, [props.onCommandExcuted, props.onBackgroundImageLoaded, refreshHandlers]);

  useImperativeHandle(
    ref,
    () => {
      return {
        stageWrapper: () => konvaWrapper.current?.stageWrapper,
      };
    },
    [ref, konvaWrapper.current]
  );

  const [isLoadImageError, setIsLoadImageError] = useState<boolean>(false);

  return (
    <>
      <div
        id="my-canvas"
        ref={container}
        style={{
          boxSizing: "border-box",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          outline: "none",
        }}
        tabIndex={-1}
      />

      {isLoadImageError && <NoImage />}
    </>
  );
};

export default forwardRef(Canvas);
