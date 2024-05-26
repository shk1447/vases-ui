import Konva from "konva";

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

  protected _srcs: string[] = [];

  get srcs(): string[] {
    return this._srcs;
  }
  /**
   * 해당 아이디를 갖고 있는 레이어를 반환한다.
   * @param layerID 레이어 아이디
   * @returns 해당 아이디를 가진 레이어가 있으면 Konva.Layer 아니면 null
   */
  public getLayer(layerID: string): Konva.Layer | null {
    const findResult = this._stage?.find((node: Konva.Node) => {
      return node.getClassName() === "Layer" && node.id() === layerID;
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
      return node.getAttr("selected");
    });
  }

  /**
   * 특정 레이어의 마우스 포인터 절대좌표를 반환한다.
   * @param layerID 레이어의 아이디
   * @returns 해당 아이디를 가진 레이어가 있으면 Konva.Vector2d 없으면 null
   */
  public getPointerPositionOnLayer(
    layerID: string,
    point: Konva.Vector2d | undefined | null
  ): Konva.Vector2d | undefined {
    const layer = this.getLayer(layerID);
    if (layer && point) {
      return layer.getAbsoluteTransform().copy().invert().point(point);
    }
    return;
  }

  private _importImage(
    path: string,
    globalCompositeOperation: string
  ): Promise<Konva.Image> {
    return new Promise((resolve, reject) => {
      Konva.Image.fromURL(
        path,
        (imageNode: Konva.Image) => {
          imageNode.setAttrs({
            id: "background-image",
            x: 0,
            y: 0,
            width: imageNode.getAttr("width"),
            height: imageNode.getAttr("height"),
            globalCompositeOperation,
          });
          resolve(imageNode);
        },
        (e: any) => {
          reject(e);
        }
      );
    });
  }

  /**
   *
   * ROI 이미지 로드용 함수..
   */
  public importFitImageFromURL(src: string[]): Promise<boolean> {
    this._srcs = src;
    return new Promise(async (resolve, reject) => {
      try {
        const imageNodes = await Promise.all(
          src
            .filter((path: string) => path.length > 0)
            .map((path: string, i: number) => {
              let globalCompositeOperation = "source-over";
              if (i === 0) globalCompositeOperation = "overlay";
              return this._importImage(path, globalCompositeOperation);
            })
        );

        if (!imageNodes.length) return;

        const { width, height } = imageNodes[0].getAttrs();

        const targetW = this._stage?.container().getBoundingClientRect()
          .width as number;
        const targetH = this._stage?.container().getBoundingClientRect()
          .height as number;

        const widthFit = targetW / width;
        const heightFit = targetH / height;

        const scale = widthFit > heightFit ? heightFit : widthFit;

        const newWidth = width * scale;
        const newHeight = height * scale;

        imageNodes.forEach((imageNode: Konva.Image) => {
          imageNode.width(newWidth);
          imageNode.height(newHeight);
        });
        this.backgroundImageLayer?.scale({ x: 1, y: 1 });
        this.backgroundImageLayer?.position({ x: 0, y: 0 });
        this.backgroundImageLayer?.destroyChildren();
        this.backgroundImageLayer?.clear();

        imageNodes.forEach((imageNode: Konva.Image) => {
          this.backgroundImageLayer?.add(imageNode);
        });

        this._stage?.size({ width: newWidth, height: newHeight });

        this._currentLayer?.scaleX(newWidth / targetW);
        this._currentLayer?.scaleY(newHeight / targetH);
        this._currentLayer?.position({ x: 0, y: 0 });
        resolve(true);
      } catch (e) {
        this.backgroundImageLayer?.destroyChildren();
        this.backgroundImageLayer?.clear();
        this.currentLayer?.destroyChildren();
        this.currentLayer?.clear();
        reject(e);
      }
    });
  }
  /**
   * background image layer에 이미지 import하기
   * @param src image 주소
   * @return void
   */

  public importImageFromURL(src: string[]): Promise<boolean> {
    this._srcs = src;
    return new Promise(async (resolve, reject) => {
      try {
        const imageNodes = await Promise.all(
          src
            .filter((path: string) => path.length > 0)
            .map((path: string, i: number) => {
              let globalCompositeOperation = "source-over";
              if (i === 0) globalCompositeOperation = "overlay";
              return this._importImage(path, globalCompositeOperation);
            })
        );

        if (!imageNodes.length) return;

        const { width, height } = imageNodes[0].getAttrs();

        const targetW = this._stage?.container().getBoundingClientRect()
          .width as number;
        const targetH = this._stage?.container().getBoundingClientRect()
          .height as number;
        const widthFit = targetW / width;
        const heightFit = targetH / height;

        const scale = widthFit >= heightFit ? heightFit : widthFit;

        const newWidth = width * scale;
        const newHeight = height * scale;

        this.backgroundImageLayer?.scale({ x: 1, y: 1 });
        this.backgroundImageLayer?.position({
          x: 0,
          y: 0,
        });

        this.currentLayer?.scale({ x: 1, y: 1 });
        this.currentLayer?.position({
          x: 0,
          y: 0,
        });

        this.stage?.scale({ x: scale, y: scale });
        this._stage?.position({ x: 0, y: 0 });
        if (scale <= 1) {
          if (widthFit >= heightFit) {
            this.stage?.x((targetW - newWidth) / 2);
          } else {
            this.stage?.y((targetH - newHeight) / 2);
          }
        } else {
          this.stage?.x((targetW - newWidth) / 2);
          this.stage?.y((targetH - newHeight) / 2);
        }

        this.backgroundImageLayer
          ?.getChildren((c: Konva.Node) => {
            return c.getClassName() === "Image";
          })
          .forEach((c: Konva.Node) => c.destroy());

        imageNodes.forEach((imageNode: Konva.Image) => {
          this.backgroundImageLayer?.add(imageNode);
        });

        this._stage?.size({ width: targetW, height: targetH });

        resolve(true);
      } catch (e) {
        this.backgroundImageLayer?.destroyChildren();
        this.backgroundImageLayer?.clear();
        this.currentLayer?.destroyChildren();
        this.currentLayer?.clear();
        reject(e);
      }
    });
  }

  /**
   * id를 가지고 현재 레이어에서 shape 가져오기
   * @param id 해당 shape의 id
   * @return 해당 id를 가진 Node가 있으면 Konva.Node 그렇지 않으면 undefined
   */
  public getShapeById(id: string): Konva.Node | undefined {
    return this._currentLayer?.find((node: Konva.Node) => {
      return node.id() === id;
    })[0];
  }

  // background image를 가져온다.
  public getBackgroundImage(): Konva.Image | null {
    const backgroundImage = this.backgroundImageLayer?.getChildren(
      (child: Konva.Node) => child.getAttr("id") === "background-image"
    ) as Konva.Image[];
    return backgroundImage && backgroundImage.length
      ? backgroundImage[0]
      : null;
  }

  public getScale(): number {
    const backgroundImg = this.getBackgroundImage() as Konva.Image;

    const img = backgroundImg.getAttr("image");

    const { width, height } = img;

    const targetW = this._stage?.container().getBoundingClientRect()
      .width as number;
    const targetH = this._stage?.container().getBoundingClientRect()
      .height as number;

    const widthFit = targetW / width;
    const heightFit = targetH / height;

    const scale = widthFit > heightFit ? heightFit : widthFit;

    return scale;
  }

  public destory(): void {
    this._backgroundImageLayer?.destroy();
    this._backgroundImageLayer = null;

    this._currentLayer?.destroy();
    this._currentLayer = null;
  }
}
