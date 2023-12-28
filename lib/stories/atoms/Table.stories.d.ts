/// <reference types="react" />
import { TableProps } from '../../units/atoms/Table/Table';
declare const _default: {
    title: string;
    component: ({ ...props }: import("../../units/atoms/Tabs").TabProps) => JSX.Element;
    argTypes: {
        stickyHeader: {
            control: string;
            defaultValue: boolean;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
            defaultValue: string;
        };
        padding: {
            control: {
                tpye: string;
            };
            options: string[];
            defaultValue: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: TableProps): JSX.Element;
    storyName: string;
};
