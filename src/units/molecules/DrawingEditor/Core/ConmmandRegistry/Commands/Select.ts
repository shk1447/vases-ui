import Konva from 'konva';

import { KonvaEventObject } from 'konva/lib/Node';
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from '../../Interfaces/Commands';
import Shareable from '../Actions/Shareable';
import Undoable from '../Actions/Undoable';

import { notifyManipulationCommandParameter } from './NotifyManipulation';

export type selectShapeCommandParameter = {
  ids: string[];
  isSeperate: boolean;
};
export type selectShapeCommandReturn = Shareable | undefined;

/**
 * << Shareable Command >>
 * 해당 id를 가진 shape들을 선택처리 한다.
 */

let beforeData: Record<any, any>[] = [];
const selectShapeCommand = {
  key: CORE_COMMAND.SELECT_SHAPE,
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<selectShapeCommandParameter>): selectShapeCommandReturn => {
    if (currentController !== 'activate-selection-controller') return;
    const transformLayer = stageWrapper.transformLayer;
    if (!transformLayer) return;
    (
      transformLayer.getChildren(
        (node: Konva.Node) => node.getClassName() === 'Transformer',
      ) as Konva.Transformer[]
    ).forEach((t: Konva.Transformer) => {
      t.nodes().forEach((node: Konva.Node) => {
        node.draggable(false);
        node.setAttr('selected', false);
      });
      t.detach();
      t.off();
      t.destroy();
    });
    if (!param.ids.length) {
      sharedDatum.delete(CORE_COMMAND.SELECT_SHAPE);
      return;
    }

    transformLayer.batchDraw();

    const findResult = param.ids
      .map((id: string) => stageWrapper.getShapeById(id))
      .filter(
        (value: Konva.Node | undefined) => value !== undefined,
      ) as Konva.Node[];
    findResult.forEach((node: Konva.Node) => {
      node.setAttr('selected', true);
      node.draggable(true);
    });
    beforeData = findResult.map((node: Konva.Node) => {
      const data = node.toObject();
      data.attrs.x = node.x();
      data.attrs.y = node.y();
      data.attrs.skewX = node.skewX();
      data.attrs.skewY = node.skewY();
      data.attrs.scaleX = node.scaleX();
      data.attrs.scaleY = node.scaleY();
      data.attrs.rotation = node.rotation();
      return data;
    });
    if (param.isSeperate) {
      findResult.forEach((node: Konva.Node) => {
        transformLayer.add(
          new Konva.Transformer({
            nodes: [node],
            rotateAnchorOffset: 20,
            ignoreStroke: false,
            enabledAnchors: [
              'top-left',
              'top-right',
              'middle-left',
              'middle-right',
              'top-center',
              'bottom-center',
              'bottom-left',
              'bottom-right',
            ],
          }),
        );
      });
    } else {
      const tr = new Konva.Transformer({
        nodes: findResult,
        rotateAnchorOffset: 20,
        ignoreStroke: false,
        enabledAnchors: [
          'top-left',
          'top-right',
          'middle-left',
          'middle-right',
          'top-center',
          'bottom-center',
          'bottom-left',
          'bottom-right',
        ],
      });
      tr.on('dragend', (e: KonvaEventObject<DragEvent>) => {
        const afterData = (e.target as unknown as Konva.Transformer)
          .nodes()
          .map((node: Konva.Node) => {
            const data = node.toObject();
            data.attrs.x = node.x();
            data.attrs.y = node.y();
            data.attrs.skewX = node.skewX();
            data.attrs.skewY = node.skewY();
            data.attrs.scaleX = node.scaleX();
            data.attrs.scaleY = node.scaleY();
            data.attrs.rotation = node.rotation();
            return data;
          });
        stageWrapper.commandRegistry?.execute<notifyManipulationCommandParameter>(
          CORE_COMMAND.NOTIFY_MANIPULATION,
          {
            undoables: [
              new Undoable(CORE_COMMAND.UPDATE_SHAPE, beforeData, afterData),
            ],
          },
        );
        beforeData = afterData;
      });
      tr.on('transformend', (e: KonvaEventObject<any>) => {
        const afterData = (e.currentTarget as unknown as Konva.Transformer)
          .nodes()
          .map((node: Konva.Node) => {
            const data = node.toObject();
            data.attrs.x = node.x();
            data.attrs.y = node.y();
            data.attrs.skewX = node.skewX();
            data.attrs.skewY = node.skewY();
            data.attrs.scaleX = node.scaleX();
            data.attrs.scaleY = node.scaleY();
            data.attrs.rotation = node.rotation();
            return data;
          });
        stageWrapper.commandRegistry?.execute<notifyManipulationCommandParameter>(
          CORE_COMMAND.NOTIFY_MANIPULATION,
          {
            undoables: [
              new Undoable(CORE_COMMAND.UPDATE_SHAPE, beforeData, afterData),
            ],
          },
        );
        beforeData = afterData;
      });
      transformLayer.add(tr);
    }
    transformLayer.batchDraw();
    return new Shareable(findResult.map((node: Konva.Node) => node.toObject()));
  },
} as Cmd;

export default selectShapeCommand;
