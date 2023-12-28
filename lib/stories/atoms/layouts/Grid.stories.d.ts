import { IGridLayout } from '../../../units/atoms/layouts/GridLayout';
declare const _default: {
    title: string;
    component: ({ gridContainer, gridItems, className, }: IGridLayout) => import("@emotion/react/jsx-runtime").JSX.Element;
};
export default _default;
export declare const Default: {
    (props: IGridLayout): import("@emotion/react/jsx-runtime").JSX.Element;
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
                component: import("@emotion/react/jsx-runtime").JSX.Element;
            }[];
        };
    };
};
