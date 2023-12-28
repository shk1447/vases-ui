import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import moment from 'moment';
import { BaseChart, ChartHandle } from './BaseChart';

export interface GaugeChartProps {
  theme?: 'light' | 'dark';
  loading?: boolean;
  title?: string;
  value?: number;
  className?: string;
}

export const GaugeChart = ({
  theme,
  loading,
  title,
  value,
  className,
}: GaugeChartProps) => {
  const ref = useRef<ChartHandle>(null);
  const option = {
    animation: false,
    title: {
      text: title,
      left: 'center',
      top: '5%',
      textStyle: { fontSize: 13 },
    },
    tooltip: false,
    series: {
      startAngle: 190,
      endAngle: -10,
      type: 'gauge',
      center: ['50%', '77%'],
      progress: {
        show: true,
        width: 20,
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} %',
        offsetCenter: [0, '-20%'],
      },
      data: [
        {
          value,
        },
      ],
      axisLine: {
        lineStyle: {
          width: 20,
        },
      },
      axisTick: {
        distance: -42,
        splitNumber: 5,
        lineStyle: {
          width: 0.5,
          color: '#999',
        },
      },
      splitLine: {
        distance: -37,
        length: 7,
        lineStyle: {
          width: 1,
          color: '#999',
        },
      },
      axisLabel: {
        distance: -10,
        color: '#999',
        fontSize: 12,
      },
      anchor: {
        show: false,
      },
      pointer: {
        show: false,
      },
    },
  };
  useEffect(() => {
    if (ref.current) {
      const echarts = ref.current.echarts();

      echarts?.on('mousemove', params => {
        echarts.getZr().setCursorStyle('default');
      });
    }
  });

  return (
    <BaseChart
      ref={ref}
      theme={theme}
      loading={loading}
      option={option}
      className={className}
    />
  );
};
