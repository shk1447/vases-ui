import React from 'react';
import _TextField, {
  TextFieldProps as _TextFieldProps,
} from '@mui/material/TextField';
import { styled } from '@mui/material';

export type TextFieldProps = _TextFieldProps;

const StyledTextField = styled(({ ...props }: TextFieldProps) => (
  <_TextField {...props} />
))(({ theme: _ }) => {
  return {
    
  };
});

export const TextField = ({ ...props }: TextFieldProps) => {
  return (
    <StyledTextField
      autoComplete={props.autoComplete ? props.autoComplete : 'off'}
      {...props}
    />
  );
};
