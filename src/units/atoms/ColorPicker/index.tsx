import React from 'react';
import { styled, ThemeProvider } from '@mui/material';
import {
  ColorPicker as _ColorPicker,
  ColorPickerProps as _ColorPickerProps,
  Color,
} from 'material-ui-color';
import { useMyTheme } from '../../../themes';

export interface ColorPickerProps extends _ColorPickerProps {}

const palette = {
  red: '#ff0000',
  blue: '#0000ff',
  green: '#00ff00',
  yellow: 'yellow',
  cyan: 'cyan',
  lime: 'lime',
  gray: 'gray',
  orange: 'orange',
  purple: 'purple',
  black: 'black',
  white: 'white',
  pink: 'pink',
  darkblue: 'darkblue',
};

const StyledColorPicker = styled(({ ...props }: ColorPickerProps) => {
  return <_ColorPicker {...props} />;
})(({ theme: _ }) => {
  return {};
});

export const ColorPicker = (props: ColorPickerProps) => {
  return (
    <ThemeProvider theme={useMyTheme()}>
      <StyledColorPicker {...props} palette={palette} />;
    </ThemeProvider>
  );
};
