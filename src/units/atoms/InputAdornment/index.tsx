import React from 'react';
import _InputAdornment, { InputAdornmentProps as _InputAdornmentProps } from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';

export interface InputAdornmentProps extends _InputAdornmentProps {}

const StyledInputAdornment = styled(({ ...props }: InputAdornmentProps) => (
  <_InputAdornment {...props} />
))(({ theme: _ }) => {
  return {};
});

export const InputAdornment = ({ ...props }: InputAdornmentProps) => {
  return <StyledInputAdornment {...props} />;
};
