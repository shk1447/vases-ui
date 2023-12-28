import Konva from 'konva';

export class APIWrapper {
  protected _stage: Konva.Stage | null = null;

  protected _currentLayer: Konva.Layer | null = null;

  protected _backgroundImageLayer: Konva.Layer | null = null;

  get currentLayer(): Konva.Layer | null {
    return this._currentLayer;
  }

  get backgroundImageLayer(): Konva.Layer | null {
    return this._backgroundImageLayer;
  }
  constructor(stage: Konva.Stage) {
    this._stage = stage;
  }

  get stage(): Konva.Stage | null {
    return this._stage;
  }

  /**
   * 해당 아이디를 갖고 있는 레이어를 반환한다.
   * @param layerID 레이어 아이디
   * @returns 해당 아이디를 가진 레이어가 있으면 Konva.Layer 아니면 null
   */
  public getLayer(layerID: string): Konva.Layer | null {
    const findResult = this._stage?.find((node: Konva.Node) => {
      return node.getClassName() === 'Layer' && node.id() === layerID;
    }) as Konva.Layer[];
    if (findResult.length) return findResult[0];
    else return null;
  }

  /**
   * 현재 선택된 노드를 반환한다.(Group이 선택되면 Group이 반환, 그 안에 속한것은 Group에 계속 딸려 다닌다.)
   * @returns selected 라는 attribute가 true인 노드들의 배열
   */
  public getSelectedShapes(): Konva.Node[] {
    if (!this._currentLayer) return [];
    return this._currentLayer?.getChildren((node: Konva.Node) => {
      return node.getAttr('selected');
    });
  }

  /**
   * 특정 레이어의 마우스 포인터 절대좌표를 반환한다.
   * @param layerID 레이어의 아이디
   * @returns 해당 아이디를 가진 레이어가 있으면 Konva.Vector2d 없으면 null
   */
  public getPointerPositionOnLayer(
    layerID: string,
    point: Konva.Vector2d | undefined | null,
  ): Konva.Vector2d | undefined {
    const layer = this.getLayer(layerID);
    if (layer && point) {
      return layer.getAbsoluteTransform().copy().invert().point(point);
    }
    return;
  }

  /**
   * background image layer에 이미지 import하기
   * @param src image 주소
   * @return void
   */
  public importImageFromURL(src: string): void {
    Konva.Image.fromURL(src, (imageNode: Konva.Image) => {
      imageNode.setAttrs({
        x: 0,
        y: 0,
        width: this._stage?.container().clientWidth,
        height: this._stage?.container().clientHeight,
      });
      this.backgroundImageLayer?.add(imageNode);
    });
  }

  /**
   * id를 가지고 현재 레이어에서 shape 가져오기
   * @param id 해당 shape의 id
   * @return 해당 id를 가진 Node가 있으면 Konva.Node 그렇지 않으면 undefined
   */
  public getShapeById(id: string): Konva.Node | undefined {
    return this._currentLayer?.find((node: Konva.Node) => node.id() === id)[0];
  }

  public destory(): void {
    this._backgroundImageLayer?.destroy();
    this._backgroundImageLayer = null;

    this._currentLayer?.destroy();
    this._currentLayer = null;
  }
}
