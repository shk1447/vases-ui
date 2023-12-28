import React from 'react';
import _Tooltip, { TooltipProps as _TooltipProps } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export interface TooltipProps extends _TooltipProps {}

const StyledToolbar = styled(({ ...props }: TooltipProps) => (
  <_Tooltip {...props} />
))(({ theme: _ }) => {
  return {};
});

export const Tooltip = ({ ...props }: TooltipProps) => {
  return <StyledToolbar {...props} />;
};
