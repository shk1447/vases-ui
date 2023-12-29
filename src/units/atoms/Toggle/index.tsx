import React from 'react';
import { styled } from '@mui/material';
import _ToggleButton, {
  ToggleButtonProps as _ToggleButtonProps,
} from '@mui/material/ToggleButton';
import _ToggleButtonGroup, {
  ToggleButtonGroupProps as _ToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';

export interface ToggleButtonProps extends _ToggleButtonProps {}

export interface ToggleButtonGroupProps extends _ToggleButtonGroupProps {}

const StyledToggleButton = styled(({ ...props }: ToggleButtonProps) => (
  <_ToggleButton {...props} />
))(({ theme: _ }) => {
  return {};
});

const StyledToggleButtonGroup = styled(
  ({ ...props }: ToggleButtonGroupProps) => <_ToggleButtonGroup {...props} />,
)(({ theme: _ }) => {
  return {};
});

export const ToggleButton = ({ ...props }: ToggleButtonProps) => {
  return <StyledToggleButton {...props} />;
};

export const ToggleButtonGroup = ({ ...props }: ToggleButtonGroupProps) => {
  return <StyledToggleButtonGroup {...props} />;
};
