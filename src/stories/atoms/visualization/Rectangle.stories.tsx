import React from 'react';

import {
  Rectangle,
  RectangleProps,
} from '../../../units/atoms/Vector/Rectangle';

export default {
  title: 'VASES-UI/Visualization/Rectangle',
  component: Rectangle,
};

export const Default = (props: RectangleProps) => (
  <svg>
    <Rectangle {...props}></Rectangle>
  </svg>
);
Default.storyName = 'Default';
Default.args = {
  width: 100,
  height: 100,
  x: 0,
  y: 0,
  rx: 0,
  ry: 0,
  stroke: '#15178a',
  strokeWidth: 10,
  fill: '#15178a',
  fillOpacity: 50,
  storkeDasharray: 0,
  anmation: '',
};
