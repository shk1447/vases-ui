import DataGrid, { SortColumn } from '../';
import { useMemo, useState } from 'react';
import { Columns } from '../Extensions';
import { css } from '@emotion/css';

const allClassname = css`
  display: flex;
  flex-direction: column;
  block-size: 100%;
  gap: 8px;

  & > .rdg {
    flex: 1;
  }
`;

interface Row {
  dataName: string;
  projects: Array<string>;
  line: string;
  process: string;

  owner: string;

  addedDate: number;
}
type Comparator = (prev: Row, curr: Row) => number;
const getComparator = (key: string): Comparator => {
  switch (key) {
    case 'dataName':
      return (prev, curr) => {
        return prev[key].localeCompare(curr[key]);
      };
    case 'addedDate':
      return (prev, curr) => {
        return prev[key] - curr[key];
      };
    default:
      throw new Error(`unsupported sortColumn: "${key}"`);
  }
};

const CommonFeatures = () => {
  const currTime = new Date().getTime();
  const rows: Row[] = new Array(100).fill(1).map((v, i) => {
    return {
      dataName: `000${i}.png`,
      projects: ['Car Meterials'],
      line: 'Line 1',
      process: 'P1',
      owner: 'John Doe',
      addedDate: currTime + i * 1000,
    };
  });

  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const sortedRows = useMemo((): readonly Row[] => {
    if (sortColumns.length === 0) return rows;

    return [...rows].sort((prev, curr) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey);
        const compResult = comparator(prev, curr);
        if (compResult !== 0) {
          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [rows, sortColumns]);
  return (
    <div className={allClassname}>
      <DataGrid
        headerRowHeight={48}
        rowKeyGetter={row => row.dataName}
        selectedRows={selectedRows}
        onRowClick={(row, column) => {
          if (selectedRows.length > 0) {
            const selectedKey = selectedRows.values().next().value;
            if (selectedKey == row.dataName) {
              setSelectedRows([]);
            } else {
              setSelectedRows([row.dataName]);
            }
          } else {
            setSelectedRows([row.dataName]);
          }
        }}
        onSelectedRowsChange={setSelectedRows}
        sortColumns={sortColumns}
        onSortColumnsChange={setSortColumns}
        columns={[
          Columns.SelectColumn,
          {
            key: 'dataName',
            name: 'Data Name',
            sortable: true,
            resizable: true,
            frozen: true,
            width: 220,
          },
          { key: 'projects', name: 'Projects' },
          { key: 'line', name: 'Prod Line' },
          { key: 'process', name: 'Process', resizable: true },
          { key: 'owner', name: 'Owner' },
          {
            key: 'addedDate',
            name: 'Date Added',
            sortable: true,

            formatter: props => {
              return new Date(props.row[props.column.key]).toString();
            },
          },
        ]}
        rows={sortedRows}
      />
    </div>
  );
};
export default CommonFeatures;
