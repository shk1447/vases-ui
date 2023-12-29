


import { css } from '@mui/material';
import React, { useMemo } from 'react';
import { Box } from '../Box';

export interface CardGridProps {
  cards: React.ReactNode[] | Element[];
  gap?: number;
  cardSize?: {
    width: string;
    height: string;
  };
  className?: string;
}

const ContainerStyle = (gap: number, width: string) => {
  return css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${width}, 1fr));
    gap: ${gap}px;
    overflow: auto;
  `;
};

const CardStyle = (height: string) => {
  return css`
    background: #2e3340;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(217, 219, 224, 0.2);
    height: ${height};
  `;
};

export const CardGrid = (props: CardGridProps) => {
  const {
    className,
    cards = [],
    cardSize = { width: '100%', height: '300px' },
    gap = 15,
  } = props;

  const cardsMemo = useMemo(() => {
    return cards.map((item, j) => {
      return (
        <Box css={CardStyle(cardSize.height)} key={j}>
          {item}
        </Box>
      );
    });
  }, [cards]);

  return (
    <>
      <Box className={className} css={ContainerStyle(gap, cardSize.width)}>
        {cardsMemo}
      </Box>
    </>
  );
};
