import Konva from "konva";
import StageWrapper from "../../Core/Wrapper/StageWrapper";

const checkOnBackgroundImage = (
  pos: Konva.Vector2d,
  stageWrapper: StageWrapper
): boolean => {
  const image = stageWrapper?.getBackgroundImage();

  if (image) {
    const rect = image.getClientRect({ skipTransform: true });

    if (
      pos.x < rect.x + image.x() ||
      pos.x > rect.x + rect.width + image.x() ||
      pos.y < rect.y + image.y() ||
      pos.y > rect.y + rect.height + image.y()
    ) {
      return false;
    }
    return true;
  }
  return true;
};

export default checkOnBackgroundImage;
