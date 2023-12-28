/// <reference types="react" />
import { ListProps } from '../../units/atoms/List/List';
import { PropsWithItems } from '../PropsWithItems';
declare const _default: {
    title: string;
    component: ({ ...props }: ListProps) => JSX.Element;
    argTypes: {
        compoent: string;
    };
};
export default _default;
export declare const Default: {
    (props: PropsWithItems<ListProps>): JSX.Element;
    storyName: string;
    args: {
        items: {
            label: string;
            items: ({
                label: string;
                items?: undefined;
            } | {
                label: string;
                items: {
                    label: string;
                }[];
            })[];
        }[];
    };
};
