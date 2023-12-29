import React from 'react';
export interface NestedListItemProps {
    className?: string;
    open?: boolean;
    selected?: boolean;
    parent?: React.ReactNode;
    children?: React.ReactNode;
    onClick?: (e: any) => void;
}
export declare const NestedListItem: (props: NestedListItemProps) => JSX.Element;
