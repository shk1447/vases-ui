import React from 'react';
export interface TableRowProps {
    children?: React.ReactNode;
    className?: string;
    selected?: boolean;
    onClick?: (e: any) => any;
    onDoubleClick?: (e: any) => any;
}
export declare const StyledTableRow: import("@emotion/styled").StyledComponent<TableRowProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const TableRow: ({ selected, onClick, onDoubleClick, children, className, }: TableRowProps) => JSX.Element;
