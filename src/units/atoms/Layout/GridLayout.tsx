
import React, { PropsWithChildren } from 'react';
import { Box } from '../Box';


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
    <Box
      className={className}
      sx={{
        height:'100%',
        display:'grid',
        gridTemplateColumns:`repeat(
          auto-fill,
          minmax(${100 / column}%, auto)
        )`,
        gridTemplateRows: `repeat(auto-fill, minmax(${100 / row}%, auto))`,
        overflow:'hidden'
      }}
    >
      {children}
    </Box>
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
          <Box
            key={idx}
            sx={{gridColumn: gridItem.gridColumn, gridRow:gridItem.gridRow, zIndex:(gridItems.length - idx) * 10}}
          >
            {gridItem.component}
          </Box>
        );
      })}
    </GridContainer>
  );
};
