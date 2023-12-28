import React from 'react';
export interface TableProps {
    stickyHeader?: boolean;
    children?: React.ReactNode;
    className?: string;
}
export declare const StyledTable: import("@emotion/styled").StyledComponent<TableProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Table: (props: TableProps) => JSX.Element;
