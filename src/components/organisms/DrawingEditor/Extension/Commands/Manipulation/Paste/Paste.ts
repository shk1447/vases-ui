import { Point, Polygon } from "@doodle3d/clipper-lib";
import Konva from "konva";
import { v4 as uuidv4 } from "uuid";
import { createShapeCommandParameter } from "../../../../Core/ConmmandRegistry/Commands/Create";
import { selectShapeCommandParameter } from "../../../../Core/ConmmandRegistry/Commands/Select";
import { CommandRegistryPassPrameter } from "../../../../Core/Interfaces/CommandRegistry";
import {
  CORE_COMMAND,
  Cmd,
  CmdActionParameter,
} from "../../../../Core/Interfaces/Commands";
import keyChecker from "../../../Utils/keyChecker";
import pathToPoints from "../../../Utils/pathToPoints";
import pointsToPath from "../../../Utils/pointsToPath";

export type pasteCommandParam = undefined;
export type pasteCommandReturn = void;

/**
 * 복사한 것을 붙여넣는 커맨드
 */
const pasteCommand = {
  key: "paste",

  action: ({
    stageWrapper,
    sharedDatum,
    undoList,
    redoList,
    currentController,
    param,
    mouseEvent,
  }: CmdActionParameter<pasteCommandParam>): pasteCommandReturn => {
    const copyData = sharedDatum.get("copy");

    if (copyData) {
      const newShapes = copyData.data?.map((d: Record<any, any>) => {
        const s = Konva.Node.create(d);
        s.id(uuidv4());

        if ((s as Konva.Node).getClassName() === "Path") {
          (s as Konva.Path).data();
          const newPoints = pathToPoints((s as Konva.Path).data()).map(
            (polygon: Polygon) => {
              return polygon.map((pt: Point) => {
                return { X: pt.X + 10, Y: pt.Y + 10 };
              });
            }
          );
          (s as Konva.Path).data(pointsToPath(newPoints));
        } else {
          const pos = (s as Konva.Path).position();
          (s as Konva.Path).position({ x: pos.x + 10, y: pos.y + 10 });
        }
        return s;
      }) as Konva.Shape[];

      stageWrapper.commandRegistry?.execute<createShapeCommandParameter>(
        CORE_COMMAND.CREATE_SHAPE,
        {
          nodes: newShapes as Konva.Shape[],
        }
      );
      stageWrapper.commandRegistry?.execute<selectShapeCommandParameter>(
        CORE_COMMAND.SELECT_SHAPE,
        {
          ids: newShapes.map((shape: Konva.Shape) => shape.id()),
          isSeperate: true,
        }
      );
      sharedDatum.delete("copy");
    }
  },

  condition: ({
    sharedDatum,
    undoList,
    redoList,
    currentController,
  }: CommandRegistryPassPrameter) => {
    return sharedDatum.has("copy");
  },
  events: [
    {
      type: "keydown",
      condition: (event: Event) => {
        const { key } = event as KeyboardEvent;

        return (
          key === "v" && keyChecker({ ctrlKey: true }, event as KeyboardEvent)
        );
      },
    },
  ],
} as Cmd;

export default pasteCommand;