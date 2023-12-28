/// <reference types="react" />
import { TooltipProps } from '../../units/atoms/Tooltip';
declare const _default: {
    title: string;
    component: ({ ...props }: TooltipProps) => JSX.Element;
    argTypes: {
        arrow: {
            control: string;
        };
        placement: {
            control: {
                type: string;
            };
            options: string[];
            open: {
                control: string;
                defaultValue: boolean;
            };
            leaveDelay: {
                control: string;
            };
            enterDelay: {
                control: string;
            };
            title: {
                control: string;
            };
        };
    };
};
export default _default;
export declare const Default: {
    (props: TooltipProps): JSX.Element;
    storyName: string;
    args: {
        open: boolean;
        leaveDelay: number;
        enterDelay: number;
        title: string;
        arrow: boolean;
    };
};
