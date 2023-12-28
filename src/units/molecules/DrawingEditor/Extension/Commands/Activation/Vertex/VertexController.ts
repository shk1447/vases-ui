import Konva from 'konva';
import { Group } from 'konva/lib/Group';
import { KonvaEventObject } from 'konva/lib/Node';
import { Circle } from 'konva/lib/shapes/Circle';
import { Line } from 'konva/lib/shapes/Line';
import { v4 as uuidv4 } from 'uuid';
import { Vector2d } from 'konva/lib/types';
import BaseAbsctractController from '../../../../Core/BaseAbsctractController';

import { createShapeCommandParameter } from '../../../../Core/ConmmandRegistry/Commands/Create';

import { CORE_COMMAND } from '../../../../Core/Interfaces/Commands';
import StageWrapper from '../../../../Core/Wrapper/StageWrapper';
import { Path } from 'konva/lib/shapes/Path';
import ConfigManager from '../../../../Config';

export default class VertextController extends BaseAbsctractController {
  private _isPolygonEnd: boolean = false;
  private _vertexRadius: number = 6;
  private _points: Array<Vector2d> | null = null;

  private _group: Group | null = null;
  private _circles: Circle[] | null = [];
  private _lines: Line | null = null;

  constructor(stageWrapper: StageWrapper) {
    super(stageWrapper);
    this._name = 'vertex';
  }

  get points() {
    return this._points;
  }

  stageMouseinFunction(): void {}
  stageMouseoutFunction(): void {}

  activateFunction(): void {
    this.clear();
  }

  deactivateFunction(): void {
    this._lines?.destroy();
    this._group?.destroy();
    this._lines = null;
    this._group = null;
    this._circles = null;
    this._points = null;
  }

  clear() {
    this._group?.destroy();
    this._circles = [];
    this._points = [];

    this._group = new Group({
      id: uuidv4(),
    });
    this._lines = new Line({
      stroke: '#b71c1c',
      strokeWidth: 3,
      fill: 'rgb(255,0,0)',
      opacity: 0.5,
    });
    this._group.add(this._lines);
    this._stageWrapper?.currentLayer?.add(this._group);

    this._isPolygonEnd = false;
  }

  mousedownFunction(e: KonvaEventObject<MouseEvent>): void {
    // 0 = leftMouseClick
    if (e.evt.button !== 0) return;

    const { x, y } =
      this._stageWrapper?.currentLayer?.getRelativePointerPosition() as Vector2d;

    if (
      e.target.id() === '0' &&
      this._circles &&
      this._circles?.length > 2 &&
      this.points
    ) {
      this._circles[0].scale({ x: 1, y: 1 });
      this._isPolygonEnd = true;
      this._lines?.closed(true);

      const newPath = new Path({
        id: uuidv4(),
        data: `M${this.points[0].x} ${this.points[0].y}`,
        x: 0,
        y: 0,
        stroke: ConfigManager.color,
        fill: ConfigManager.color,
        strokeWidth: 1,
        opacity: 0.5,
      });

      let addPath = newPath.data();
      this.points.forEach(point => {
        addPath += `L ${point.x} ${point.y}`;
      });
      newPath.data(addPath + ' Z');

      this.clear();

      this._stageWrapper?.commandRegistry?.execute<createShapeCommandParameter>(
        CORE_COMMAND.CREATE_SHAPE,
        {
          nodes: [newPath],
        },
      );
    } else {
      this.points?.push({ x, y });

      const circle = new Circle({
        id: this._circles?.length.toString(),
        x: x,
        y: y,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 3,
        draggable: true,
        radius: this._vertexRadius,
      });

      this._circles?.push(circle);
      this._group?.add(circle);
    }
  }
  mousemoveFunction(e: KonvaEventObject<MouseEvent>): void {
    if (!this._isPolygonEnd) {
      const { x, y } =
        this._stageWrapper?.currentLayer?.getRelativePointerPosition() as Vector2d;

      const arrayPoints = this.points?.map((obj: Konva.Vector2d, idx) => {
        return Object.values(obj);
      });

      arrayPoints?.push([x, y]);

      this._lines?.points(arrayPoints?.flat() as number[]);
      this._lines?.draw();

      // 첫번째 포인트 MouseOver 처리
      if (this._circles && this._circles.length > 2 && e.target.id() === '0') {
        this._circles[0].scale({ x: 2, y: 2 });
      } else {
        if (this._circles) {
          if (this._circles.length > 0) {
            this._circles[0].scale({ x: 1, y: 1 });
          }
        }
      }
    }
  }

  mouseupFunction(e?: KonvaEventObject<MouseEvent>): void {}

  keydownFunction(e: KeyboardEvent): void {
    if (e.code === 'Escape') {
      this.clear();
    }
  }
}
