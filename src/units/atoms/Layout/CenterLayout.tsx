
import React from 'react';
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
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </Grid>
  );
};
