import React from 'react';
import 'rc-dock/dist/rc-dock.css';
import {
  DockLayout as _DockLayout,
  LayoutProps as _LayoutProps,
  LayoutData as _LayoutData,
  DividerBox as _DividerBox,
  DividerData as _DividerData,
  TabGroup as _TabGroup,
} from 'rc-dock';

export interface DividerData extends _DividerData {}
export interface TabGroup extends _TabGroup {}
export interface LayoutData extends _LayoutData {}
export interface DockLayoutProps extends _LayoutProps {}

export const DockLayout = (props: DockLayoutProps) => {
  return <_DockLayout {...props}></_DockLayout>;
};
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'horizontal' | 'vertical';
}
export const DividerBox = (props: DividerProps) => {
  return <_DividerBox {...props} />;
};
