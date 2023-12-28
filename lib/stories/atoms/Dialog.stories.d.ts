/// <reference types="react" />
import { DialogProps } from '../../units/atoms/Dialog';
declare const _default: {
    title: string;
    component: ({ ...props }: import("@mui/material").DialogProps) => JSX.Element;
    argTypes: {
        open: {
            control: string;
            defaultValue: boolean;
        };
        fullScreen: {
            control: string;
            defaultValue: boolean;
        };
        fullWidth: {
            control: string;
            defaultValue: boolean;
        };
        maxWidth: {
            control: {
                type: string;
            };
            options: string[];
            defaultValue: string;
        };
        scroll: {
            control: {
                type: string;
            };
            options: string[];
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: DialogProps): JSX.Element;
    storyName: string;
};
