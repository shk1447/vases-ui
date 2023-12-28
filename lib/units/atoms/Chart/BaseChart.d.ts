import React from 'react';
import { TooltipComponentOption, GraphicComponentOption } from 'echarts/components';
import type { ECharts, ComposeOption, SetOptionOpts } from 'echarts/core';
import type { BarSeriesOption, PieSeriesOption, LineSeriesOption, GaugeSeriesOption, ScatterSeriesOption } from 'echarts/charts';
export declare type BaseSeriesOption = ComposeOption<BarSeriesOption | PieSeriesOption | LineSeriesOption | GaugeSeriesOption | ScatterSeriesOption | GraphicComponentOption | TooltipComponentOption>;
export interface BaseChartProps {
    theme?: 'light' | 'dark';
    option?: any;
    loading?: boolean;
    settings?: SetOptionOpts;
    className?: string;
    onLoaded?: () => void;
}
export declare type ChartHandle = {
    echarts: () => ECharts | undefined;
    dataZoom?: () => void;
    export?: (fileName: string) => void;
};
export declare const BaseChart: React.ForwardRefExoticComponent<BaseChartProps & React.RefAttributes<ChartHandle>>;
