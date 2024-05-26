import Konva from "konva";
import { v4 as uuidv4 } from "uuid";
import Redoable from "../../../../Core/ConmmandRegistry/Actions/Redoable";
import Undoable from "../../../../Core/ConmmandRegistry/Actions/Undoable";
import { selectShapeCommandParameter } from "../../../../Core/ConmmandRegistry/Commands/Select";
import { CommandRegistryPassPrameter } from "../../../../Core/Interfaces/CommandRegistry";
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from "../../../../Core/Interfaces/Commands";
import keyChecker from "../../../Utils/keyChecker";

/**
 * 가장 최근에 실행했던 커맨드를 되돌리는 커맨드
 */
export type undoCommandParam = undefined;
export type undoCommandReturn = Redoable | Redoable[] | undefined;

const undoCommand = {
  key: "undo",
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<undoCommandParam>): undoCommandReturn => {
    stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
      CORE_COMMAND.SELECT_SHAPE,
      {
        ids: [],
        isSeperate: false,
      }
    );
    function undo(rollbackData: Record<any, any>) {
      if (rollbackData.before === null && rollbackData.after !== null) {
        const datum = rollbackData.after as Record<any, any>[];
        datum.forEach((data) => {
          const id = data.attrs.id as string;

          const removeShape = stageWrapper.getShapeById(id);

          if (removeShape) {
            removeShape.destroy();
          }
        });
        // stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
        //   CORE_COMMAND.SELECT_SHAPE,
        //   {
        //     ids: stageWrapper
        //       .getSelectedShapes()
        //       .map((node: Konva.Node) => node.id()),
        //     isSeperate: false,
        //   }
        // );
      }
      // Remove의 undo
      else if (rollbackData.before !== null && rollbackData.after === null) {
        const datum = rollbackData.before as Record<any, any>[];

        datum.forEach((data) => {
          const node = Konva.Node.create(data);
          // const shape = data as Konva.Shape;
          node.setAttr("selected", false);
          // node.hide();
          stageWrapper.currentLayer?.add(node);
        });
      }
      // Update의 undo
      else if (rollbackData.before !== null && rollbackData.after !== null) {
        // 두 개의 개수가 같으면 1:1 속성 업데이트
        if (rollbackData.before.length === rollbackData.after.length) {
          const datum = rollbackData.before as Record<any, any>[];
          datum.forEach((data) => {
            const id = data.attrs.id as string;
            const uptShape = stageWrapper.getShapeById(id);
            if (uptShape) {
              uptShape.setAttrs(data);
              // uptShape.hide();
            }
          });
        } else {
          // ungroup의 undo
          if (rollbackData.before < rollbackData.after) {
            const datum = rollbackData.after as Record<any, any>[];
            const newGroupID = uuidv4();
            const group = new Konva.Group({
              id: newGroupID,
            });
            datum.forEach((data) => {
              const id = data.attrs.id as string;
              const uptShape = stageWrapper.getShapeById(id);
              if (uptShape) {
                group.add(uptShape as Konva.Shape);
                stageWrapper.currentLayer?.add(group);
              }
            });
            stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
              CORE_COMMAND.SELECT_SHAPE,
              {
                ids: [newGroupID],
                isSeperate: false,
              }
            );
          } else {
            // group의 undo
            const datum = rollbackData.after as Record<any, any>[];

            datum.forEach((data) => {
              const id = data.attrs.id as string;
              const uptShape = stageWrapper.getShapeById(id);
              uptShape?.setAttr("selected", false);

              if (uptShape) {
                stageWrapper.currentLayer?.add(
                  ...(uptShape as Konva.Group).getChildren()
                );
                uptShape.destroy();
              }
            });
            stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
              CORE_COMMAND.SELECT_SHAPE,
              {
                ids: rollbackData.before.map(
                  (value: Record<any, any>) => value.attrs.id
                ),
                isSeperate: false,
              }
            );
          }
        }
      }
    }
    const rollbackData = undoList.pop();
    if (rollbackData) {
      if (Array.isArray(rollbackData)) {
        rollbackData.forEach((action: Redoable | Undoable) => {
          undo(action);
        });
        return rollbackData.map((action: Redoable | Undoable) => {
          return new Redoable("undo", action.after, action.before);
        });
      } else {
        undo(rollbackData);
        return new Redoable("undo", rollbackData.after, rollbackData.before);
      }
    }
    return;
  },

  condition: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => {
    return undoList.length > 0;
  },
  events: [
    {
      type: "keydown",
      condition: (event: Event) => {
        const { key } = event as KeyboardEvent;
        return (
          key === "z" && keyChecker({ ctrlKey: true }, event as KeyboardEvent)
        );
      },
    },
  ],
} as Cmd;

export default undoCommand;
