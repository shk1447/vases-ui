import React from 'react';
import _Menu, { MenuProps as _MenuProps } from '@mui/material/Menu';
import _MenuItem, {
  MenuItemProps as _MenuItemProps,
} from '@mui/material/MenuItem';
import { styled } from '@mui/material';

export interface MenuProps extends _MenuProps {}

export interface MenuItemProps extends _MenuItemProps {}

const StyledMenu = styled((props: MenuProps) => <_Menu {...props} />)(
  ({ theme: _ }) => ({
    '& .MuiPaper-root': {},
    '& .MuiMenu-list': {},
  }),
);

const StyledMenuItem = styled((props: MenuItemProps) => (
  <_MenuItem {...props} />
))(({ theme: _ }) => ({
  '& .MuiPaper-root': {
    borderRadius: 8,
  },
  '& .MuiMenu-list': {
    padding: 0,
  },
}));

export const Menu = (props: MenuProps) => {
  return <StyledMenu {...props} />;
};

export const MenuItem = (props: MenuItemProps) => {
  return <StyledMenuItem {...props} />;
};
