import React from 'react';

import { Circle } from './Circle';
import {
  Polygon,
  PolygonProps,
} from './Polygon';
import { Rectangle } from './Rectangle';
import { Svg, SvgProps } from './Svg';

export default {
  title: 'VASES-UI/Graphics/Svg',
  component: Svg,
  argTypes: {
    size: {
      control: 'object',
    },
  },
  subcomponents: { Circle },
};

export const svg_Circle = (props: SvgProps) => (
  <Svg {...props}>
    <Circle r={50} cx={50} cy={50}></Circle>
  </Svg>
);
svg_Circle.storyName = 'Circle';
svg_Circle.parameters = {
  docs: {
    description: {
      story: '> Circle을 그리는 svg에 대한 스토리입니다.',
    },
  },
};
svg_Circle.args = {
  size: {
    width: 100,
    height: 100,
    top: 0,
    bottom: 0,
  },
};

export const svg_Rectangle = (props: SvgProps) => {
  return (
    <Svg {...props}>
      <Rectangle width={100} height={100} x={0} y={0}></Rectangle>
    </Svg>
  );
};
svg_Rectangle.storyName = 'Rectangle';
svg_Rectangle.parameters = {
  docs: {
    description: {
      story: '> Rectangle을 그리는 svg에 대한 스토리입니다.',
    },
  },
};
svg_Rectangle.args = {
  size: {
    width: 100,
    height: 100,
    top: 0,
    bottom: 0,
  },
};

export const svg_Polygon = (props: PolygonProps) => {
  return (
    <Svg {...props}>
      <Polygon fill="" fillOpacity={50} stroke=""></Polygon>
    </Svg>
  );
};
svg_Polygon.storyName = 'Polygon';
svg_Polygon.parameters = {
  docs: {
    description: {
      story: '> Polygon을 그리는 svg에 대한 스토리입니다.',
    },
  },
};
svg_Polygon.args = {
  size: {
    width: 100,
    height: 100,
    top: 0,
    bottom: 0,
  },
};
