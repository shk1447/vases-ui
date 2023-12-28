/// <reference types="react" />
import { LoadingButtonProps } from '../../units/atoms/LoadingButton';
declare const _default: {
    title: string;
    component: ({ ...props }: LoadingButtonProps) => JSX.Element;
};
export default _default;
export declare const Default: {
    (props: LoadingButtonProps): JSX.Element;
    storyName: string;
    args: {
        loading: boolean;
        variant: string;
    };
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
