/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  createTheme,
  Theme as _Theme,
  ThemeProvider as _ThemeProvider,
  ThemeOptions as _ThemeOptions,
} from '@mui/material/styles';
import { PaletteMode, useTheme } from '@mui/material';
import ThemeLight from './ThemeLight';
import ThemeDark from './ThemeDark';
import { CommonOptions } from './Common';

export type _CustomOptions = {
  pallete?: {
    background?: string;
    border?: string;
    color?: string;
  };
  background?: string;
  color?: string;
  border?: string;
};

export type CustomOptions = _CustomOptions & CommonOptions;

type CustomTheme = {
  custom_mode?: string;
  custom?: CustomOptions;
};

declare module '@mui/material/styles' {
  export interface Theme extends CustomTheme {}

  export interface ThemeOptions extends CustomTheme {}
}

type ThemeType = {
  // [index: string]: any;
  light: CustomOptions;
  dark: CustomOptions;
};

const themes: ThemeType = {
  light: ThemeLight,
  dark: ThemeDark,
};

export interface ThemeOptions extends _ThemeOptions, CustomTheme {}

export const createMyTheme = (
  mode: PaletteMode,
  options?: ThemeOptions,
): Theme => {
  const baseTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#d6d6d6',
      },
    },
    typography: {
      button: {
        textTransform: 'none',
      },
    },
    custom_mode: mode,
    custom: themes[mode],
    ...options,
  });

  return baseTheme;
};
export interface Theme extends _Theme {}

export const useMyTheme = () => {
  const theme = useTheme() as Theme;
  return theme;
};

export const ThemeProvider = _ThemeProvider;
