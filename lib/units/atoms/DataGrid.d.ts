import React from 'react';
import { DataGridProps as _DataGridProps, GridRowParams as _GridRowParams, GridValidRowModel, GridColDef, GridActionsColDef } from '@mui/x-data-grid';
import { GridCellParams as _GridCellParams, GridRenderCellParams } from '@mui/x-data-grid/models/params/gridCellParams';
import { GridCallbackDetails as _GridCallbackDetails } from '@mui/x-data-grid/models/api/gridCallbackDetails';
import { GridCellEditCommitParams as _GridCellEditCommitParams } from '@mui/x-data-grid/models/params/gridEditCellParams';
import { GridSelectionModel as _GridSelectionModel } from '@mui/x-data-grid/models/gridSelectionModel';
import { GridSortModel as _GridSortModel } from '@mui/x-data-grid/models/gridSortModel';
export declare type GridRowModel<R extends GridValidRowModel = any> = R;
export interface GridSelectionModel extends _GridSelectionModel {
}
export interface GridCallbackDetails extends _GridCallbackDetails {
}
export interface GridSortItem extends _GridSortModel {
}
export interface GridCellParams<V = any, R extends GridValidRowModel = any, F = V> extends _GridCellParams {
}
export declare type ExtendGridEnrichedColDef<R extends GridValidRowModel = any, V = any, F = V> = (GridColDef<R, V, F> | GridActionsColDef<R, V, F>) & {
    tooltip?: boolean;
    renderTooltip?: (params: GridRenderCellParams<V, R, F>) => React.ReactNode;
};
export declare type GridColumns = ExtendGridEnrichedColDef[];
export interface GridRowParams extends _GridRowParams {
}
export interface GridCellEditCommitParams extends _GridCellEditCommitParams {
}
export interface DataGridProps extends _DataGridProps {
    selectedRow?: any;
    onRowSelected?: (row: GridRowParams | undefined) => void;
    tooltip?: boolean;
    columns: GridColumns;
}
export interface _GridRenderCellParams extends GridRenderCellParams {
}
export declare const useGridApiContext: () => React.MutableRefObject<import("@mui/x-data-grid/models/api/gridApiCommunity").GridApiCommunity>;
export interface StyledDataGridProps extends DataGridProps {
    selected?: number;
}
export declare const StyledDataGrid: import("@emotion/styled").StyledComponent<StyledDataGridProps & React.RefAttributes<unknown> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export interface EditInputCellProps {
    params: _GridRenderCellParams;
}
export interface CheckEditInputCellProps extends EditInputCellProps {
}
export declare const CheckEditInputCell: (props: CheckEditInputCellProps) => JSX.Element;
export interface SelectEditInputCellProps extends EditInputCellProps {
    list: any[];
}
export declare const SelectEditInputCell: (props: SelectEditInputCellProps) => JSX.Element;
export declare type DataGridHandle = {
    scrollTo: () => void;
};
export declare const DataGrid: React.ForwardRefExoticComponent<DataGridProps & React.RefAttributes<DataGridHandle>>;
