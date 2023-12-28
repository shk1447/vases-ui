import { Theme as _Theme, ThemeProvider as _ThemeProvider, ThemeOptions as _ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { CommonOptions } from './Common';
export declare type _CustomOptions = {
    pallete?: {
        background?: string;
        border?: string;
        color?: string;
    };
    background?: string;
    color?: string;
    border?: string;
};
export declare type CustomOptions = _CustomOptions & CommonOptions;
declare type CustomTheme = {
    custom_mode?: string;
    custom?: CustomOptions;
};
declare module '@mui/material/styles' {
    interface Theme extends CustomTheme {
    }
    interface ThemeOptions extends CustomTheme {
    }
}
export interface ThemeOptions extends _ThemeOptions, CustomTheme {
}
export declare const createMyTheme: (mode: PaletteMode, options?: ThemeOptions) => Theme;
export interface Theme extends _Theme {
}
export declare const useMyTheme: () => Theme;
export declare const ThemeProvider: typeof _ThemeProvider;
export {};
