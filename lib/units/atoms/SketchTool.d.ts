/// <reference types="react" />
import { SketchPickerProps as _SketchPickerProps, SketchPickerProps } from 'react-color';
export interface ColorPickerParams extends _SketchPickerProps {
    defaultValue?: string;
}
export declare const SketchPicker: ({ ...props }: SketchPickerProps) => JSX.Element;
