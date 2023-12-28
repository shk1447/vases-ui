import React from 'react';
import _LoadingButton, {
  LoadingButtonProps as _LoadingButtonProps,
} from '@mui/lab/LoadingButton';
import { styled } from '@mui/material';

export interface LoadingButtonProps extends _LoadingButtonProps {}

const StyledLoadingButton = styled(({ ...props }: LoadingButtonProps) => (
  <_LoadingButton {...props} />
))(({ theme: _ }) => {
  return {};
});

export const LoadingButton = ({ ...props }: LoadingButtonProps) => {
  const styledLoadingButton = <StyledLoadingButton {...props} />;

  return styledLoadingButton;
};
