import React from 'react';
import { DataGrid, DataGridProps } from '../../units/atoms/DataGrid';

export default {
  title: 'VASES-UI/Atoms/DataGrid',
  component: DataGrid,
  argTypes: {
    checkboxSelection: {
      control: 'boolean',
    },
    disableSelectionOnClick: {
      control: 'boolean',
    },
    rowHeight: {
      control: 'number',
    },
    loading: {
      control: 'boolean',
    },
    pageSize: {
      control: 'number',
    },
    rows: {
      control: 'object',
    },
    columns: {
      control: 'object',
    },
  },
};

export const Default = (props: DataGridProps) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid {...props}></DataGrid>
    </div>
  );
};
Default.storyName = 'DataGrid';
Default.args = {
  rows: [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'XGrid', col2: 'is Awesome' },
    { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
  ],
  columns: [
    { field: 'id', headerName: 'id' },
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 100 },
  ],
  loading: false,
  rowHeight: 38,
};
