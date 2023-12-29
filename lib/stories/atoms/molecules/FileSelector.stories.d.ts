/// <reference types="react" />
import { FileSelectorProps } from '../../../units/molecules/FileSelector';
declare const _default: {
    title: string;
    component: (props: FileSelectorProps) => JSX.Element;
};
export default _default;
export declare const Single: {
    (): JSX.Element;
    storyName: string;
};
export declare const Multiple: {
    (): JSX.Element;
    storyName: string;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
