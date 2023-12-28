import { PropsWithChildren } from 'react';
import { AutocompleteProps } from '../../units/atoms/Autocomplete';
declare const _default: {
    title: string;
    component: ({ ...props }: import("../../units/atoms/AppBar").AppBarProps) => JSX.Element;
    argTypes: {
        label: {
            control: string;
        };
        disableCloseOnSelect: {
            control: string;
        };
        disableClearble: {
            control: string;
        };
        disablePortal: {
            control: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
        };
        options: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: PropsWithChildren<AutocompleteProps>): JSX.Element;
    storyName: string;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    args: {
        options: string[];
        disablePortal: boolean;
        disableCloseOnSelect: boolean;
        disableClearble: boolean;
        size: string;
        label: string;
    };
};
