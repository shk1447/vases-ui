import React from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
export declare type ParamsMap = {
    [index: string]: any;
    single: {
        onLoaded: (data: File) => void;
    };
    multi: {
        onLoaded: (data: File[]) => void;
    };
};
export interface FileUploadButtonProps<K extends keyof ParamsMap> {
    accept?: string;
    selectType: K;
    params: ParamsMap[K];
    children?: React.ReactNode;
}
export declare const FileUploadButton: <T extends keyof ParamsMap>({ accept, selectType, params, children, }: FileUploadButtonProps<T>) => ReactJSXElement;
