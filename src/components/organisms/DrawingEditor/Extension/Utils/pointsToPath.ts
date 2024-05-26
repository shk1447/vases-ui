import { Polygons } from "@doodle3d/clipper-lib";

// point form : {X: number, Y: number}
export const pointsToPath = (points: Polygons, scale: number = 1) => {
  let svgpath = "",
    i,
    j;
  if (!scale) scale = 1;
  for (i = 0; i < points.length; i++) {
    for (j = 0; j < points[i].length; j++) {
      if (!j) svgpath += "M";
      else svgpath += "L";
      svgpath += points[i][j].X / scale + " " + points[i][j].Y / scale;
    }
    svgpath += "Z ";
  }
  if (svgpath === "") svgpath = "M0,0";
  return svgpath;
};
export default pointsToPath;
