import Konva from 'konva';
/**
 * 일괄 렌더를 위한 타입
 */
export interface RenderTarget {
    target: (Konva.Group | Konva.Shape)[];
    parent: Konva.Group | Konva.Layer;
}
