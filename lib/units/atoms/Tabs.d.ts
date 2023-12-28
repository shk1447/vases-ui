/// <reference types="react" />
import { TabProps as _TabProps } from '@mui/material/Tab';
import { TabsProps as _TabsProps } from '@mui/material/Tabs';
export interface TabProps extends _TabProps {
}
export interface TabsProps extends _TabsProps {
    height?: number;
}
export declare const Tab: ({ ...props }: TabProps) => JSX.Element;
export declare const Tabs: ({ ...props }: TabsProps) => JSX.Element;
