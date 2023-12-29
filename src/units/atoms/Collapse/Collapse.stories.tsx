import React from 'react';

import { Collapse, CollapseProps } from '.';

export default {
  title: 'VASES-UI/Atoms/Collapse',
  component: Collapse,
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    timeout: {
      control: 'text',
    },
  },
};

export const Default = (props: CollapseProps) => (
  <Collapse {...props}>Collapse</Collapse>
);

Default.storyName = 'Collapse';
Default.args = {
  in: false,
  timeout: 'auto',
  orientation: 'horizontal',
};
