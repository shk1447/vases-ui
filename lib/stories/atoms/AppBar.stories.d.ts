import { PropsWithChildren } from 'react';
import { AppBarProps } from '../../units/atoms/AppBar';
declare const _default: {
    title: string;
    component: ({ ...props }: AppBarProps) => JSX.Element;
    argTypes: {
        color: {
            control: string;
            defaultValue: string;
            options: string[];
        };
        position: {
            control: string;
            defaultValue: string;
            options: string[];
        };
    };
};
export default _default;
export declare const Default: {
    (props: PropsWithChildren<AppBarProps>): JSX.Element;
    storyName: string;
};
