/// <reference types="react" />
import { SnackbarProps as _SnackbarProps } from '@mui/material/Snackbar';
import { SnackbarProviderProps as _SnackbarProviderProps, SnackbarKey, SnackbarMessage, OptionsObject } from 'notistack';
export interface SnackbarProps extends _SnackbarProps {
}
export interface SnackbarProviderProps extends _SnackbarProviderProps {
    direction?: 'TopLeft' | 'TopCenter' | 'TopRigt' | 'BottomRight' | 'BottomLeft' | 'BottomCenter';
    isClosable?: boolean;
}
declare type SnackbarKeyProps = {
    snackbarKey: SnackbarKey;
};
export declare const SnackbarUtilsConfigurator: () => null;
export declare const Snackbar: ({ ...props }: SnackbarProps) => JSX.Element;
export declare const useSnackbar: () => {
    enqueueSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
    closeSnackbar: (key?: SnackbarKey) => void;
};
export default function SnackbarCloseButton({ snackbarKey }: SnackbarKeyProps): JSX.Element;
export declare const SnackbarProvider: ({ ...props }: SnackbarProviderProps) => JSX.Element;
export {};
