import React, { useEffect, useMemo, useRef, 
  useImperativeHandle, forwardRef} from 'react';
import * as echarts from 'echarts';
import moment from 'moment';
import { BaseChart, ChartHandle } from './BaseChart';
import { ICON_Add } from '../../styles/icons';

export interface SeriesProps {
  name: string | undefined;
  data: number[];
}

export interface LineChartProps {
  theme?: 'light' | 'dark';
  loading?: boolean;
  title?: string;
  series: SeriesProps[];
  xAxis?: { type?: string; data?: string[] };
  yAxis?: { min?: number; max?: number };
  underArea?: boolean;
  className?: string;
  valueFormatter?: any;
}

export const LineChart = forwardRef(
  (
    {
      theme,
      loading,
      title,
      series,
      xAxis,
      yAxis,
      underArea,
      className,
      valueFormatter,
    }: LineChartProps
    , _ref: React.Ref<ChartHandle>,
  ) => {
  const ref = useRef<ChartHandle>(null);
  
  useImperativeHandle(_ref, () => ({
    echarts() {
      if(ref.current)
      return ref.current.echarts()
    },
  }));

  const option = {
    animation: false,
    title: {
      text: title,
      left: 'center',
      top: '5%',
      textStyle: { fontSize: 13 },
    },
    legend: {
      data: series.map((item: SeriesProps) =>
        item.data && item.data.length > 0 ? item.name : '',
      ),
      bottom: 'bottom',
      left: 'left',
      icon: 'circle',
      type: series.length > 3 ? 'scroll' : 'plain',
      textStyle: { color: 'rgba(247, 247, 247, 1)' },
      pageIconColor: 'rgba(247, 247, 247, 1)',
      pageIconInactiveColor: 'rgba(247, 247, 247, 0.5)',
      pageTextStyle: { color: 'rgba(247, 247, 247, 1)' },
    },
    grid: {
      top: '25%',
      left: '5%',
      right: '5%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: xAxis?.data,
      position: 'bottom',
      boundaryGap: false,
      axisLabel:
        xAxis?.type === 'time'
          ? {
              formatter: function (value: number | string) {
                return moment(value).format('HH:mm');
              },
            }
          : xAxis?.type === 'day'
          ? {
              formatter: function (value: number | string) {
                return moment(value).format('MM-D HH') + 'h';
              },
            }
          : {},
      axisLine: { show: true },
      splitLine: {
        show: true,
      },
      axisPointer: { show: true, type: 'line' },
    },
    yAxis: {
      type: 'value',
      boundaryGap: '20%',
      axisLine: { show: true },
      splitLine: {
        show: true,
      },
      min: yAxis?.min,
      max: yAxis?.max,
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      confine: true,
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
      valueFormatter: valueFormatter
    },
    series: series.map((data: SeriesProps) => {
      return {
        type: 'line',
        name: data.name,
        data: data.data,
        areaStyle: underArea ? {} : null,
      };
    }),
  };

  return (
    <BaseChart
      ref={ref}
      theme={theme}
      loading={loading}
      option={option}
      className={className}
    />
  );
});