import React from 'react';
import { styled, Table as _Table } from '@mui/material';

export interface TableProps {
  stickyHeader?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const StyledTable = styled((props: TableProps) => <_Table {...props} />)(
  ({ theme: _ }) => {
    return {};
  },
);

export const Table = (props: TableProps) => {
  const { children, className, stickyHeader } = props;

  return (
    <StyledTable stickyHeader={stickyHeader} className={className}>
      {children}
    </StyledTable>
  );
};
