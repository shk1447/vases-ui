import React, { useState } from 'react';

import { Tab, TabProps, Tabs, TabsProps } from '..';
import { ICON_Add } from '../../../styles/icons';
import { PropsWithItems } from '../../../PropsWithItems';

export default {
  title: 'VASES-UI/Atoms/Tabs',
  component: Tab,
  argTypes: {
    orientaition: {
      type: 'select',
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
    },
    textColor: {
      type: 'select',
      defaultValue: 'primary',
      options: ['inherit', 'primary', 'secondary'],
    },
    variant: {
      type: 'select',
      defaultValue: 'standard',
      options: ['fullWidth', 'scrollable', 'standard'],
    },
    indicatorColor: {
      type: 'text',
      defaultValue: 'primary',
    },
  },
};

export const Default = (props: PropsWithItems<TabsProps>) => {
  return (
    <Tabs value={props.value} aria-label="wrapped label tabs example">
      {props.items.map(item => {
        return <Tab value={item.value} label={item.label} />;
      })}
    </Tabs>
  );
};

Default.storyName = 'Tabs';
Default.args = {
  value: '01',
  items: [
    {
      value: '01',
      label: 'Tab 01',
    },
    {
      value: '02',
      label: 'Tab 02',
    },
    {
      value: '03',
      label: 'Tab 03',
    },
  ],
};
Default.parameters = {
  docs: {
    description: {
      story: '> 여러개의 탭에 대한 스토리입니다.',
    },
  },
};
