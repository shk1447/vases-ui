/// <reference types="react" />
import { LinkProps } from '../../units/atoms/Link';
declare const _default: {
    title: string;
    component: (props: any) => JSX.Element;
    argTypes: {
        color: {
            type: string;
        };
        underline: {
            control: {
                type: string;
            };
            options: string[];
        };
        variant: {
            control: {
                type: string;
            };
            options: string[];
        };
    };
};
export default _default;
export declare const Default: {
    (props: LinkProps): JSX.Element;
    storyName: string;
    args: {
        underline: string;
        variant: string;
        color: string;
        children: JSX.Element;
    };
};
