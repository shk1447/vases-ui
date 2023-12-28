import React from 'react';
import _Slider, { SliderProps as _SliderProps } from '@mui/material/Slider';
import { styled } from '@mui/material';

export interface SliderProps extends _SliderProps {
  ratio?: number;
}

const StyledSlider = styled((props: _SliderProps) => <_Slider {...props} />)(
  ({ theme: _ }) => {
    return {};
  },
);

export const Slider = (props: SliderProps) => {
  return <StyledSlider {...props} />;
};
