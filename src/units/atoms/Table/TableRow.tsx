import React from 'react';
import { styled, TableRow as _TableRow } from '@mui/material';

export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
  selected?: boolean;
  onClick?: (e: any) => any;
  onDoubleClick?:(e:any) => any;
}

export const StyledTableRow = styled((props: TableRowProps) => (
  <_TableRow {...props} />
))(({ theme: _ }) => {
  return {};
});

export const TableRow = ({
  selected,
  onClick,
  onDoubleClick,
  children,
  className,
}: TableRowProps) => {
  return (
    <StyledTableRow selected={selected} onClick={onClick} className={className} onDoubleClick={onDoubleClick}>
      {children}
    </StyledTableRow>
  );
};
