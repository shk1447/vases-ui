import { css } from "@emotion/css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CommandExecutedHandlerParam } from "../Core/Interfaces/CommandRegistry";
import { DrawingEditorProps } from "../Core/Interfaces/UI/DrawingEditor";
import DrawingEditor from "../Core/UI/DrawingEditor";
import activateEraserController from "../Extension/Commands/Activation/Eraser/ActivateEraserController";
import activateAutoFillPathController from "../Extension/Commands/Activation/Path/ActivateAutoFillPathController";
import activateSelectionController from "../Extension/Commands/Activation/Selection/ActivateSelectionController";
import activateVertexPathController from "../Extension/Commands/Activation/Vertex/ActivateVertexPathController";

import copyCommand from "../Extension/Commands/Manipulation/Copy/Copy";
import moveDownCommand from "../Extension/Commands/Manipulation/MoveDown/MoveDown";
import moveToBottomCommand from "../Extension/Commands/Manipulation/MoveToBottom/MoveToBottom";
import moveToTopCommand from "../Extension/Commands/Manipulation/MoveToTop/MoveToTop";
import moveUpCommand from "../Extension/Commands/Manipulation/MoveUp/MoveUp";
import pasteCommand from "../Extension/Commands/Manipulation/Paste/Paste";
import redoCommand from "../Extension/Commands/Manipulation/Redo/Redo";
import undoCommand from "../Extension/Commands/Manipulation/Undo/Undo";
import {
  zoomInCommand,
  zoomOutCommand,
  panCommand,
} from "../Extension/Commands/Manipulation/ZoomPan/ZoomPan";
import { ReactComponent as SelectionIcon } from "./svg/select.svg";
import { ReactComponent as EraserIcon } from "./svg/eraser.svg";
import { ReactComponent as PencilIcon } from "./svg/pencil.svg";
import { ReactComponent as CopyIcon } from "./svg/copy.svg";
import { ReactComponent as PasteIcon } from "./svg/paste.svg";
import { ReactComponent as CutIcon } from "./svg/cut.svg";
import { ReactComponent as RedoIcon } from "./svg/redo.svg";
import { ReactComponent as UndoIcon } from "./svg/undo.svg";
import { ReactComponent as ZoomInIcon } from "./svg/zoom-in.svg";
import { ReactComponent as ZoomoutIcon } from "./svg/zoom-out.svg";
import { ReactComponent as MoveFrontIcon } from "./svg/move_front.svg";
import { ReactComponent as MoveBackIcon } from "./svg/move_back.svg";
import { ReactComponent as ForwardIcon } from "./svg/move_forward.svg";
import { ReactComponent as BackwardIcon } from "./svg/move_backward.svg";
import { ReactComponent as BrushIcon } from "./svg/brush.svg";

import { styled } from "@mui/material/styles";
import { CanvasImperativeInterface } from "../Core/Interfaces/UI/Canvas";
import { IconButton } from "@mui/material";
import activateBrushController from "../Extension/Commands/Activation/Brush/ActivateBrushController";

export default {
  title: "Vases-UI/organisms/DrawingEditor",
  component: DrawingEditor,
  parameters: {
    docs: {
      description: {
        component: `Drawing Editor 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
};
const IconContainer = styled("div")(({ theme }) => ({
  width: "20px",
  height: "20px",
  padding: "5px",
  cursor: "pointer",
}));
export const Default = (props: DrawingEditorProps) => {
  const ref = useRef<CanvasImperativeInterface>();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [redoable, setRedoable] = useState<boolean>(false);
  const [undoable, setUndoable] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        width: props.width,
        height: props.height,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0px",
          width: "100%",
          alignItems: "center",
          backgroundColor: "#535353",
        }}
      >
        <IconContainer>
          <SelectionIcon
            onClick={() => {
              ref.current &&
                ref.current
                  .stageWrapper()
                  ?.commandRegistry?.execute("activate-selection-controller");
            }}
          />
        </IconContainer>
        <IconContainer>
          <PencilIcon
            onClick={() => {
              ref.current &&
                ref.current
                  .stageWrapper()
                  ?.commandRegistry?.execute(
                    "activate-auto-fill-path-controller"
                  );
            }}
          />
        </IconContainer>
        <IconContainer>
          <EraserIcon
            onClick={() => {
              ref.current &&
                ref.current
                  .stageWrapper()
                  ?.commandRegistry?.execute("activate-eraser-controller");
            }}
          />
        </IconContainer>

        <IconContainer>
          <CopyIcon
            onClick={() => {
              if (!isSelected) return;
              ref.current &&
                ref.current.stageWrapper()?.commandRegistry?.execute("copy");
            }}
          />
        </IconContainer>
        <IconContainer>
          <PasteIcon
            onClick={() => {
              if (!isCopied) return;

              ref.current &&
                ref.current.stageWrapper()?.commandRegistry?.execute("paste");
            }}
          />
        </IconContainer>
        {/* <IconContainer>
          <CutIcon
            onClick={() => {
              if (!isSelected) return;

              ref.current &&
                ref.current.stageWrapper()?.commandRegistry?.execute("cut");
            }}
          />
        </IconContainer> */}
        <IconContainer>
          <UndoIcon
            onClick={() => {
              if (!undoable) return;

              ref.current &&
                ref.current.stageWrapper()?.commandRegistry?.execute("undo");
            }}
          />
        </IconContainer>
        <IconContainer>
          <RedoIcon
            onClick={() => {
              if (!redoable) return;

              ref.current &&
                ref.current.stageWrapper()?.commandRegistry?.execute("redo");
            }}
          />
        </IconContainer>
        <IconContainer>
          <ZoomInIcon
            onClick={() => {
              ref.current &&
                ref.current.stageWrapper()?.commandRegistry?.execute("zoom-in");
            }}
          />
        </IconContainer>
        <IconContainer>
          <ZoomoutIcon
            onClick={() => {
              ref.current &&
                ref.current
                  .stageWrapper()
                  ?.commandRegistry?.execute("zoom-out");
            }}
          />
        </IconContainer>
        <IconContainer>
          <MoveFrontIcon
            onClick={() => {
              if (!isSelected) return;

              ref.current &&
                ref.current
                  .stageWrapper()
                  ?.commandRegistry?.execute("move-to-top");
            }}
          />
        </IconContainer>
        <IconContainer>
          <MoveBackIcon
            onClick={() => {
              if (!isSelected) return;

              ref.current &&
                ref.current
                  .stageWrapper()
                  ?.commandRegistry?.execute("move-to-bottom");
            }}
          />
        </IconContainer>
        <IconContainer>
          <ForwardIcon
            onClick={() => {
              if (!isSelected) return;

              ref.current &&
                ref.current.stageWrapper()?.commandRegistry?.execute("move-up");
            }}
          />
        </IconContainer>
        <IconContainer>
          <BackwardIcon
            onClick={() => {
              ref.current &&
                ref.current
                  .stageWrapper()
                  ?.commandRegistry?.execute("activate-brush-controller");
            }}
          />
        </IconContainer>
      </div>
      <DrawingEditor
        {...props}
        ref={ref}
        commandExcutedHandler={(param: CommandExecutedHandlerParam) => {
          setIsSelected(param.sharedDatum.has("select-shape") ? true : false);
          setRedoable(param.redoList.length > 0 ? true : false);
          setUndoable(param.undoList.length > 0 ? true : false);
          setIsCopied(param.sharedDatum.has("copy") ? true : false);
        }}
      ></DrawingEditor>
    </div>
  );
};

Default.storyName = "Default";

// https://picsum.photos/200/300
// https://source.unsplash.com/user/c_v_r/1900x800
Default.args = {
  width: "100%",
  height: "100vh",
  srcs: ["https://picsum.photos/1900/800"],
  booleanOperation: true,
  color: "#ff0000",
  eraserRadius: 20,
  minimap: true,
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
    activateBrushController,
  ],
  commandExcutedHandler: (param: CommandExecutedHandlerParam) => {
    console.log(param);
  },
};

// enum ActionType {
//   ROI_RECT,
//   ROI_ELLIPTICAL,
//   BLIND_RECT,
//   BLIND_ELLIPTICAL,
//   SELECT_MODE,
//   DELETE,
// }
// export const ROI = (props: DrawingEditorProps) => {
//   const ref = useRef<CanvasImperativeInterface>();
//   const div = useRef<HTMLDivElement>(null);
//   const onClickHandler = useCallback(
//     (type: ActionType) => {
//       if (!ref.current) return;
//       if (type === ActionType.ROI_RECT) {
//         ref.current
//           .stageWrapper()
//           ?.commandRegistry?.execute("generate-roi-rectangle");
//       } else if (type === ActionType.ROI_ELLIPTICAL) {
//         ref.current
//           .stageWrapper()
//           ?.commandRegistry?.execute("generate-roi-elliptical");
//       } else if (type === ActionType.BLIND_RECT) {
//         // rect drawing tool activation
//         ref.current
//           .stageWrapper()
//           ?.commandRegistry?.execute("activate-rectangle-controller");
//       } else if (type === ActionType.BLIND_ELLIPTICAL) {
//         // rect drawing tool activation
//         ref.current
//           .stageWrapper()
//           ?.commandRegistry?.execute("activate-elliptical-controller");
//       } else if (type === ActionType.SELECT_MODE) {
//         // selection tool activation
//         ref.current
//           .stageWrapper()
//           ?.commandRegistry?.execute("activate-selection-controller");
//       } else {
//         // 선택된 것 삭제
//         const selected = ref.current.stageWrapper()?.getSelectedShapes();
//         if (selected) {
//           ref.current
//             .stageWrapper()
//             ?.commandRegistry?.execute<removeShapeCommandParameter>(
//               CORE_COMMAND.REMOVE_SHAPE,
//               {
//                 ids: selected?.map((node: Konva.Node) => node.id()),
//               }
//             );
//           ref.current
//             .stageWrapper()
//             ?.commandRegistry?.execute<selectShapeCommandParameter>(
//               CORE_COMMAND.SELECT_SHAPE,
//               {
//                 ids: [],
//                 isSeperate: false,
//               }
//             );
//         }
//       }
//     },
//     [ref, props]
//   );
//   return (
//     <div
//       ref={div}
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "0px",
//         width: props.width,
//         height: props.height,
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           gap: "10px",
//           width: "100%",
//           alignItems: "center",
//         }}
//       >
//         <Button
//           variant="tertiary"
//           onClick={() => onClickHandler(ActionType.ROI_RECT)}
//         >
//           Set Rect ROI
//         </Button>
//         <Button
//           variant="tertiary"
//           onClick={() => onClickHandler(ActionType.ROI_ELLIPTICAL)}
//         >
//           Set Elliptical ROI
//         </Button>
//         <Button
//           variant="tertiary"
//           onClick={() => onClickHandler(ActionType.BLIND_RECT)}
//         >
//           Set Rect Blind
//         </Button>
//         <Button
//           variant="tertiary"
//           onClick={() => onClickHandler(ActionType.BLIND_ELLIPTICAL)}
//         >
//           Set Elliptical Blind
//         </Button>
//         <Button
//           variant="tertiary"
//           onClick={() => onClickHandler(ActionType.SELECT_MODE)}
//         >
//           Select
//         </Button>
//         <Button
//           variant="tertiary"
//           onClick={() => onClickHandler(ActionType.DELETE)}
//         >
//           Delete
//         </Button>
//       </div>
//       <DrawingEditor {...props} ref={ref}></DrawingEditor>
//     </div>
//   );
// };

// ROI.args = {
//   width: "100%",
//   height: "100vh",
//   imgSrc: "https://picsum.photos/1900/800",
//   booleanOperation: true,
//   color: "#ff0000",
//   eraserRadius: 20,
//   cmds: [
//     activateSelectionController,
//     generateROIRectangle,
//     generateROIElliptical,
//     activateEllipticalController,
//     activateRectangleController,
//     copyCommand,
//     pasteCommand,
//     redoCommand,
//     undoCommand,
//   ],
//   commandExcutedHandler: (param: CommandExecutedHandlerParam) => {
//     console.log(param);
//   },
//   transformerStyle: {
//     rotateAnchorOffset: 20,
//     ignoreStroke: false,
//     anchorStroke: primary[100],
//     anchorFill: primary[100],
//     borderStroke: primary[100],
//     borderDash: [3, 3],
//     enabledAnchors: ["top-left", "top-right", "bottom-left", "bottom-right"],
//     rotateEnabled: false,
//     // centeredScaling: true,
//   },
// };
