import React, { useState } from 'react';
import { Table, TableProps } from '../../units/atoms/Table/Table';
import { TableBody } from '../../units/atoms/Table/TableBody';
import { TableCell } from '../../units/atoms/Table/TableCell';
import { TableContainer } from '../../units/atoms/Table/TableContainer';
import { TableHead } from '../../units/atoms/Table/TableHead';
import { TableRow } from '../../units/atoms/Table/TableRow';

import { Tab } from '../../units/atoms/Tabs';

export default {
  title: 'VASES-UI/Atoms/Table',
  component: Tab,
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
