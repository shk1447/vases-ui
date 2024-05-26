import { memo } from "react";
import { css } from "@emotion/css";

import { getCellStyle, getCellClassname } from "./Utils";
import type { CalculatedColumn, CellRendererProps } from "./Types";
import { useRovingCellRef } from "./Hooks";
import { grey } from "@vases-ui/theme/colors";

export const summaryCellClassname = css`
  inset-block-start: var(--rdg-summary-row-top);
  inset-block-end: var(--rdg-summary-row-bottom);
  position: sticky;
  z-index: 3;
  border-bottom: 1px solid ${grey[20]};
`;

interface SharedCellRendererProps<R, SR>
  extends Pick<
    CellRendererProps<R, SR>,
    "column" | "colSpan" | "isCellSelected"
  > {
  selectCell: (row: SR, column: CalculatedColumn<R, SR>) => void;
}

interface SummaryCellProps<R, SR> extends SharedCellRendererProps<R, SR> {
  row: SR;
}

function SummaryCell<R, SR>({
  column,
  colSpan,
  row,
  isCellSelected,
  selectCell,
}: SummaryCellProps<R, SR>) {
  const { ref, tabIndex, onFocus } = useRovingCellRef(isCellSelected);
  const { summaryCellClass } = column;
  const className = getCellClassname(
    column,
    summaryCellClassname,
    typeof summaryCellClass === "function"
      ? summaryCellClass(row)
      : summaryCellClass
  );
  console.log("test");

  function onClick() {
    selectCell(row, column);
  }

  return (
    <div
      role="gridcell"
      aria-colindex={column.idx + 1}
      aria-colspan={colSpan}
      aria-selected={isCellSelected}
      ref={ref}
      tabIndex={tabIndex}
      className={className}
      style={getCellStyle(column, colSpan)}
      onClick={onClick}
      onFocus={onFocus}
    >
      {column.summaryFormatter?.({ column, row, isCellSelected })}
    </div>
  );
}

export default memo(SummaryCell) as <R, SR>(
  props: SummaryCellProps<R, SR>
) => JSX.Element;
