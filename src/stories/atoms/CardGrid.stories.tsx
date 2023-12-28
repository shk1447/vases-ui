import React from 'react';

import { CardGrid, CardGridProps } from '../../units/atoms/CardGrid';

export default {
  title: 'VASES-UI/Atoms/CardGrid',
  component: CardGrid,
  argTypes: {
    gap: {
      control: 'number',
    },
    cards: {
      control: 'array',
    },
  },
};

export const Default = (props: CardGridProps) => (
  <CardGrid {...props}></CardGrid>
);

Default.storyName = 'CardGrid';
Default.args = {
  cards: [1, 2, 3, 4],
  gap: 10,
  cardSize: { width: '100px', height: '100px' },
};
