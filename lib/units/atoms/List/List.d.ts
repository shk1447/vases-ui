/// <reference types="react" />
import { ListProps as _ListProps } from '@mui/material/List';
import { ListSubheaderProps as _ListSubheaderProps } from '@mui/material/ListSubheader';
export interface ListProps extends _ListProps {
    component?: string;
    className?: string;
}
export interface ListSubheaderProps extends _ListSubheaderProps {
    component?: string;
    className?: string;
}
export declare const List: ({ ...props }: ListProps) => JSX.Element;
export declare const ListSubheader: ({ ...props }: ListSubheaderProps) => JSX.Element;
