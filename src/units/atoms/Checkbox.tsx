import React from 'react';
import _Checkbox, {
  CheckboxProps as _CheckboxProps,
} from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material';

export interface CheckboxProps extends _CheckboxProps {
  label?: string;
  labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
}

const StyledCheckbox = styled(({ ...props }: CheckboxProps) => (
  <FormGroup>
    <FormControlLabel
      disabled={props.disabled}
      label={props.label}
      labelPlacement={props.labelPlacement}
      control={<_Checkbox {...props} />}
    />
  </FormGroup>
))(({ theme: _ }) => {
  return {};
});

export const Checkbox = (props: CheckboxProps) => {
  const { label } = props;
  const styledCheckbox = label ? (
    <StyledCheckbox {...props} />
  ) : (
    <_Checkbox {...props} />
  );

  return styledCheckbox;
};
