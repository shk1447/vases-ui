import React from 'react';
import _Box, { BoxProps as _BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material';

export interface BoxProps extends _BoxProps {}

const StyledBox = styled((props: BoxProps) => {
  return <_Box {...props} />;
})(({ theme: _ }) => {
  return {};
});

export const Box = (props: BoxProps) => {
  return <StyledBox {...props} />;
};

export default Box;
