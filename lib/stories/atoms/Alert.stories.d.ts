import { PropsWithChildren } from 'react';
import { Alert, AlertProps } from '../../units/atoms/Alert';
declare const _default: {
    title: string;
    component: typeof Alert;
    argTypes: {
        severity: {
            control: string;
            options: string[];
        };
        variant: {
            control: string;
            options: string[];
        };
    };
};
export default _default;
export declare const Default: {
    (props: PropsWithChildren<AlertProps>): import("@emotion/react/jsx-runtime").JSX.Element;
    storyName: string;
    args: {
        severity: string;
        variant: string;
    };
};
