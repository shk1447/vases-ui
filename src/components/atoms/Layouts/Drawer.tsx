import React from 'react';
import { Drawer as _Drawer, DrawerProps as _DrawerProps } from '@mui/material';

export interface DrawerProps extends _DrawerProps {}
export const Drawer = (props: DrawerProps) => {
  return <_Drawer {...props}>{props.children}</_Drawer>;
};

export default Drawer;
