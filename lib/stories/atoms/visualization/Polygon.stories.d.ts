/// <reference types="react" />
import { PolygonProps } from '../../../units/atoms/visualization/Polygon';
declare const _default: {
    title: string;
    component: (props: PolygonProps) => JSX.Element;
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
    (props: PolygonProps): JSX.Element;
    storyName: string;
    args: {
        stroke: string;
        strokeWidth: number;
        fill: string;
        fillOpacity: number;
    };
};
