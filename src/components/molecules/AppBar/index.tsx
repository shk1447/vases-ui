import _AppBar, { AppBarProps as _AppBarProps } from '@mui/material/AppBar';
import _Toolbar, { ToolbarProps as _ToolBarProps } from '@mui/material/Toolbar';

export interface AppBarProps extends _AppBarProps {}
export interface ToolBarProps extends _ToolBarProps {}

export const AppBar = (props: AppBarProps) => {
  return <_AppBar {...props}>{props.children}</_AppBar>;
};

export const ToolBar = (props: ToolBarProps) => {
  return <_Toolbar {...props}>{props.children}</_Toolbar>;
};
