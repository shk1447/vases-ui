import React from 'react';

import { IconButton, IconButtonProps } from '../../units/atoms/IconButton';
import { iconMap } from '../IconMap';

export default {
  title: 'VASES-UI/Atoms/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      defaultValue: 'ICON_Add',
    },
  },
};

export const Default = (props: IconButtonProps & { icon: string }) => (
  <IconButton {...props}>{iconMap[props.icon]}</IconButton>
);

Default.storyName = 'IconButton';
Default.args = {};
