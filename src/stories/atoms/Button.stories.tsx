
import { jsx, css } from '@emotion/react'
import React, { PropsWithChildren } from 'react';

import { Button, ButtonProps } from '../../units/atoms/Button';

export default {
  title: 'VASES-UI/Atoms/Button',
  component: Button,
};

export const Default = (props: PropsWithChildren<ButtonProps>) => (
  <Button {...props}>{props.children}</Button>
);
Default.storyName = 'Button';

Default.args = {
  children: 'Button',
  fullWidth: true,
};
