import React from 'react';
import { TreeViewProps as _TreeViewProps } from '@mui/lab';
import { TreeItemProps as _TreeItemProps, TreeItemContentProps as _TreeItemContentProps } from '@mui/lab';
import { SvgIconProps } from '@mui/material';
export declare type TreeViewProps = _TreeViewProps & {};
export interface TreeItemProps extends _TreeItemProps {
}
export interface TreeItemContentProps extends _TreeItemContentProps {
}
declare module 'react' {
    interface CSSProperties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}
declare type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon?: React.ElementType<SvgIconProps>;
    labelInfo?: React.ReactNode;
    labelText?: string;
    depth?: number;
};
export declare const TreeItem: (props: StyledTreeItemProps) => JSX.Element;
export declare const TreeView: (props: TreeViewProps) => JSX.Element;
export {};
