import StageWrapper from "../../Core/Wrapper/StageWrapper";
import ClipperLib from "@doodle3d/clipper-lib";
import pathToPoints from "./pathToPoints";
import pointsToPath from "./pointsToPath";

const cropWithBackgroundImage = (
  path: string,
  stageWrapper: StageWrapper,
  clipper: any
): string | null => {
  if (path.length === 0) return null;

  const image = stageWrapper.getBackgroundImage();

  if (image) {
    const pt = [] as { X: number; Y: number }[];
    const rect = image.getClientRect({ skipTransform: true });
    pt.push({ X: rect.x + image.x() + 1, Y: rect.y + image.y() + 1 });
    pt.push({
      X: rect.x + rect.width + image.x() - 1,
      Y: rect.y + image.y() + 1,
    });
    pt.push({
      X: rect.x + rect.width + image.x() - 1,
      Y: rect.y + rect.height + image.y() - 1,
    });
    pt.push({
      X: rect.x + image.x() + 1,
      Y: rect.y + rect.height + image.y() - 1,
    });

    ClipperLib.JS.ScaleUpPath(pt, 1000);

    const pts = pathToPoints(path);

    ClipperLib.JS.ScaleUpPaths(pts, 1000);

    clipper.AddPaths([pt], ClipperLib.PolyType.ptSubject, true);
    clipper.AddPaths(pts, ClipperLib.PolyType.ptClip, true);

    const solution_paths = ClipperLib.Paths();
    clipper.Execute(
      ClipperLib.ClipType.ctIntersection,
      solution_paths,
      ClipperLib.PolyFillType.pftEvenOdd,
      ClipperLib.PolyFillType.pftEvenOdd
    );
    ClipperLib.JS.ScaleDownPaths(solution_paths, 1000);

    clipper.Clear();
    return solution_paths.length ? pointsToPath(solution_paths) : path;
  }
  return null;
};

export default cropWithBackgroundImage;
