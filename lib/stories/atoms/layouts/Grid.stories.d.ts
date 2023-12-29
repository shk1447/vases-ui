/// <reference types="react" />
import { IGridLayout } from '../../../units/atoms/layouts/GridLayout';
declare const _default: {
    title: string;
    component: ({ gridContainer, gridItems, className, }: IGridLayout) => JSX.Element;
};
export default _default;
export declare const Default: {
    (props: IGridLayout): JSX.Element;
    storyName: string;
    args: {
        gridContainer: {
            column: number;
            row: number;
        };
        gridItems: {
            gridItems: {
                gridColumn: string;
                gridRow: string;
                component: JSX.Element;
            }[];
        };
    };
};
