import React from 'react';
import _Paper, { PaperProps as _PaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material';

export interface PaperProps extends _PaperProps {}

const StyledPaper = styled((props: PaperProps) => {
  return <_Paper {...props} />;
})(({ theme: _ }) => {
  return {};
});

export const Paper = (props: PaperProps) => {
  return <StyledPaper {...props} />;
};

export default Paper;
