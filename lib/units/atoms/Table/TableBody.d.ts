import React from 'react';
export interface TableBodyProps {
    children?: React.ReactNode;
    className?: string;
}
export declare const StyledTableBody: import("@emotion/styled").StyledComponent<TableBodyProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const TableBody: ({ children, className }: TableBodyProps) => JSX.Element;
