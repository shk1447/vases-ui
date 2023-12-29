import React from 'react';
export interface GridComponent {
    gridColumn: string;
    gridRow: string;
    component: React.ReactNode;
}
export interface IGridContainer {
    column: number;
    row: number;
    className?: string;
}
export interface IGridLayout {
    gridContainer: IGridContainer;
    gridItems: GridComponent[];
    className?: string;
}
export declare const GridLayout: ({ gridContainer, gridItems, className, }: IGridLayout) => JSX.Element;
