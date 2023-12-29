import React, { PropsWithChildren } from 'react';
export interface SvgProps {
    size?: any;
    width?: number;
    height?: number;
    children?: React.ReactNode;
    className?: string;
}
export interface CalculateRatioProps {
    width: number;
    height: number;
}
export declare const CalculateRatio: ({ width, height }: CalculateRatioProps) => {
    wRatio: number;
    hRatio: number;
};
export declare const CalculateRevertRatio: ({ width, height }: CalculateRatioProps) => {
    wRatio: number;
    hRatio: number;
};
export declare const Svg: ({ size, className, children, }: PropsWithChildren<SvgProps>) => JSX.Element;
