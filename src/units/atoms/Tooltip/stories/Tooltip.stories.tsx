import React from 'react';

import { Tooltip, TooltipProps } from '..';

import { jsx, css } from '@emotion/react'

export default {
  title: 'VASES-UI/Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    arrow: {
      control: 'boolean',
    },
    placement: {
      control: { type: 'select' },
      options: [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top',
      ],
      open: { control: 'boolean', defaultValue: true },
      leaveDelay: {
        control: 'number',
      },
      enterDelay: {
        control: 'number',
      },
      title: {
        control: 'text',
      },
    },
  },
};

export const Default = (props: TooltipProps) => (
  <Tooltip {...props}>
    <div
      css={css`
        width: 1px;
        height: 1px;
      `}
    />
  </Tooltip>
);

Default.storyName = 'Tooltip';
Default.args = {
  open: true,
  leaveDelay: 0,
  enterDelay: 0,
  title: 'Add Tooltip',
  arrow: true,
};
