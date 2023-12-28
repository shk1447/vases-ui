import React from 'react';
import _Switch, { SwitchProps as _SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

export interface SwitchProps extends _SwitchProps {}

const StyledSwitch = styled(({ ...props }: SwitchProps) => (
  <_Switch {...props} />
))(({ theme: _ }) => {
  return {};
});

export const Switch = ({ ...props }: SwitchProps) => {
  return <StyledSwitch {...props} />;
};
