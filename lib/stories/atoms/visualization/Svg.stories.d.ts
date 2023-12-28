import React from 'react';
import { PolygonProps } from '../../../units/atoms/visualization/Polygon';
import { SvgProps } from '../../../units/atoms/visualization/Svg';
declare const _default: {
    title: string;
    component: ({ size, className, children, }: React.PropsWithChildren<SvgProps>) => JSX.Element;
    argTypes: {
        size: {
            control: string;
        };
    };
    subcomponents: {
        Circle: (props: import("../../../units/atoms/visualization/Circle").CircleProps) => JSX.Element;
    };
};
export default _default;
export declare const svg_Circle: {
    (props: SvgProps): JSX.Element;
    storyName: string;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        size: {
            width: number;
            height: number;
            top: number;
            bottom: number;
        };
    };
};
export declare const svg_Rectangle: {
    (props: SvgProps): JSX.Element;
    storyName: string;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        size: {
            width: number;
            height: number;
            top: number;
            bottom: number;
        };
    };
};
export declare const svg_Polygon: {
    (props: PolygonProps): JSX.Element;
    storyName: string;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        size: {
            width: number;
            height: number;
            top: number;
            bottom: number;
        };
    };
};
