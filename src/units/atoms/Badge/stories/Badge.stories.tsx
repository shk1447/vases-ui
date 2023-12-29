import React, { PropsWithChildren } from 'react';

import { Badge, BadgeProps } from '..';
import { ICON_Menu } from '../../../styles/icons';

export default {
  title: 'VASES-UI/Atoms/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
        'string',
      ],
    },
    overlap: {
      control: { type: 'select' },
      options: ['circular', 'rectangular'],
    },
    anchorOrigin: {
      control: 'object',
      horizontal: {
        control: { type: 'select' },
        options: ['left', 'right'],
      },
      vertical: {
        control: { type: 'select' },
        options: ['bottom', 'top'],
      },
    },
  },
};

export const Default = (props: PropsWithChildren<BadgeProps>) => (
  <Badge badgeContent={4} {...props}>
    {/* <ICON_Menu /> */}
  </Badge>
);

Default.storyName = 'Badge';
Default.args = {
  color: 'primary',
  anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
};
