import React from 'react';
import _Divider, { DividerProps as _DividerProps } from '@mui/material/Divider';
import { styled } from '@mui/material';

export interface DividerProps extends _DividerProps {}

const StyledDivider = styled(({ ...props }: DividerProps) => (
  <_Divider {...props} />
))(({ theme: _ }) => {
  return {};
});

export const Divider = ({ ...props }: DividerProps) => {
  const styledDivider = <StyledDivider {...props} />;

  return styledDivider;
};

export default Divider;
