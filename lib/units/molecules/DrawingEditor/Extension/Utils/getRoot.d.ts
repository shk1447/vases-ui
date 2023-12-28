import Konva from 'konva';
/**
 * 레이어를 제외한 자기 자신의 루트를 반환하는 함수
 * @param node konva node
 * @return undefined : 자기 자신, Konva.Group : group
 */
declare const getRoot: (node: Konva.Node) => undefined | Konva.Container;
export default getRoot;
