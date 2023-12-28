import { PropsWithChildren } from 'react';
import { BadgeProps } from '../../units/atoms/Badge';
declare const _default: {
    title: string;
    component: (props: BadgeProps) => JSX.Element;
    argTypes: {
        color: {
            control: {
                type: string;
            };
            options: string[];
        };
        overlap: {
            control: {
                type: string;
            };
            options: string[];
        };
        anchorOrigin: {
            control: string;
            horizontal: {
                control: {
                    type: string;
                };
                options: string[];
            };
            vertical: {
                control: {
                    type: string;
                };
                options: string[];
            };
        };
    };
};
export default _default;
export declare const Default: {
    (props: PropsWithChildren<BadgeProps>): JSX.Element;
    storyName: string;
    args: {
        color: string;
        anchorOrigin: {
            horizontal: string;
            vertical: string;
        };
    };
};
