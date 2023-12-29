/// <reference types="react" />
import { SelectProps as _SelectProps } from '@mui/material/Select';
import { MenuItemProps as _MenuItemProps } from '@mui/material/MenuItem';
export interface SelectProps extends _SelectProps {
}
export interface SelectItemProps extends _MenuItemProps {
}
export declare const Select: (props: SelectProps) => JSX.Element;
export declare const Option: (props: SelectItemProps) => JSX.Element;
