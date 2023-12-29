
import { jsx, css } from '@emotion/react'
import React, { PropsWithChildren } from 'react';

import { Alert, AlertProps } from '../../units/atoms/Alert/Alert';

export default {
  title: 'VASES-UI/Atoms/Alert',
  component: Alert,
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
    },
  },
};

export const Default = (props: PropsWithChildren<AlertProps>) => (
  <Alert {...props}>{props.children}</Alert>
);

Default.storyName = 'Alert';
Default.args = {
  severity: 'success',
  variant: 'filled',
};
