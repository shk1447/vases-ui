
import React from 'react';
import { jsx, css } from '@emotion/react'
import { styled, TableHead as _TableHead } from '@mui/material';

export interface TableHeadProps {
  children?: React.ReactNode;
  className?: string;
}

export const StyledTableHead = styled((props: TableHeadProps) => (
  <_TableHead
    css={css`
      background-color: #121212;
    `}
    {...props}
  />
))(({ theme: _ }) => {
  return {};
});

export const TableHead = ({ children, className }: TableHeadProps) => {
  return <StyledTableHead className={className}>{children}</StyledTableHead>;
};
