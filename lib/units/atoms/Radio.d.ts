/// <reference types="react" />
import { RadioProps as _RadioProps } from '@mui/material/Radio';
import { RadioGroupProps as _RadioGroupProps } from '@mui/material/RadioGroup';
export interface RadioProps extends _RadioProps {
    value: string | number | boolean;
    label: string;
}
export interface RadioGroupProps extends _RadioGroupProps {
    label?: string;
    items: RadioProps[];
}
export declare const RadioGroup: (props: RadioGroupProps) => JSX.Element;
