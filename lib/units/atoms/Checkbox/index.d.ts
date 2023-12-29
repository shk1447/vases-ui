/// <reference types="react" />
import { CheckboxProps as _CheckboxProps } from '@mui/material/Checkbox';
export interface CheckboxProps extends _CheckboxProps {
    label?: string;
    labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
}
export declare const Checkbox: (props: CheckboxProps) => JSX.Element;
