import React from 'react';
import { styled, TableCell as _TableCell } from '@mui/material';

export interface TableCellProps {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

export const StyledTableCell = styled((props: TableCellProps) => (
  <_TableCell {...props} />
))(({ theme: _ }) => {
  return {};
});

export const TableCell = ({
  align,
  children,
  className,
  colSpan,
}: TableCellProps) => {
  return (
    <StyledTableCell align={align} colSpan={colSpan} className={className}>
      {children}
    </StyledTableCell>
  );
};
