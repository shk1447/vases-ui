import React from 'react';
export interface TableCellProps {
    children?: React.ReactNode;
    className?: string;
    colSpan?: number;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}
export declare const StyledTableCell: import("@emotion/styled").StyledComponent<TableCellProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const TableCell: ({ align, children, className, colSpan, }: TableCellProps) => JSX.Element;
