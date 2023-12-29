import React from 'react';
import {
  Polygon,
  PolygonProps,
} from './Polygon';

export default {
  title: 'VASES-UI/Graphics/Polygon',
  component: Polygon,
  argTypes: {
    stroke: {
      control: 'color',
    },
    fill: {
      control: 'color',
    },
  },
};

export const Default = (props: PolygonProps) => (
  <svg>
    <Polygon {...props}></Polygon>
  </svg>
);
Default.storyName = 'Default';
Default.args = {
  stroke: '#3c2b47',
  strokeWidth: 5,
  fill: '#3c2b47',
  fillOpacity: 10,
};
