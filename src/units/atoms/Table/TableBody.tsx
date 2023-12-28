import React from 'react';
import { styled, TableBody as _TableBody } from '@mui/material';

export interface TableBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export const StyledTableBody = styled((props: TableBodyProps) => (
  <_TableBody {...props} />
))(({ theme: _ }) => {
  return {};
});

export const TableBody = ({ children, className }: TableBodyProps) => {
  return <StyledTableBody className={className}>{children}</StyledTableBody>;
};
