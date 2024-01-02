import React from 'react';
import _AppBar, { AppBarProps as _AppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material';

export interface AppBarProps extends _AppBarProps {}

const StyledAppBar = styled(({ ...props }: AppBarProps) => (
  <_AppBar {...props} />
))(({ theme: _ }) => {
  
  return {
    '&': {
      height: '100%',
    },
  };
});

export const AppBar = ({ ...props }: AppBarProps) => {
  const styledAppBar = <StyledAppBar {...props} />;

  return styledAppBar;
};
