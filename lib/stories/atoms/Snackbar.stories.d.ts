/// <reference types="react" />
import { SnackbarProps } from '../../units/atoms/Snackbar';
declare const _default: {
    title: string;
    component: ({ ...props }: SnackbarProps) => JSX.Element;
    open: {
        type: string;
    };
    message: {
        type: string;
    };
    anchorOrigin: {
        type: string;
    };
    autoHideDuration: {
        type: string;
    };
    key: {
        type: string;
    };
    resumeHideDuration: {
        type: string;
    };
};
export default _default;
export declare const Default: {
    (props: SnackbarProps): JSX.Element;
    storyName: string;
    args: {
        open: boolean;
        message: string;
        anchorOrigin: {
            vertical: string;
            horizontal: string;
        };
        autoHideDuration: number;
        key: string;
        resumeHideDuration: number;
    };
};
