export declare type Item = {
    label: string;
    value: string;
    items?: Item[];
};
export declare type PropsWithItems<P> = P & {
    items: Item[];
};
