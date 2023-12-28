import React from 'react';
import { BaseChartProps } from '../../../units/atoms/Chart/BaseChart';
import { GaugeChartProps } from '../../../units/atoms/Chart/GaugeChart';
import { LineChartProps } from '../../../units/atoms/Chart/LineChart';
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<BaseChartProps & React.RefAttributes<import("../../../units/atoms/Chart/BaseChart").ChartHandle>>;
    argTypes: {
        theme: {
            control: {
                type: string;
            };
            options: string[];
            defaultValue: string;
        };
        loading: {
            control: string;
            defaultValue: boolean;
        };
        option: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: BaseChartProps): import("@emotion/react/jsx-runtime").JSX.Element;
    StoryName: string;
    args: {
        option: {
            tooltip: {
                trigger: string;
                axisPointer: {
                    type: string;
                };
            };
            legend: {};
            xAxis: {
                type: string;
                axisTick: {
                    alignWithLabel: boolean;
                };
                axisLabel: {
                    rotate: number;
                };
                data: string[];
            }[];
            yAxis: {
                type: string;
                name: string;
                min: number;
                max: number;
                position: string;
                axisLabel: {
                    formatter: string;
                };
            }[];
            series: ({
                name: string;
                type: string;
                yAxisIndex: number;
                data: number[];
                smooth?: undefined;
            } | {
                name: string;
                type: string;
                smooth: boolean;
                yAxisIndex: number;
                data: number[];
            })[];
        };
    };
};
export declare const Gauge: {
    (props: GaugeChartProps): import("@emotion/react/jsx-runtime").JSX.Element;
    StoryName: string;
    args: {
        title: string;
        value: number;
    };
    docs: {
        description: {
            story: string;
        };
    };
};
export declare const Line: {
    (props: LineChartProps): import("@emotion/react/jsx-runtime").JSX.Element;
    StoryName: string;
    args: {
        title: string;
        series: {
            data: number[];
            type: string;
        }[];
        xAxis: {
            type: string;
            data: string[];
        };
        yAxis: {
            min: number;
            max: number;
        };
        underArea: boolean;
    };
    docs: {
        description: {
            story: string;
        };
    };
};
