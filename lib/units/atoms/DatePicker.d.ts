/// <reference types="react" />
export interface DatePickerProps {
    className?: string;
    type: 'date' | 'datetime-local';
    criteria: 'startTime' | 'endTime';
    label: string;
    step?: number;
    value?: number;
    onBlur?: () => void;
    onChange?: (date: number | undefined, criteria: 'startTime' | 'endTime') => void;
}
export declare const DatePicker: (props: DatePickerProps) => JSX.Element;
