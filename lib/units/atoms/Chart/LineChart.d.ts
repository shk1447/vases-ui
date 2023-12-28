import React from 'react';
import { ChartHandle } from './BaseChart';
export interface SeriesProps {
    name: string | undefined;
    data: number[];
}
export interface LineChartProps {
    theme?: 'light' | 'dark';
    loading?: boolean;
    title?: string;
    series: SeriesProps[];
    xAxis?: {
        type?: string;
        data?: string[];
    };
    yAxis?: {
        min?: number;
        max?: number;
    };
    underArea?: boolean;
    className?: string;
    valueFormatter?: any;
}
export declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<ChartHandle>>;
