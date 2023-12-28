import React from 'react';
import { styled } from '@mui/material';
import _Alert, { AlertProps as _AlertProps } from '@mui/material/Alert';

export interface AlertProps extends _AlertProps {}

export const CustomAlert = styled(({ ...props }: AlertProps) => (
  <_Alert {...props} />
))(({ theme: _ }) => {
  console.log(_);

  return {
    '&': {
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${_.custom?.border}`,
    },
    '& .MuiAlert-message': {
      padding: 0,
    },
  };
});

export function Alert({ ...props }: AlertProps) {
  return <CustomAlert {...props} />;
}
