/// <reference types="react" />
import { CheckboxProps } from '../../units/atoms/Checkbox';
declare const _default: {
    title: string;
    component: (props: CheckboxProps) => JSX.Element;
    argTypes: {
        label: {
            control: string;
        };
        disabled: {
            control: string;
        };
        checked: {
            control: string;
        };
        color: {
            control: {
                type: string;
            };
            options: string[];
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
        };
    };
};
export default _default;
export declare const Default: {
    (props: CheckboxProps): JSX.Element;
    storyName: string;
    args: {
        label: string;
        disabled: boolean;
        checked: boolean;
        color: string;
        size: string;
    };
};
