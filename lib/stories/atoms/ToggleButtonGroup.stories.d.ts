/// <reference types="react" />
import { ToggleButtonGroupProps } from '../../units/atoms/Toggle';
import { PropsWithItems } from '../PropsWithItems';
declare const _default: {
    title: string;
    component: ({ ...props }: ToggleButtonGroupProps) => JSX.Element;
};
export default _default;
export declare const Default: {
    (props: PropsWithItems<ToggleButtonGroupProps>): JSX.Element;
    storyName: string;
    args: {
        value: string;
        items: {
            value: string;
            label: string;
        }[];
    };
};
