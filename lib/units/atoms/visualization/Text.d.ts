import React from 'react';
import { TextProps } from '@visx/text/lib/Text';
/**
  verticalAnchor="start" 를 default로 해두어야,
  초기 위치가 svg canvas의 0,0에 위치한다.
*/
export declare const StyledText: import("@emotion/styled").StyledComponent<{
    className?: string | undefined;
    scaleToFit?: boolean | "shrink-only" | undefined;
    angle?: number | undefined;
    textAnchor?: "inherit" | "start" | "end" | "middle" | undefined;
    verticalAnchor?: "start" | "end" | "middle" | undefined;
    style?: React.CSSProperties | undefined;
    innerRef?: React.Ref<SVGSVGElement> | undefined;
    innerTextRef?: React.Ref<SVGTextElement> | undefined;
    x?: string | number | undefined;
    y?: string | number | undefined;
    dx?: string | number | undefined;
    dy?: string | number | undefined;
    lineHeight?: string | number | undefined;
    capHeight?: string | number | undefined;
    fontSize?: string | number | undefined;
    fontFamily?: string | undefined;
    fill?: string | undefined;
    width?: number | undefined;
    children?: string | number | undefined;
} & Omit<React.SVGAttributes<SVGTextElement>, keyof {
    className?: string | undefined;
    scaleToFit?: boolean | "shrink-only" | undefined;
    angle?: number | undefined;
    textAnchor?: "inherit" | "start" | "end" | "middle" | undefined;
    verticalAnchor?: "start" | "end" | "middle" | undefined;
    style?: React.CSSProperties | undefined;
    innerRef?: React.Ref<SVGSVGElement> | undefined;
    innerTextRef?: React.Ref<SVGTextElement> | undefined;
    x?: string | number | undefined;
    y?: string | number | undefined;
    dx?: string | number | undefined;
    dy?: string | number | undefined;
    lineHeight?: string | number | undefined;
    capHeight?: string | number | undefined;
    fontSize?: string | number | undefined;
    fontFamily?: string | undefined;
    fill?: string | undefined;
    width?: number | undefined;
    children?: string | number | undefined;
}> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Text: (props: TextProps) => JSX.Element;
