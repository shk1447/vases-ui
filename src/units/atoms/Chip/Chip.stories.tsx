import React from 'react';
import { Chip, ChipProps } from '.';
import { ICON_PhotoCamera } from '../../styles/icons';

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
