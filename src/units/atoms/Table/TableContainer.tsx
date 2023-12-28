import React from 'react';
import { styled, TableContainer as _TableContainer } from '@mui/material';

export interface TableContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const StyledTableContainer = styled((props: TableContainerProps) => (
  <_TableContainer {...props} />
))(({ theme: _ }) => {
  return {};
});

export const TableContainer = ({
  children,
  className,
}: TableContainerProps) => {
  return (
    <StyledTableContainer className={className}>
      {children}
    </StyledTableContainer>
  );
};
