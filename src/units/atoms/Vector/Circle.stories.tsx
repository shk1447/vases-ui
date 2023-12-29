import React from 'react';
import { Circle, CircleProps } from './Circle';

export default {
  title: 'VASES-UI/Graphics/Circle',
  component: Circle,
  argTypes: {
    stroke: {
      control: 'color',
    },
    fill: {
      control: 'color',
    },
  },
};

export const Default = (props: CircleProps) => (
  <svg>
    <Circle {...props}></Circle>
  </svg>
);
Default.storyName = 'Default';
Default.args = {
  r: 50,
  cx: 55,
  cy: 55,
  stroke: '#3c2b47',
  strokeWidth: 5,
  fill: '#3c2b47',
  fillOpacity: 10,
};
