/// <reference types="react" />
import { TabProps, TabsProps } from '../../units/atoms/Tabs';
import { PropsWithItems } from '../PropsWithItems';
declare const _default: {
    title: string;
    component: ({ ...props }: TabProps) => JSX.Element;
    argTypes: {
        orientaition: {
            type: string;
            defaultValue: string;
            options: string[];
        };
        textColor: {
            type: string;
            defaultValue: string;
            options: string[];
        };
        variant: {
            type: string;
            defaultValue: string;
            options: string[];
        };
        indicatorColor: {
            type: string;
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: PropsWithItems<TabsProps>): JSX.Element;
    storyName: string;
    args: {
        value: string;
        items: {
            value: string;
            label: string;
        }[];
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
