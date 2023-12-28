import { PropsWithChildren } from 'react';
import { ButtonProps } from '../../units/atoms/Button';
declare const _default: {
    title: string;
    component: ({ ...props }: ButtonProps) => JSX.Element;
};
export default _default;
export declare const Default: {
    (props: PropsWithChildren<ButtonProps>): import("@emotion/react/jsx-runtime").JSX.Element;
    storyName: string;
    args: {
        children: string;
        fullWidth: boolean;
    };
};
