import React from 'react';
import styled from '@emotion/styled/types/base';
import {
  SketchPickerProps as _SketchPickerProps,
  SketchPicker as _SketchPicker,
  SketchPickerProps,
} from 'react-color';

export interface ColorPickerParams extends _SketchPickerProps {
  defaultValue?: string;
}

const StyledCollapse = styled(({ ...props }: SketchPickerProps) => (
  <_SketchPicker {...props} />
))(({ theme: _ }) => {
  return {};
});

export const SketchPicker = ({ ...props }: SketchPickerProps) => {
  const styledCollapse = <StyledCollapse {...props} />;

  return styledCollapse;
};
