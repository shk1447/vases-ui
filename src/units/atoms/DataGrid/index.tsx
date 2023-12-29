import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  GridColumns as _GridColumns,
  DataGrid as _DataGrid,
  DataGridProps as _DataGridProps,
  GridEnrichedColDef,
  GridRowParams as _GridRowParams,
  GridColumnHeaderParams,
  GridValidRowModel,
  GridColDef,
  GridActionsColDef,
  useGridApiContext as _useGridApiContext,
  MuiEvent,
} from '@mui/x-data-grid';
import { css, styled, Tooltip } from '@mui/material';
import {
  GridCellParams as _GridCellParams,
  GridRenderCellParams,
} from '@mui/x-data-grid/models/params/gridCellParams';
import { GridCallbackDetails as _GridCallbackDetails } from '@mui/x-data-grid/models/api/gridCallbackDetails';
import { FlexLayout, Spacer } from '../Layout/FlexLayout';
import { ICON_Edit } from '../../styles/icons';
import { GridCellEditCommitParams as _GridCellEditCommitParams } from '@mui/x-data-grid/models/params/gridEditCellParams';
import { GridSelectionModel as _GridSelectionModel } from '@mui/x-data-grid/models/gridSelectionModel';
import { GridSortModel as _GridSortModel } from '@mui/x-data-grid/models/gridSortModel';
import { Option, Select } from '../Select';

import { debounce } from 'lodash';
import { Checkbox } from '../Checkbox';
export declare type GridRowModel<R extends GridValidRowModel = any> = R;
export interface GridSelectionModel extends _GridSelectionModel {}
export interface GridCallbackDetails extends _GridCallbackDetails {}
export interface GridSortItem extends _GridSortModel{}
export interface GridCellParams<
  V = any,
  R extends GridValidRowModel = any,
  F = V,
> extends _GridCellParams {}
export type ExtendGridEnrichedColDef<
  R extends GridValidRowModel = any,
  V = any,
  F = V,
> = (GridColDef<R, V, F> | GridActionsColDef<R, V, F>) & {
  tooltip?: boolean;
  renderTooltip?: (params: GridRenderCellParams<V, R, F>) => React.ReactNode;
};
export type GridColumns = ExtendGridEnrichedColDef[];
export interface GridRowParams extends _GridRowParams {}
export interface GridCellEditCommitParams extends _GridCellEditCommitParams {}
export interface DataGridProps extends _DataGridProps {
  selectedRow?: any;
  onRowSelected?: (row: GridRowParams | undefined) => void;
  tooltip?: boolean;
  columns: GridColumns;
}
export interface _GridRenderCellParams extends GridRenderCellParams {}
export const useGridApiContext = () => {
  return _useGridApiContext();
};
export interface StyledDataGridProps extends DataGridProps {
  selected?: number;
}
export const StyledDataGrid = styled(
  forwardRef(({ ...props }: StyledDataGridProps, ref: any) => {
    return <_DataGrid ref={ref} {...props} />;
  }),
)(({ theme: _, selected }) => {
  const style: any = {
    borderRadius: 0,
    '& .MuiDataGrid-cell:focus': {
      outline: 'none',
    },
    '& .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell':
      {
        outline: 'none !important',
      },
  };
  if (selected != undefined && selected >= 0) {
    style[`& .MuiDataGrid-row[data-rowindex="${selected}"]`] = {
      background: 'rgba(199, 104, 247, .2) !important',
    };
  }
  return style;
});

export interface EditInputCellProps {
  params: _GridRenderCellParams;
}
export interface CheckEditInputCellProps extends EditInputCellProps {
}

export const CheckEditInputCell = (props: CheckEditInputCellProps) => {
  const { id, value, field } = props.params;
  const apiRef = useGridApiContext();
  
  const handleChange = async (event: any) => {
    await apiRef.current.setEditCellValue({
      id,
      field,
      value:  event.target.checked,
    });
    apiRef.current.stopCellEditMode({ id, field });

  };
  return (
    <Checkbox
      checked={value}
      onChange={handleChange}
    />
  );
};
export interface SelectEditInputCellProps extends EditInputCellProps{
  list: any[];
}
export const SelectEditInputCell = (props: SelectEditInputCellProps) => {
  const { id, value, field } = props.params;
  const apiRef = useGridApiContext();
  
  const handleChange = async (event: any) => {
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: event.target.value,
    });
    apiRef.current.stopCellEditMode({ id, field });

  };
  return (
    <Select
      value={value ? value : ''}
      onChange={handleChange}
      size="small"
      fullWidth
    >
      {props.list.map((element, idx) => {
        return (
          <Option key={idx} value={element}>
            {element}
          </Option>
        );
      })}
    </Select>
  );
};

export type DataGridHandle = {
  scrollTo: () => void;
};

export const DataGrid = forwardRef(
  (
    { onRowSelected, columns, ...props }: DataGridProps,
    ref: React.Ref<DataGridHandle>,
  ) => {
    const [selected, setSelected] = useState<number | undefined>(undefined);


    const gridRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      scrollTo() {
        const rootDom = gridRef.current;
        const scrollDom =
          rootDom && rootDom.querySelector('.MuiDataGrid-virtualScroller');

        if (scrollDom && selected) {
          const rowHeight = props.rowHeight || 52;

          scrollDom.scrollTo(0, selected * rowHeight);
        }
      },
    }));



    const copiedColumns = useMemo(() => {
      return columns.map(column => {
        if (column.editable && !column.renderHeader) {
          column.renderHeader = (params: GridColumnHeaderParams) => {
            return (
              <Tooltip title={params.colDef.headerName ?? ''}>
                <div>
                  <FlexLayout
                    direction="row"
                    gap={8}
                    css={css`
                      align-items: center;
                    `}
                  >
                    <ICON_Edit
                      css={css`
                        font-size: 1.1rem;
                      `}
                    />
                    <span>{params.colDef.headerName}</span>
                  </FlexLayout>
                </div>
              </Tooltip>
            );
          };
        } else {
          if (!column.description) {
            column.description = column.headerName;
          }
        }
        if (column.tooltip || (props.tooltip && column.tooltip !== false)) {
          let realrenderCell: any;
          if (column.renderCell) {
            realrenderCell = column.renderCell;
          }
          let customTooltip: any;
          if (column.renderTooltip) {
            customTooltip = column.renderTooltip;
          }
          column.renderCell = (params: GridRenderCellParams) => {
            const tooltipStyled = () => {
              return css`
                overflow: hidden;
                text-overflow: ellipsis;
              `;
            };
            let _renderCell: any = realrenderCell
              ? realrenderCell(params)
              : params.value;
            let _renderTooltip: any = customTooltip
              ? customTooltip(params)
              : _renderCell;
            return (
              <Tooltip title={_renderTooltip}>
                <div css={tooltipStyled}>{_renderCell}</div>
              </Tooltip>
            );
          };
        }
        return {
          ...column,
          sortable: column.sortable ? column.sortable : false,
          align: column.align ?? 'center',
          headerAlign: 'center',
        } as GridEnrichedColDef;
      });
    }, [columns]);

    const onCustomRowClick = (row: GridRowParams, e: any) => {
      let retRow: GridRowParams | undefined = row;
      const selectedIdx = props.rows.indexOf(row.row);
      if (selected == selectedIdx) {
        setSelected(undefined);
        retRow = undefined;
      } else {
        setSelected(selectedIdx);
      }
      onRowSelected && onRowSelected(retRow);
    };

    useMemo(() => {
      if (props.selectedRow) {
        const selectedIdx = props.rows.findIndex(row =>
          props.getRowId
            ? props.getRowId(row) == props.getRowId(props.selectedRow)
            : row.id == props.selectedRow.id,
        );
        setSelected(selectedIdx);
      } else {
        setSelected(undefined);
      }

    }, [props.selectedRow, props.rows]);

    const handleKeyDown = debounce(
      (
        params: GridCellParams<any, any, any>,
        event: MuiEvent<React.KeyboardEvent<HTMLElement>>,
        details: _GridCallbackDetails<any>,
      ) => {

        if(params.cellMode === 'edit'){
          return;
        }

        if (event.code == 'ArrowUp' || event.code == 'ArrowDown') {

          if (selected != undefined) {

            const selectedIdx = props.rows.indexOf(params.row);
            const nextIdx =
              event.code == 'ArrowUp' ? selectedIdx - 1 : selectedIdx + 1;

            if (nextIdx >= 0 && nextIdx < props.rows.length) {
              setSelected(nextIdx);
              onRowSelected &&
                onRowSelected({ row: props.rows[nextIdx] as any } as any);
            }
          }
        }

        props.onCellKeyDown && props.onCellKeyDown(params, event, details);
      },
      50,
    );

    return (
      <StyledDataGrid
        onCellKeyDown={handleKeyDown}
        ref={gridRef}
        experimentalFeatures={{ newEditingApi: true }}
        onRowClick={onRowSelected ? onCustomRowClick : props.onRowClick}
        columns={copiedColumns}
        {...props}
        pageSize={props.rows.length > 100 ? -1 : 100}
        selected={selected}
      />
    );
  },
);
