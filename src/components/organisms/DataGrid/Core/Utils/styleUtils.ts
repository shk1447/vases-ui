import type { CSSProperties } from "react";
import clsx from "clsx";

import type { CalculatedColumn } from "../Types";
import {
  cellClassname,
  cellFrozenClassname,
  cellFrozenLastClassname,
  groupCellClassname,
} from "../Style";

export function getRowStyle(rowIdx: number, height?: number): CSSProperties {
  if (height !== undefined) {
    return {
      "--rdg-grid-row-start": rowIdx,
      "--rdg-row-height": `${height}px`,
    } as unknown as CSSProperties;
  }
  return { "--rdg-grid-row-start": rowIdx } as unknown as CSSProperties;
}

export function getCellStyle<R, SR>(
  column: CalculatedColumn<R, SR>,
  colSpan?: number
): React.CSSProperties {
  return {
    padding: column.hide ? 0 : "",
    gridColumnStart: column.idx + 1,
    gridColumnEnd: colSpan !== undefined ? `span ${colSpan}` : undefined,
    insetInlineStart: column.frozen
      ? `var(--rdg-frozen-left-${column.idx})`
      : undefined,
  };
}

export function getCellClassname<R, SR>(
  column: CalculatedColumn<R, SR>,
  ...extraClasses: Parameters<typeof clsx>
): string {
  return clsx(
    cellClassname,
    {
      [cellFrozenClassname]: column.frozen,
      [cellFrozenLastClassname]: column.isLastFrozenColumn,
    },
    ...extraClasses
  );
}

export function getGroupClassname<R, SR>(
  column: CalculatedColumn<R, SR>,
  ...extraClasses: Parameters<typeof clsx>
): string {
  return clsx(
    groupCellClassname,
    {
      [cellFrozenClassname]: column.frozen,
      [cellFrozenLastClassname]: column.isLastFrozenColumn,
    },
    ...extraClasses
  );
}