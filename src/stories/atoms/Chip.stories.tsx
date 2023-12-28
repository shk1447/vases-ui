import React from 'react';
import { Chip, ChipProps } from '../../units/atoms/Chip';
import { ICON_PhotoCamera } from '../../units/styles/icons';

export default {
  title: 'VASES-UI/Atoms/Chip',
  component: Chip,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Icon',
    },
    onDelete: {
      control: 'boolean',
    },
  },
};

export const Default = (props: ChipProps) => (
  <Chip {...props} color="primary" />
);
Default.storyName = 'Chip';
Default.args = {
  onDelete: true,
};
