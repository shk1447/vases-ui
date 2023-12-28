/// <reference types="react" />
import { ChipProps } from '../../units/atoms/Chip';
declare const _default: {
    title: string;
    component: ({ ...props }: ChipProps) => JSX.Element;
    argTypes: {
        label: {
            control: string;
            defaultValue: string;
        };
        onDelete: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: ChipProps): JSX.Element;
    storyName: string;
    args: {
        onDelete: boolean;
    };
};
