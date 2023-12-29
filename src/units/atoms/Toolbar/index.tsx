import React from 'react';
import _Toolbar, { ToolbarProps as _ToolbarProps } from '@mui/material/Toolbar';
import { styled } from '@mui/material';

export interface ToolbarProps extends _ToolbarProps {}

const StyledToolbar = styled(({ ...props }: ToolbarProps) => (
  <_Toolbar {...props} />
))(({ theme: _ }) => {
  return {
    '&': {
      height: '100%',
      minHeight: '100%',
      padding: 16,
      gap: 4,
    },
  };
});

export const Toolbar = ({ ...props }: ToolbarProps) => {
  const styledToolbar = <StyledToolbar {...props} />;

  return styledToolbar;
};
