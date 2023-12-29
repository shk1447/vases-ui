
import React, { PropsWithChildren } from 'react';
import { jsx, css } from '@emotion/react'

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

const GridContainer = ({
  row,
  column,
  children,
  className,
}: PropsWithChildren<IGridContainer>) => {
  return (
    <div
      className={className}
      css={css`
        height: 100%;
        display: grid;
        grid-template-columns: repeat(
          auto-fill,
          minmax(${100 / column}%, auto)
        );
        grid-template-rows: repeat(auto-fill, minmax(${100 / row}%, auto));
        overflow: hidden;
      `}
    >
      {children}
    </div>
  );
};

export const GridLayout = ({
  gridContainer,
  gridItems,
  className,
}: IGridLayout) => {
  return (
    <GridContainer {...gridContainer} className={className}>
      {gridItems.map((gridItem: GridComponent, idx: number) => {
        return (
          <div
            key={idx}
            css={css`
              grid-column: ${gridItem.gridColumn};
              grid-row: ${gridItem.gridRow};
              z-index: ${(gridItems.length - idx) * 10};
            `}
          >
            {gridItem.component}
          </div>
        );
      })}
    </GridContainer>
  );
};
