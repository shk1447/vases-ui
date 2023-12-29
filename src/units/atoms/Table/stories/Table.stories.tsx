import React, { useState } from 'react';
import { Table, TableProps } from '../Table';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableContainer } from '../TableContainer';
import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';

export default {
  title: 'VASES-UI/Atoms/Table',
  component: Table,
  argTypes: {
    stickyHeader: {
      control: 'boolean',
      defaultValue: true,
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'small'],
      defaultValue: 'medium',
    },
    padding: {
      control: { tpye: 'select' },
      options: ['none', 'normal'],
      defaultValue: 'none',
    },
  },
};

export const Default = (props: TableProps) => (
  <TableContainer>
    <Table {...props}>
      <TableHead>
        <TableRow>
          <TableCell>{'Column1'}</TableCell>
          <TableCell>{'Column2'}</TableCell>
          <TableCell>{'Column3'}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{'table_Body'}</TableCell>
          <TableCell>{'table_Body'}</TableCell>
          <TableCell>{'table_Body'}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{'line2_table_Body'}</TableCell>
          <TableCell>{'line2_table_Body'}</TableCell>
          <TableCell>{'line2_table_Body'}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

Default.storyName = 'Table';
