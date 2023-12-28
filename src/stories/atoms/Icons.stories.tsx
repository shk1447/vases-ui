
import { jsx, css } from '@emotion/react'
import React, { PropsWithChildren } from 'react';
import { iconMap } from '../IconMap';

export const Icons = (props: { icon: string }) => {
  return <>{iconMap[props.icon]}</>;
};

export default {
  title: 'VASES-UI/Atoms/Icons',
  component: Icons,
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      defaultValue: 'ICON_Add',
    },
  },
};
