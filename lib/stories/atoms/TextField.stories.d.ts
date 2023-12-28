/// <reference types="react" />
import { TextFieldProps } from '../../units/atoms/TextField';
declare const _default: {
    title: string;
    component: ({ ...props }: import("@mui/material").TextFieldProps) => JSX.Element;
};
export default _default;
export declare const Default: {
    (props: TextFieldProps): JSX.Element;
    storyName: string;
    args: {
        label: string;
        focused: boolean;
        fullWidth: boolean;
    };
};
