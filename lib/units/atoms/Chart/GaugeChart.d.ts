/// <reference types="react" />
export interface GaugeChartProps {
    theme?: 'light' | 'dark';
    loading?: boolean;
    title?: string;
    value?: number;
    className?: string;
}
export declare const GaugeChart: ({ theme, loading, title, value, className, }: GaugeChartProps) => JSX.Element;
