import Konva from 'konva';
export declare class APIWrapper {
    protected _stage: Konva.Stage | null;
    protected _currentLayer: Konva.Layer | null;
    protected _backgroundImageLayer: Konva.Layer | null;
    get currentLayer(): Konva.Layer | null;
    get backgroundImageLayer(): Konva.Layer | null;
    constructor(stage: Konva.Stage);
    get stage(): Konva.Stage | null;
    /**
     * 해당 아이디를 갖고 있는 레이어를 반환한다.
     * @param layerID 레이어 아이디
     * @returns 해당 아이디를 가진 레이어가 있으면 Konva.Layer 아니면 null
     */
    getLayer(layerID: string): Konva.Layer | null;
    /**
     * 현재 선택된 노드를 반환한다.(Group이 선택되면 Group이 반환, 그 안에 속한것은 Group에 계속 딸려 다닌다.)
     * @returns selected 라는 attribute가 true인 노드들의 배열
     */
    getSelectedShapes(): Konva.Node[];
    /**
     * 특정 레이어의 마우스 포인터 절대좌표를 반환한다.
     * @param layerID 레이어의 아이디
     * @returns 해당 아이디를 가진 레이어가 있으면 Konva.Vector2d 없으면 null
     */
    getPointerPositionOnLayer(layerID: string, point: Konva.Vector2d | undefined | null): Konva.Vector2d | undefined;
    /**
     * background image layer에 이미지 import하기
     * @param src image 주소
     * @return void
     */
    importImageFromURL(src: string): void;
    /**
     * id를 가지고 현재 레이어에서 shape 가져오기
     * @param id 해당 shape의 id
     * @return 해당 id를 가진 Node가 있으면 Konva.Node 그렇지 않으면 undefined
     */
    getShapeById(id: string): Konva.Node | undefined;
    destory(): void;
}
