import React from 'react';
export interface TableContainerProps {
    children?: React.ReactNode;
    className?: string;
}
export declare const StyledTableContainer: import("@emotion/styled").StyledComponent<TableContainerProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const TableContainer: ({ children, className, }: TableContainerProps) => JSX.Element;
