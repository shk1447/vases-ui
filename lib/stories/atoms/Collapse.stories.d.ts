/// <reference types="react" />
import { CollapseProps } from '../../units/atoms/Collapse';
declare const _default: {
    title: string;
    component: ({ ...props }: CollapseProps) => JSX.Element;
    argTypes: {
        orientation: {
            control: {
                type: string;
            };
            options: string[];
        };
        timeout: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: CollapseProps): JSX.Element;
    storyName: string;
    args: {
        in: boolean;
        timeout: string;
        orientation: string;
    };
};
