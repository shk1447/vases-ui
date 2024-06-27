import _ButtonGroup, {
  ButtonGroupProps as _ButtonGroupProps,
} from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import { Children } from 'react';

export interface ButtonGroupProps extends _ButtonGroupProps {}

const StyledButtonGroup = styled(({ ...props }: ButtonGroupProps) => (
  <_ButtonGroup {...props} />
))(({ theme: _ }) => {
  return {};
});

export const ButtonGroup = ({ ...props }: ButtonGroupProps) => {
  const styled = (
    <StyledButtonGroup {...props}>
      {Children.toArray(props.children)}
    </StyledButtonGroup>
  );

  return styled;
};
