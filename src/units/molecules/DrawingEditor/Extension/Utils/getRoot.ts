import Konva from 'konva';

/**
 * 레이어를 제외한 자기 자신의 루트를 반환하는 함수
 * @param node konva node
 * @return undefined : 자기 자신, Konva.Group : group
 */
const getRoot = (node: Konva.Node): undefined | Konva.Container => {
  const rootList = [];
  let parent = node.parent;
  while (parent) {
    if (
      parent.getClassName() !== 'Layer' &&
      parent.getClassName() !== 'Stage'
    ) {
      rootList.unshift(parent);
    }
    parent = parent.parent;
  }

  return rootList.length ? rootList[0] : undefined;
};

export default getRoot;
