import Konva from "konva";
import ClipperLib, { Point, Polygon, Polygons } from "@doodle3d/clipper-lib";

import { KonvaEventObject, NodeConfig } from "konva/lib/Node";
import {
  Cmd,
  CmdActionParameter,
  CORE_COMMAND,
} from "../../Interfaces/Commands";
import Shareable from "../Actions/Shareable";
import Undoable from "../Actions/Undoable";

import { notifyManipulationCommandParameter } from "./NotifyManipulation";
import pathToPoints from "../../../Extension/Utils/pathToPoints";
import { pointsToPath } from "../../../Extension";
import ConfigManager from "../../../Config";
import { v4 as uuidv4 } from "uuid";
import { Container } from "konva/lib/Container";
import StageWrapper from "../../Wrapper/StageWrapper";
import { removeShapeCommandParameter } from "./Remove";

export type selectShapeCommandParameter = {
  ids: string[];
  isSeperate: boolean;
};
export type selectShapeCommandReturn = Shareable | undefined;

/**
 * << Shareable Command >>
 * 해당 id를 가진 shape들을 선택처리 한다.
 */

const getCorner = (
  pivotX: number,
  pivotY: number,
  diffX: number,
  diffY: number,
  angle: number
) => {
  const distance = Math.sqrt(diffX * diffX + diffY * diffY);

  /// find angle from pivot to corner
  angle += Math.atan2(diffY, diffX);

  /// get new x and y and round it off to integer
  const x = pivotX + distance * Math.cos(angle);
  const y = pivotY + distance * Math.sin(angle);

  return { x: x, y: y };
};

const getClientRect = (rotatedBox: {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}) => {
  const { x, y, width, height } = rotatedBox;
  const rad = rotatedBox.rotation;

  const p1 = getCorner(x, y, 0, 0, rad);
  const p2 = getCorner(x, y, width, 0, rad);
  const p3 = getCorner(x, y, width, height, rad);
  const p4 = getCorner(x, y, 0, height, rad);

  const minX = Math.min(p1.x, p2.x, p3.x, p4.x);
  const minY = Math.min(p1.y, p2.y, p3.y, p4.y);
  const maxX = Math.max(p1.x, p2.x, p3.x, p4.x);
  const maxY = Math.max(p1.y, p2.y, p3.y, p4.y);

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  };
};

const getTotalBox = (
  boxes: { x: number; y: number; width: number; height: number }[]
) => {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  boxes.forEach((box) => {
    minX = Math.min(minX, box.x);
    minY = Math.min(minY, box.y);
    maxX = Math.max(maxX, box.x + box.width);
    maxY = Math.max(maxY, box.y + box.height);
  });
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  };
};

/**
 Vases Project에서는 Group 안에 Path, Text 객체로 구성된다. 
 Transformer가 조작하는 것은 Group 인데, DB에서는 Contour(Path) 좌표 정보만 저장한다... 
 따라서. DB에 넘기기 전에 Group의 행렬 정보를 Path에 적용시켜 Path를 재생성 하고, Group의
 Transform을 reset한다. 
 겉보기에는 차이가 없다. 
 */
const applyTransform = (path: Konva.Path) => {
  const parent = path.parent as unknown as Konva.Group;
  if (parent) {
    path.setAttr(
      "data",
      pointsToPath(
        pathToPoints(path.getAttr("data")).map((polygon: Polygon) => {
          return polygon.map((point: Point) => {
            const transformedPoint = path
              ?.getTransform()
              .copy()
              .multiply(parent.getTransform().copy())
              .point({ x: point.X, y: point.Y });
            return {
              X: transformedPoint.x,
              Y: transformedPoint.y,
            };
          });
        }),
        1
      )
    );
    path.position({ x: 0, y: 0 });
    path.scale({ x: 1, y: 1 });
    path.rotate(0);

    const text = parent.find(
      (n: Konva.Node) => n.getAttr("UIType") === "label-text"
    );

    if (text && text.length) {
      const rect = path.getClientRect({
        skipTransform: true,
        skipStroke: true,
      });
      text[0].position({ x: rect.x, y: rect.y });
    }
    parent.position({ x: 0, y: 0 });
    parent.scale({ x: 1, y: 1 });
    parent.rotate(0);
  }
};

/**
 drag, transform 할 때 이미지 밖을 벗어나게 되면 image bounding box만큼 crop하여
 path를 재생성 한다. 
 */
const cropWithImageBoundingBox = (
  path: Konva.Path,
  stageWrapper: StageWrapper
): Undoable[] => {
  const before = beforeData?.find(
    (d: any) => d.attrs.id === path.getAttr("id")
  );
  const undoables = [] as Undoable[];
  const image = stageWrapper.getBackgroundImage();
  if (image) {
    const parent = path.parent as unknown as Konva.Group;
    const pt = [] as { X: number; Y: number }[];
    const rect = image.getClientRect({ skipTransform: true, skipStroke: true });
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

    const c = pathToPoints(path.data());

    ClipperLib.JS.ScaleUpPaths(c, 1000);
    clipper.AddPaths([pt], ClipperLib.PolyType.ptSubject, true);
    clipper.AddPaths(c, ClipperLib.PolyType.ptClip, true);

    // stageWrapper?.backgroundImageLayer?.add(
    //   new Konva.Path({
    //     id: "test",
    //     strokeWidth: 1,
    //     stroke: "red",
    //     data: pointsToPath([pt]),
    //   })
    // );

    // stageWrapper?.backgroundImageLayer?.add(
    //   new Konva.Path({
    //     id: "test",
    //     strokeWidth: 1,
    //     stroke: "red",
    //     data: path.data(),
    //   })
    // );

    const solution_polytree = new ClipperLib.PolyTree();
    clipper.Execute(
      ClipperLib.ClipType.ctIntersection,
      solution_polytree,
      ClipperLib.PolyFillType.pftNonZero,
      ClipperLib.PolyFillType.pftNonZero
    );
    clipper.Clear();

    var polygons =
      ClipperLib.Clipper.ClosedPathsFromPolyTree(solution_polytree);

    const childCount = solution_polytree.ChildCount();

    if (childCount === 0) {
      path.setAttrs(before);

      stageWrapper?.commandRegistry?.execute<selectShapeCommandParameter>(
        CORE_COMMAND.SELECT_SHAPE,
        {
          ids: [],
          isSeperate: false,
        }
      );

      undoables.push(
        new Undoable(CORE_COMMAND.REMOVE_SHAPE, [before] as any, null)
      );

      path.parent?.destroyChildren();
      path.parent?.destroy();

      return undoables;
    }
    let polynode = solution_polytree.GetFirst();
    let holes = [] as any[];
    let fills = [] as any[];
    while (polynode) {
      const childPath = pointsToPath([
        polynode.m_polygon.map((pt: Point) => {
          return { X: pt.X / 1000, Y: pt.Y / 1000 };
        }),
      ]);
      if (polynode.IsHole()) {
        holes.push({
          parent: fills[fills.length - 1].target,
          path: childPath,
        });
      } else {
        fills.push({
          target: polynode,
          path: childPath,
        });
      }
      polynode = polynode.GetNext();
    }
    const polyPath = fills.map((d: any) => {
      const res = holes.filter((p: any) => p.parent === d.target);
      return (
        d.path +
        (res.length
          ? res
              .map((f: any) => {
                return f.path;
              })
              .join(" ")
          : "")
      );
    });

    polyPath.forEach((p: string, idx: number) => {
      const boundingBox = ClipperLib.JS.BoundsOfPaths(pathToPoints(p));

      if (idx === 0) {
        path.data(p);

        stageWrapper.currentLayer?.batchDraw();

        const data = path.toObject();

        data.attrs.posX = Math.round(boundingBox.left);
        data.attrs.posY = Math.round(boundingBox.top);
        data.attrs.lwidth = Math.round(boundingBox.right - boundingBox.left);
        data.attrs.lheight = Math.round(boundingBox.bottom - boundingBox.top);
        data.attrs.selected = false;
        data.attrs.draggable = false;
        data.attrs.strokeWidth = data.attrs.originalStrokeWidth;
        data.attrs.stroke = data.attrs.classColor;

        undoables.push(
          new Undoable(
            CORE_COMMAND.UPDATE_SHAPE,
            before ? [before] : ([] as any),
            [data]
          )
        );
      } else {
        const result = new Konva.Path({
          stroke: path.getAttr("classColor"),
          id: uuidv4(),
          strokeWidth: path.getAttr("originalStrokeWidth"),
          fill: path.fill(),
          lineCap: path.lineCap(),
          lineJoin: path.lineJoin(),
          opacity: path.opacity(),
          draggable: false,
          data: p,
          classId: path.getAttr("classId"),
          selectable: true,

          strokeScaleEnabled: false,
          UIType: "label",
        });

        result.setAttrs({
          posX: boundingBox.left,
          posY: boundingBox.top,
          lwidth: boundingBox.right - boundingBox.left,
          lheight: boundingBox.bottom - boundingBox.top,
          strokeWidth: result.getAttr("originalStrokeWidth"),
          stroke: result.getAttr("classColor"),
        });
        stageWrapper?.currentLayer?.add(result);
        undoables?.push(
          new Undoable(CORE_COMMAND.CREATE_SHAPE, null, [result.toObject()])
        );
      }
    });
  }

  return undoables;
};

const clipper: any = new ClipperLib.Clipper();

let beforeData: Record<any, any>[] | null = [];
const selectShapeCommand = {
  key: CORE_COMMAND.SELECT_SHAPE,
  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<selectShapeCommandParameter>): selectShapeCommandReturn => {
    if (currentController !== "activate-selection-controller") return;
    const transformLayer = stageWrapper.transformLayer;
    if (!transformLayer) return;
    (
      transformLayer.getChildren(
        (node: Konva.Node) => node.getClassName() === "Transformer"
      ) as Konva.Transformer[]
    ).forEach((t: Konva.Transformer) => {
      t.nodes().forEach((node: Konva.Node) => {
        node.draggable(false);
        node.setAttr("selected", false);
      });
      t.detach();
      t.off();
      t.destroy();
    });

    if (!param.ids.length) {
      sharedDatum.delete(CORE_COMMAND.SELECT_SHAPE);
      stageWrapper.currentLayer?.getChildren().forEach((child: Konva.Node) => {
        child.draggable(false);
        child.setAttr("selected", false);
      });
      return;
    }

    transformLayer.batchDraw();

    const findResult = param.ids
      .filter((id: string) => id.length)
      .map((id: string) => stageWrapper.getShapeById(id))
      .filter(
        (value: Konva.Node | undefined) => value !== undefined
      ) as Konva.Node[];

    findResult.forEach((node: Konva.Node) => {
      node.setAttr("selected", true);
      node.draggable(true);
    });

    stageWrapper.currentLayer?.batchDraw();

    console.log("FIND RESULT : ", findResult);

    beforeData = findResult
      .map((node: Konva.Node) => {
        const result = stageWrapper.stage?.find(
          (d: Konva.Node) => d.getAttr("UIType") === "label"
        );

        if (result && result.length) {
          return result.map((r: Konva.Group | Konva.Shape | Konva.Node) => {
            const label = r as Konva.Path;

            if (label.getClassName() === "Path") {
              applyTransform(r as Konva.Path);
            }

            const boundingBox = ClipperLib.JS.BoundsOfPaths(
              pathToPoints(label.data())
            );

            const data = label.toObject();

            data.attrs.posX = Math.round(boundingBox.left);
            data.attrs.posY = Math.round(boundingBox.top);
            data.attrs.lwidth = Math.round(
              boundingBox.right - boundingBox.left
            );
            data.attrs.lheight = Math.round(
              boundingBox.bottom - boundingBox.top
            );
            data.attrs.selected = false;
            data.attrs.draggable = false;
            data.attrs.strokeWidth = data.attrs.originalStrokeWidth;
            data.attrs.stroke = data.attrs.classColor;

            return data;
          });
        } else {
          return [];
        }
      })
      .flat();
    const stage = stageWrapper.stage;
    if (param.isSeperate) {
      findResult.forEach((node: Konva.Node) => {
        transformLayer.add(
          new Konva.Transformer(
            Object.assign(stageWrapper.transformerStyle, {
              ignoreStroke: true,
              nodes: [node],
              boundBoxFunc: (oldBox: any, newBox: any) => {
                if (!ConfigManager.enableTransfromerOutOfScreen) {
                  const box = getClientRect(newBox);
                  const x = Number(box.x.toFixed(4));
                  const y = Number(box.x.toFixed(4));
                  const width = Number(box.width.toFixed(4));
                  const height = Number(box.height.toFixed(4));
                  const isOut =
                    x < 0 ||
                    y < 0 ||
                    x + width > (stage?.width() as number) ||
                    y + height > (stage?.height() as number);

                  // if new bounding box is out of visible viewport, let's just skip transforming
                  // this logic can be improved by still allow some transforming if we have small available space
                  if (isOut) {
                    return oldBox;
                  }
                }

                return newBox;
              },
            })
          )
        );
      });
    } else {
      const tr = new Konva.Transformer(
        Object.assign(stageWrapper.transformerStyle, {
          nodes: findResult,
          ignoreStroke: true,
          boundBoxFunc: (oldBox: any, newBox: any) => {
            if (ConfigManager.enableTransfromerOutOfScreen) return;
            const box = getClientRect(newBox);
            const x = Number(box.x.toFixed(4));
            const y = Number(box.y.toFixed(4));
            const width = Number(box.width.toFixed(4));
            const height = Number(box.height.toFixed(4));
            const isOut =
              x < 0 ||
              y < 0 ||
              x + width >= (stage?.width() as number) ||
              y + height >= (stage?.height() as number);

            // console.log("===========================");
            // console.log(
            //   x < 0,
            //   y < 0,
            //   x + width >= (stage?.width() as number),
            //   y + height >= (stage?.height() as number)
            // );

            // if new bounding box is out of visible viewport, let's just skip transforming
            // this logic can be improved by still allow some transforming if we have small available space
            if (isOut) {
              if (x < 0) oldBox.x = 0;
              if (y < 0) oldBox.y = 0;
              if (x + width >= (stage?.width() as number))
                oldBox.width = stage?.width() as number;
              if (y + height >= (stage?.height() as number))
                oldBox.height = stage?.height() as number;
              return oldBox;
            }
            return newBox;
          },
        })
      );
      tr.on("dragmove", (e: KonvaEventObject<DragEvent>) => {
        const boxes = tr.nodes().map((node) => node.getClientRect());
        const box = getTotalBox(boxes);
        tr.nodes().forEach((shape) => {
          if (!ConfigManager.enableTransfromerOutOfScreen) {
            const absPos = shape.getAbsolutePosition();
            // where are shapes inside bounding box of all shapes?
            const offsetX = box.x - absPos.x;
            const offsetY = box.y - absPos.y;

            // we total box goes outside of viewport, we need to move absolute position of shape
            const newAbsPos = { ...absPos };
            if (box.x < 0) {
              newAbsPos.x = -offsetX;
            }
            if (box.y < 0) {
              newAbsPos.y = -offsetY;
            }
            if (box.x + box.width > (stage?.width() as number)) {
              newAbsPos.x = (stage?.width() as number) - box.width - offsetX;
            }
            if (box.y + box.height > (stage?.height() as number)) {
              newAbsPos.y = (stage?.height() as number) - box.height - offsetY;
            }
            shape.setAbsolutePosition(newAbsPos);
          }
        });
      });
      tr.on("dragend", (e: KonvaEventObject<DragEvent>) => {
        if (!ConfigManager.enableTransfromerOutOfScreen) return;
        const undoables = [] as Undoable[];

        (e.target as unknown as Konva.Transformer)
          .nodes()
          .forEach((node: Konva.Node) => {
            const result = stageWrapper.stage?.find(
              (d: Konva.Node) =>
                d.getAttr("UIType") === "label" && d.parent?.getAttr("selected")
            );

            if (result && result.length) {
              return result.forEach(
                (r: Konva.Group | Konva.Shape | Konva.Node) => {
                  if (r.getClassName() === "Path") {
                    applyTransform(r as Konva.Path);
                    undoables.push(
                      ...cropWithImageBoundingBox(r as Konva.Path, stageWrapper)
                    );
                  }
                }
              );
            }
          });
        if (!undoables.length) return;
        stageWrapper.commandRegistry?.execute<notifyManipulationCommandParameter>(
          CORE_COMMAND.NOTIFY_MANIPULATION,
          {
            undoables: undoables,
          }
        );

        beforeData = null;
      });
      tr.on("transformstart", (e: KonvaEventObject<any>) => {
        // beforeData
        if (!beforeData) {
          beforeData = findResult
            .map((node: Konva.Node) => {
              const result = stageWrapper.stage?.find(
                (d: Konva.Node) => d.getAttr("UIType") === "label"
              );

              if (result && result.length) {
                return result.map(
                  (r: Konva.Group | Konva.Shape | Konva.Node) => {
                    const label = r as Konva.Path;

                    if (label.getClassName() === "Path") {
                      applyTransform(r as Konva.Path);
                    }

                    const boundingBox = ClipperLib.JS.BoundsOfPaths(
                      pathToPoints(label.data())
                    );

                    const data = label.toObject();

                    data.attrs.posX = Math.round(boundingBox.left);
                    data.attrs.posY = Math.round(boundingBox.top);
                    data.attrs.lwidth = Math.round(
                      boundingBox.right - boundingBox.left
                    );
                    data.attrs.lheight = Math.round(
                      boundingBox.bottom - boundingBox.top
                    );
                    data.attrs.selected = false;
                    data.attrs.draggable = false;
                    data.attrs.strokeWidth = data.attrs.originalStrokeWidth;
                    data.attrs.stroke = data.attrs.classColor;

                    return data;
                  }
                );
              } else {
                return [];
              }
            })
            .flat();
        }
      });
      tr.on("transformend", (e: KonvaEventObject<any>) => {
        const undoables = [] as Undoable[];
        (e.currentTarget as unknown as Konva.Transformer)
          .nodes()
          .map((node: Konva.Node) => {
            const result = stageWrapper.stage?.find(
              (d: Konva.Node) =>
                d.getAttr("UIType") === "label" && d.parent?.getAttr("selected")
            );

            if (result && result.length) {
              return result.map((r: Konva.Group | Konva.Shape | Konva.Node) => {
                if (r.getClassName() === "Path") {
                  applyTransform(r as Konva.Path);
                  undoables.push(
                    ...cropWithImageBoundingBox(r as Konva.Path, stageWrapper)
                  );
                }
              });
            }
          });
        if (!undoables.length) return;
        stageWrapper.commandRegistry?.execute<notifyManipulationCommandParameter>(
          CORE_COMMAND.NOTIFY_MANIPULATION,
          {
            undoables: undoables,
          }
        );

        tr.forceUpdate();
      });
      transformLayer.add(tr);
    }
    transformLayer.batchDraw();
    stageWrapper.stage?.batchDraw();
    return new Shareable(findResult.map((node: Konva.Node) => node.toObject()));
  },
} as Cmd;

export default selectShapeCommand;
