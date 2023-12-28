import React, { useState } from 'react';

import { Checkbox, CheckboxProps } from '../../units/atoms/Checkbox';

export default {
  title: 'VASES-UI/Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
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
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
};

export const Default = (props: CheckboxProps) => {
  return <Checkbox {...props}></Checkbox>;
};

Default.storyName = 'Checkbox';
Default.args = {
  label: 'Label',
  disabled: false,
  checked: false,
  color: 'primary',
  size: 'small',
};
