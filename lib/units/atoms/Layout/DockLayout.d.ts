import React from 'react';
import 'rc-dock/dist/rc-dock.css';
import { LayoutProps as _LayoutProps, LayoutData as _LayoutData, DividerData as _DividerData, TabGroup as _TabGroup } from 'rc-dock';
export interface DividerData extends _DividerData {
}
export interface TabGroup extends _TabGroup {
}
export interface LayoutData extends _LayoutData {
}
export interface DockLayoutProps extends _LayoutProps {
}
export declare const DockLayout: (props: DockLayoutProps) => JSX.Element;
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: 'horizontal' | 'vertical';
}
export declare const DividerBox: (props: DividerProps) => JSX.Element;
