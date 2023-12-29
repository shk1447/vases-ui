import React from 'react';
import { ParamsMap, VideoProps } from '../../units/atoms/Video';
declare const _default: {
    title: string;
    component: React.MemoExoticComponent<React.ForwardRefExoticComponent<VideoProps<keyof ParamsMap> & React.RefAttributes<import("../../units/atoms/Video").VideoHandle>>>;
    argTypes: {
        type: {
            control: {
                type: string;
            };
            options: string[];
        };
        autoPlay: {
            control: string;
        };
        muted: {
            control: string;
        };
        controls: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: VideoProps<keyof ParamsMap>): JSX.Element;
    storyName: string;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        autoPlay: boolean;
        muted: boolean;
        controls: boolean;
        type: string;
        params: {
            url: string;
        };
    };
};
