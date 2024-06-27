import _ToggleButton, {
  ToggleButtonProps as _ToggleButtonProps,
} from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';
import { Children } from 'react';

export interface ToggleButtonProps extends _ToggleButtonProps {}

const StyledToggleButton = styled(({ ...props }: ToggleButtonProps) => (
  <_ToggleButton {...props} />
))(({ theme: _ }) => {
  return {};
});

export const ToggleButton = ({ ...props }: ToggleButtonProps) => {
  const styled = (
    <StyledToggleButton {...props}>
      {Children.toArray(props.children)}
    </StyledToggleButton>
  );

  return styled;
};
