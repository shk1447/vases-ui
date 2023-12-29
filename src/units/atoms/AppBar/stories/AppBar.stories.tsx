import React, { PropsWithChildren } from 'react';

import { AppBar, AppBarProps } from '..';

export default {
  title: 'VASES-UI/Atoms/AppBar',
  component: AppBar,
  argTypes: {
    color: {
      control: 'select',
      defaultValue: 'primary',
      options: ['default', 'inherit', 'primary', 'secondary', 'transparent'],
    },
    position: {
      control: 'select',
      defaultValue: 'sticky',
      options: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
    },
  },
};

export const Default = (props: PropsWithChildren<AppBarProps>) => (
  <AppBar {...props} variant={'outlined'}></AppBar>
);

Default.storyName = 'AppBar';
