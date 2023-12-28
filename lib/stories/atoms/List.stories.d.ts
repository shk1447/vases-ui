/// <reference types="react" />
import { ListProps } from '../../units/atoms/List/List';
import { PropsWithItems } from '../PropsWithItems';
declare const _default: {
    title: string;
    component: ({ ...props }: ListProps) => JSX.Element;
    argTypes: {
        component: string;
    };
};
export default _default;
export declare const Default: {
    (props: PropsWithItems<ListProps>): JSX.Element;
    storyName: string;
    args: {
        items: {
            label: string;
        }[];
    };
};
