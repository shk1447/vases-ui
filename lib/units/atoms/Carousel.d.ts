declare type SlideOption = {
    index: number;
};
declare type ScrollOption = {
    frame?: number;
    loading?: boolean;
};
declare type OptionMap = {
    slide: SlideOption;
    scroll: ScrollOption;
};
export interface CarouselProps<K extends keyof OptionMap> {
    type: K;
    option: OptionMap[K];
    items: string[];
    className?: string;
    useLoading?: boolean;
    onRenderItem?: (path: string, idx: number, isScrolling: boolean | undefined) => any;
}
export declare const Carousel: <K extends keyof OptionMap>(props: CarouselProps<K>) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
