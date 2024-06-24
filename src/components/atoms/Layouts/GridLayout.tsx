import React, {
  Children,
  PropsWithChildren,
  cloneElement,
  isValidElement,
} from 'react';
import { css } from '@emotion/react';

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
      {Children.toArray(children)}
    </div>
  );
};

const GridItem = (props: PropsWithChildren<GridComponent>) => {
  return (
    <div
      css={css`
        grid-column: ${props.gridColumn};
        grid-row: ${props.gridRow};
      `}
    >
      {props.children}
    </div>
  );
};

export const GridLayout = ({
  gridContainer,
  children,
  className,
}: PropsWithChildren<IGridLayout>) => {
  return (
    <GridContainer {...gridContainer} className={className}>
      {Children.toArray(children).filter(
        (d: any) => d.type.name === GridLayout.Item.name,
      )}
    </GridContainer>
  );
};

GridItem.displayName = 'GridItem';
GridLayout.Item = GridItem;

export default GridLayout;
