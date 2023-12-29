/// <reference types="react" />
import { CarouselProps } from '../../units/atoms/Carousel';
declare const _default: {
    title: string;
    component: <K extends keyof {
        slide: {
            index: number;
        };
        scroll: {
            frame?: number | undefined;
            loading?: boolean | undefined;
        };
    }>(props: CarouselProps<K>) => JSX.Element;
    argTypes: {
        type: {
            control: {
                type: string;
            };
            options: string[];
        };
        option: {
            name: string;
            control: string;
            description: string;
        };
        items: {
            control: string;
        };
        className: {
            control: string;
        };
    };
};
export default _default;
declare type SlideOption = {
    index: number;
};
declare type ScrollOption = {
    frame: number;
};
declare type OptionMap = {
    slide: SlideOption;
    scroll: ScrollOption;
};
export declare const Default: {
    (props: CarouselProps<keyof OptionMap>): JSX.Element;
    storyName: string;
    args: {
        type: string;
        items: string[];
        option: {
            frame: number;
            index: number;
        };
        onRenderItem: null;
    };
};
