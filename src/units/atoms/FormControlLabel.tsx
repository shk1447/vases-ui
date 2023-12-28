import React from 'react';
import _FormControlLabel, { FormControlLabelProps as _FormControlLabelProps } from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

export interface FormControlLabelProps extends _FormControlLabelProps {}

const StyledFormControlLabel = styled(({ ...props }: FormControlLabelProps) => (
  <_FormControlLabel {...props} />
))(({ theme: _ }) => {
  return {};
});

export const FormControlLabel = ({ ...props }: FormControlLabelProps) => {
  return <StyledFormControlLabel {...props} />;
};
