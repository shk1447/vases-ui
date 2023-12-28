import React from 'react';
import { DataGridProps } from '../../units/atoms/DataGrid';
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<DataGridProps & React.RefAttributes<import("../../units/atoms/DataGrid").DataGridHandle>>;
    argTypes: {
        checkboxSelection: {
            control: string;
        };
        disableSelectionOnClick: {
            control: string;
        };
        rowHeight: {
            control: string;
        };
        loading: {
            control: string;
        };
        pageSize: {
            control: string;
        };
        rows: {
            control: string;
        };
        columns: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: DataGridProps): JSX.Element;
    storyName: string;
    args: {
        rows: {
            id: number;
            col1: string;
            col2: string;
        }[];
        columns: ({
            field: string;
            headerName: string;
            width?: undefined;
        } | {
            field: string;
            headerName: string;
            width: number;
        })[];
        loading: boolean;
        rowHeight: number;
    };
};
