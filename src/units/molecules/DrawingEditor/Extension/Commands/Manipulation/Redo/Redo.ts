import Konva from 'konva';
import { v4 as uuidv4 } from 'uuid';
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from '../../../../Core/Interfaces/Commands';
import { selectShapeCommandParameter } from '../../../../Core/ConmmandRegistry/Commands/Select';
import SVGIcon from '../../../../Core/Utils/SVGIcon';
import redo from './redo.svg';
import { CommandRegistryPassPrameter } from '../../../../Core/Interfaces/CommandRegistry';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';
import Redoable from '../../../../Core/ConmmandRegistry/Actions/Redoable';

/**
 * 가장 최근에 되돌렸던 것을 원상복구하는 커맨드
 */
export type redoCommandParam = undefined;
export type redoCommandReturn = Undoable | Undoable[] | undefined;

const redoCommand = {
  key: 'redo',
  shortCut: {
    ctrlKey: true,
    key: 'r',
  },
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<redoCommandParam>): redoCommandReturn => {
    function redo(rollbackData: Record<any, any>) {
      // Create의 redo
      if (rollbackData.before === null && rollbackData.after !== null) {
        const datum = rollbackData.after as Record<any, any>[];

        datum.forEach(data => {
          const id = data.attrs.id as string;

          const removeShape = stageWrapper.getShapeById(id);

          if (removeShape) {
            removeShape.destroy();
          }
        });
        stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
          CORE_COMMAND.SELECT_SHAPE,
          {
            ids: stageWrapper
              .getSelectedShapes()
              .map((node: Konva.Node) => node.id()),
            isSeperate: true,
          },
        );
      }
      // Remove의 redo
      else if (rollbackData.before !== null && rollbackData.after === null) {
        const datum = rollbackData.before as Record<any, any>[];

        datum.forEach(data => {
          const node = Konva.Node.create(data);
          node.setAttr('selected', false);
          stageWrapper.currentLayer?.add(node);
        });
        stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
          CORE_COMMAND.SELECT_SHAPE,
          {
            ids: datum.map((d: any) => d.attrs.id),
            isSeperate: false,
          },
        );
      }
      // Update
      else if (rollbackData.before !== null && rollbackData.after !== null) {
        // 두 개의 개수가 같으면 1:1 속성 업데이트

        if (rollbackData.before.length === rollbackData.after.length) {
          const datum = rollbackData.before as Record<any, any>[];

          datum.forEach(data => {
            const id = data.attrs.id as string;

            const uptShape = stageWrapper.getShapeById(id);

            if (uptShape) {
              uptShape.setAttrs(data);
              uptShape.setAttr('selected', false);
            }
          });
        } else {
          if (rollbackData.before < rollbackData.after) {
            const datum = rollbackData.after as Record<any, any>[];
            const newGroupID = uuidv4();
            const group = new Konva.Group({
              id: newGroupID,
            });
            datum.forEach(data => {
              const id = data.attrs.id as string;
              const uptShape = stageWrapper.getShapeById(id);
              uptShape?.setAttr('selected', false);

              if (uptShape) {
                group.add(uptShape as Konva.Shape);
                stageWrapper.currentLayer?.add(group);
              }
            });
            stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
              CORE_COMMAND.SELECT_SHAPE,
              {
                ids: [newGroupID],
                isSeperate: true,
              },
            );
          } else {
            // group의 undo
            const datum = rollbackData.after as Record<any, any>[];

            datum.forEach(data => {
              const id = data.attrs.id as string;
              const uptShape = stageWrapper.getShapeById(id);
              uptShape?.setAttr('selected', false);

              if (uptShape) {
                stageWrapper.currentLayer?.add(
                  ...(uptShape as Konva.Group).getChildren(),
                );
                uptShape.destroy();
              }
            });
            stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
              CORE_COMMAND.SELECT_SHAPE,
              {
                ids: rollbackData.before.map(
                  (value: Record<any, any>) => value.attrs.id,
                ),
                isSeperate: true,
              },
            );
          }
        }
      }
    }
    const rollbackData = redoList.pop();

    if (rollbackData) {
      if (Array.isArray(rollbackData)) {
        rollbackData.forEach((action: Redoable | Undoable) => {
          redo(action);
        });

        return rollbackData.map((action: Redoable | Undoable) => {
          return new Undoable('redo', action.after, action.before, false);
        });
      } else {
        redo(rollbackData);

        return new Undoable(
          'redo',
          rollbackData.after,
          rollbackData.before,
          false,
        );
      }
    } else {
      return;
    }
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: redo }),
  },
  condition: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => {
    return redoList.length > 0;
  },
} as Cmd;

export default redoCommand;
