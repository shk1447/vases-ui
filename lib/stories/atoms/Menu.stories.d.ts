/// <reference types="react" />
import { MenuProps } from '../../units/atoms/Menu';
import { PropsWithItems } from '../PropsWithItems';
declare const _default: {
    title: string;
    component: (props: MenuProps) => JSX.Element;
    argsTypes: {
        open: {
            control: string;
        };
        variant: {
            control: string;
            options: string[];
        };
        autoFocus: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: PropsWithItems<MenuProps>): JSX.Element;
    storyName: string;
    args: {
        items: {
            label: string;
        }[];
    };
};
