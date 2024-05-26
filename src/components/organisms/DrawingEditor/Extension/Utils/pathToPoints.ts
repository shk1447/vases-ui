import { Polygons } from "@doodle3d/clipper-lib";

const pathToPoints = (str: string): Polygons => {
  if (!str) return [];
  str = str
    .replace(/[0-9]+-/g, function (v: string) {
      return v.slice(0, -1) + " -";
    })
    .replace(/\.[0-9]+/g, function (v: string) {
      return v.match(/\s/g) ? v : v + " ";
    });
  const keys = str.match(/[MmLlHhVvZz]/g);
  const paths = str
    .split(/[MmLlHhVvZz]/g)
    .filter(function (v) {
      return v.length > 0;
    })
    .map(function (v) {
      return v.trim();
    });

  let x = 0,
    y = 0,
    res = [] as any,
    temp: any[] = [];
  if (!keys || !keys.length) return res;
  for (let i = 0, lenKeys = keys?.length as number; i < lenKeys; i++) {
    switch (keys[i]) {
      case "M":
      case "L":
      case "l":
        const arr = paths[i].split(/\s/g).filter(function (v) {
          return v.length > 0;
        });
        for (let t = 0, lenPaths = arr.length; t < lenPaths; t++) {
          if (t % 2 === 0) {
            x = (keys[i] === "l" ? x : 0) + parseFloat(arr[t]);
            temp.push(x);
          } else {
            y = (keys[i] === "l" ? y : 0) + parseFloat(arr[t]);
            temp.push(y);
          }
          //   if (t < lenPaths - 1) res += ' ';
        }
        break;
      case "V":
        y = parseFloat(paths[i]);
        temp.push(x, y);
        break;
      case "v":
        y += parseFloat(paths[i]);
        temp.push(x, y);
        break;
      case "H":
        x = parseFloat(paths[i]);
        temp.push(x, y);
        break;
      case "h":
        x += parseFloat(paths[i]);
        temp.push(x, y);
        break;
      case "Z":
      case "z":
        res.push(temp as any[]);
        temp = [];
        break;
    }
  }
  return res.map((d: any) => {
    return d.reduce((acc: any[], curr: number, currentIndex: number) => {
      if (currentIndex % 2 === 1) acc[acc.length - 1].Y = curr;
      else acc.push({ X: curr, Y: null });
      return acc;
    }, []);
  });
};
export default pathToPoints;
