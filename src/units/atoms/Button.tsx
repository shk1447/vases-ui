import React from 'react';
import _Button, { ButtonProps as _ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material';

export interface ButtonProps extends _ButtonProps {}

const StyledButton = styled(({ ...props }: ButtonProps) => (
  <_Button {...props} />
))(({ theme: _ }) => {
  return {};
});

export const Button = ({ ...props }: ButtonProps) => {
  const { variant = 'outlined' } = props;
  const styledButton = <StyledButton {...props} variant={variant} />;

  return styledButton;
};
