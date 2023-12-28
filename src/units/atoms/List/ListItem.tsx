import React from 'react';
import _ListItemButton, {
  ListItemButtonProps as _ListItemButtonProps,
} from '@mui/material/ListItemButton';
import _ListItemIcon, {
  ListItemIconProps as _ListItemIconProps,
} from '@mui/material/ListItemIcon';
import _ListItemText, {
  ListItemTextProps as _ListItemTextProps,
} from '@mui/material/ListItemText';
import { styled } from '@mui/material';

import _ListItem, {
  ListItemProps as _ListItemProps,
} from '@mui/material/ListItem';

export interface ListItemProps extends _ListItemProps {}

export interface ListItemButtonProps extends _ListItemButtonProps {}

export interface ListItemIconProps extends _ListItemIconProps {}

export interface ListItemTextProps extends _ListItemTextProps {}

const StyledListItem = styled(({ ...props }: ListItemProps) => (
  <_ListItem {...props} />
))(({ theme: _ }) => {
  return {};
});

const StyledListItemButton = styled(({ ...props }: ListItemButtonProps) => (
  <_ListItemButton {...props} />
))(({ theme: _ }) => {
  return {
    '&': {
      paddingLeft: '16px !important',
    },
  };
});

const StyledListItemIcon = styled(({ ...props }: ListItemIconProps) => (
  <_ListItemIcon {...props} />
))(({ theme: _ }) => {
  return {};
});

const StyledListItemText = styled(({ ...props }: ListItemTextProps) => (
  <_ListItemText {...props} />
))(({ theme: _ }) => {
  return {};
});

export const ListItemButton = ({ ...props }: ListItemButtonProps) => {
  const styledListItemButton = <StyledListItemButton {...props} />;

  return styledListItemButton;
};

export const ListItemIcon = ({ ...props }: ListItemIconProps) => {
  const styledListItemIcon = <StyledListItemIcon {...props} />;

  return styledListItemIcon;
};

export const ListItemText = ({ ...props }: ListItemTextProps) => {
  const styledListItemText = <StyledListItemText {...props} />;

  return styledListItemText;
};

export const ListItem = ({ ...props }: ListItemProps) => {
  const styledListItem = <StyledListItem {...props}></StyledListItem>;
  return styledListItem;
};
