
import React from 'react';
import { jsx, css } from '@emotion/react'
import { Grid, GridDirection } from '@mui/material';

export interface CenterLayoutProps {
  direction?: GridDirection;
  children?: React.ReactNode;
  className?: string;
}

export const CenterLayout = ({
  direction,
  children,
  className,
}: CenterLayoutProps) => {
  return (
    <Grid
      className={className}
      container
      direction={direction}
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {children}
    </Grid>
  );
};
