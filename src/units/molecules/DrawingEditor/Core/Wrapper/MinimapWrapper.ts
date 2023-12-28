import Konva from 'konva';
import { Vector2d } from 'konva/lib/types';
import { MiniMapProps } from '../UI/Minimap/Minimap';
import { APIWrapper } from './APIWrapper';

import StageWrapper from './StageWrapper';

export interface ViewBoxProps {
  pos: { x: number; y: number } | undefined;
  scale: Vector2d | undefined;
}

export interface MiniMapWarapperProps {
  height?: number;
  width?: number;
  scaleX?: number;
  scaleY?: number;
  posX?: number;
  posY?: number;
  minimap: MiniMapProps;
}

export default class MiniMapWrapper extends APIWrapper {
  private _ignoreShapes: string[] = ['eraser'];
  private _minimapProps: MiniMapWarapperProps;
  private _fullmapStage: StageWrapper | null | undefined = null;
  private _viewbox: Konva.Rect | null = null;

  constructor(
    container: HTMLDivElement,
    fullmapStage: StageWrapper | null | undefined,
    minimapProps: MiniMapWarapperProps,
  ) {
    super(
      new Konva.Stage({
        container: container as HTMLDivElement,
        width: minimapProps.width,
        height: minimapProps.height,
        scaleX: minimapProps.scaleX,
        scaleY: minimapProps.scaleY,
      }),
    );

    this._minimapProps = minimapProps;
    this._fullmapStage = fullmapStage;

    this.initialize();
  }

  get minimapProps() {
    return this._minimapProps;
  }

  get stage() {
    return this._stage;
  }

  get fullmapStage() {
    return this._fullmapStage;
  }

  get viewBox() {
    return this._viewbox;
  }

  initialize() {
    const currentLayer = this.fullmapStage?.currentLayer?.clone();
    this._currentLayer = currentLayer as Konva.Layer;
    this.stage?.add(currentLayer as Konva.Layer);
  }

  public MinimapSetUp(src: string): void {
    Konva.Image.fromURL(src, (imageNode: Konva.Image) => {
      imageNode.setAttrs({
        x: 0,
        y: 0,
        width: this._stage?.width(),
        height: this._stage?.height(),
      });

      this._backgroundImageLayer = new Konva.Layer({
        id: 'minimap-image-layer',
      });

      this._backgroundImageLayer?.add(imageNode);
      this._stage?.add(this._backgroundImageLayer);

      this._viewbox = new Konva.Rect({
        id: 'viewbox',
        fill: 'rgba(86, 204, 242, 0.3)',
        stroke: '#2d9cdb',
        strokeWidth: 1,
        width: this._stage?.width(),
        height: this._stage?.height(),
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        draggable: true,
      });

      this.viewBox?.addEventListener('dragmove', event => {
        event.preventDefault();

        const maxX = this.stage?.width() as number;
        const maxY = this.stage?.height() as number;

        let x = this._viewbox?.getPosition()?.x as number;
        let y = this._viewbox?.getPosition()?.y as number;

        const width = this._viewbox?.width() as number;
        const height = this._viewbox?.height() as number;

        if (x + width >= maxX) {
          x = maxX - width;
          this._viewbox?.x(x);
        }
        if (y + height >= maxY) {
          y = maxY - height;
          this._viewbox?.y(y);
        }
        if (x < 0) {
          x = 0;
          this._viewbox?.x(0);
        }
        if (y < 0) {
          y = 0;
          this._viewbox?.y(0);
        }

        const fullmapX =
          -(x * this._minimapProps.minimap.ratio.width) *
          (this._fullmapStage?.backgroundImageLayer?.scaleX() as number);
        const fullmapY =
          -(y * this._minimapProps.minimap.ratio.height) *
          (this._fullmapStage?.backgroundImageLayer?.scaleY() as number);

        this._fullmapStage?.backgroundImageLayer?.setPosition({
          x: fullmapX,
          y: fullmapY,
        });
        this._fullmapStage?.currentLayer?.setPosition({
          x: fullmapX,
          y: fullmapY,
        });
      });

      const minimapLayer = this.getLayer(
        'minimap-viewbox-layer',
      ) as Konva.Layer;
      if (minimapLayer) minimapLayer.destroy();

      const viewBoxLayer = new Konva.Layer({
        id: 'minimap-viewbox-layer',
      });
      viewBoxLayer.add(this._viewbox);
      this._stage?.add(viewBoxLayer);
      viewBoxLayer.setZIndex(2);
    });
  }

  public viewBoxUpdate(props: ViewBoxProps) {
    this._viewbox?.size({
      width: (this._stage?.width() as number) / (props.scale?.x as number),
      height: (this._stage?.height() as number) / (props.scale?.y as number),
    });

    this._viewbox?.position({
      x:
        -(props.pos?.x as number) /
        this._minimapProps.minimap.ratio.width /
        (props.scale?.x as number),
      y:
        -(props.pos?.y as number) /
        this._minimapProps.minimap.ratio.height /
        (props.scale?.y as number),
    });

    const shapeLayer = this.fullmapStage?.currentLayer?.clone();
    shapeLayer?.getChildren().forEach(children => {
      if (this._ignoreShapes.includes(children.id())) {
        children.destroy();
      }
    });

    if (shapeLayer) {
      this._currentLayer?.destroy();

      shapeLayer.scale({
        x: 1 / this._minimapProps.minimap.ratio.width,
        y: 1 / this._minimapProps.minimap.ratio.height,
      });
      shapeLayer.position({ x: 0, y: 0 });
      this._currentLayer = shapeLayer;

      this.stage?.add(shapeLayer);
      shapeLayer.setZIndex(1);
    }
  }

  public destory(): void {
    super.destory();
    this.viewBox?.destroy();
  }
}
