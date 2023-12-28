import undo from './undo.svg';
import Konva from 'konva';
import { v4 as uuidv4 } from 'uuid';
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from '../../../../Core/Interfaces/Commands';
import { selectShapeCommandParameter } from '../../../../Core/ConmmandRegistry/Commands/Select';
import SVGIcon from '../../../../Core/Utils/SVGIcon';
import { CommandRegistryPassPrameter } from '../../../../Core/Interfaces/CommandRegistry';
import Redoable from '../../../../Core/ConmmandRegistry/Actions/Redoable';
import Undoable from '../../../../Core/ConmmandRegistry/Actions/Undoable';

/**
 * 가장 최근에 실행했던 커맨드를 되돌리는 커맨드
 */
export type undoCommandParam = undefined;
export type undoCommandReturn = Redoable | Redoable[] | undefined;

const undoCommand = {
  key: 'undo',
  shortCut: {
    ctrlKey: true,
    key: 'z',
  },
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<undoCommandParam>): undoCommandReturn => {
    function undo(rollbackData: Record<any, any>) {
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
      // Remove의 undo
      else if (rollbackData.before !== null && rollbackData.after === null) {
        const datum = rollbackData.before as Record<any, any>[];

        datum.forEach(data => {
          const node = Konva.Node.create(data);
          const shape = data as Konva.Shape;
          node.setAttr('selected', false);
          stageWrapper.currentLayer?.add(node);
        });
      }
      // Update의 undo
      else if (rollbackData.before !== null && rollbackData.after !== null) {
        // 두 개의 개수가 같으면 1:1 속성 업데이트
        if (rollbackData.before.length === rollbackData.after.length) {
          const datum = rollbackData.before as Record<any, any>[];
          datum.forEach(data => {
            const id = data.attrs.id as string;
            const uptShape = stageWrapper.getShapeById(id);
            if (uptShape) {
              uptShape.setAttrs(data);
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
            datum.forEach(data => {
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
    const rollbackData = undoList.pop();
    if (rollbackData) {
      if (Array.isArray(rollbackData)) {
        rollbackData.forEach((action: Redoable | Undoable) => {
          undo(action);
        });
        return rollbackData.map((action: Redoable | Undoable) => {
          return new Redoable('undo', action.after, action.before);
        });
      } else {
        undo(rollbackData);
        return new Redoable('undo', rollbackData.after, rollbackData.before);
      }
    }
    return;
  },
  toolbar: {
    icon: SVGIcon({ iconSrc: undo }),
  },
  condition: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => {
    return undoList.length > 0;
  },
} as Cmd;

export default undoCommand;
