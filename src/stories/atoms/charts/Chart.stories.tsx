
import { jsx, css } from '@emotion/react'
import React from 'react';

import {
  BaseChart,
  BaseChartProps,
} from '../../../units/atoms/Chart/BaseChart';
import {
  GaugeChart,
  GaugeChartProps,
} from '../../../units/atoms/Chart/GaugeChart';
import {
  LineChart,
  LineChartProps,
} from '../../../units/atoms/Chart/LineChart';

export default {
  title: 'VASES-UI/Charts',
  component: BaseChart,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    option: {
      control: 'object',
    },
  },
};

const base_option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' },
  },
  legend: {},
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        rotate: 30,
      },
      data: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Precipitation',
      min: 0,
      max: 250,
      position: 'right',
      axisLabel: {
        formatter: '{value} ml',
      },
    },
    {
      type: 'value',
      name: 'Temperature',
      min: 0,
      max: 25,
      position: 'left',
      axisLabel: {
        formatter: '{value} °C',
      },
    },
  ],
  series: [
    {
      name: 'Precipitation',
      type: 'bar',
      yAxisIndex: 0,
      data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3],
    },
    {
      name: 'Temperature',
      type: 'line',
      smooth: true,
      yAxisIndex: 1,
      data: [
        6.0, 10.2, 10.3, 11.5, 10.3, 13.2, 14.3, 16.4, 18.0, 16.5, 12.0, 5.2,
      ],
    },
  ],
};

const heightClass = css`
  height: 300px;
`;

export const Default = (props: BaseChartProps) => {
  return (
    <BaseChart
      css={css`
        height: 100%;
      `}
      {...props}
    />
  );
};

Default.StoryName = 'Default';
Default.args = {
  option: base_option,
};

export const Gauge = (props: GaugeChartProps) => {
  return (
    <GaugeChart
      css={css`
        height: 100%;
      `}
      {...props}
    />
  );
};

Gauge.StoryName = 'Gauge';
Gauge.args = {
  title: 'gauge title',
  value: 50,
};
Gauge.docs = {
  description: {
    story: '> Guage 형식 차트에 대한 스토리입니다.',
  },
};

export const Line = (props: LineChartProps) => {
  return (
    <LineChart
      css={css`
        height: 100%;
      `}
      {...props}
    />
  );
};

Line.StoryName = 'Line';
Line.args = {
  title: 'gauge title',
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    min: 135,
    max: 260,
  },
  underArea: true,
};
Line.docs = {
  description: {
    story: '> Line 형식 차트에 대한 스토리입니다.',
  },
};
