/// <reference types="react" />
import { CircleProps } from '../../../units/atoms/visualization/Circle';
declare const _default: {
    title: string;
    component: (props: CircleProps) => JSX.Element;
    argTypes: {
        stroke: {
            control: string;
        };
        fill: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: CircleProps): JSX.Element;
    storyName: string;
    args: {
        r: number;
        cx: number;
        cy: number;
        stroke: string;
        strokeWidth: number;
        fill: string;
        fillOpacity: number;
    };
};
