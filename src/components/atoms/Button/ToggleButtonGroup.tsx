import _ToggleButtonGroup, {
  ToggleButtonGroupProps as _ToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { Children } from 'react';

export interface ToggleButtonGroupProps extends _ToggleButtonGroupProps {}

const StyledToggleButtonGroup = styled(
  ({ ...props }: ToggleButtonGroupProps) => <_ToggleButtonGroup {...props} />,
)(({ theme: _ }) => {
  return {};
});

export const ToggleButtonGroup = ({ ...props }: ToggleButtonGroupProps) => {
  const styled = (
    <StyledToggleButtonGroup {...props}>
      {Children.toArray(props.children)}
    </StyledToggleButtonGroup>
  );

  return styled;
};
