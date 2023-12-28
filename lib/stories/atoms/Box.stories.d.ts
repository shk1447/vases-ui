import { PropsWithChildren } from 'react';
import { BoxProps } from '../../units/atoms/Box';
declare const _default: {
    title: string;
    component: (props: BoxProps) => JSX.Element;
};
export default _default;
export declare const Default: {
    (props: PropsWithChildren<BoxProps>): import("@emotion/react/jsx-runtime").JSX.Element;
    storyName: string;
    args: {
        children: string;
        border: string;
        height: string;
    };
};
