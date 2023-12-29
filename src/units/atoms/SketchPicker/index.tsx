import React from 'react';

import {
  SketchPickerProps as _SketchPickerProps,
  SketchPicker as _SketchPicker,
  SketchPickerProps,
} from 'react-color';

export interface ColorPickerParams extends _SketchPickerProps {
  defaultValue?: string;
}

export const SketchPicker = ({ ...props }: SketchPickerProps) => {
  const styledCollapse = <_SketchPicker {...props} />;

  return styledCollapse;
};
