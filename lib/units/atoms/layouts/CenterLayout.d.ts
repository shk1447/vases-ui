import React from 'react';
import { GridDirection } from '@mui/material';
export interface CenterLayoutProps {
    direction?: GridDirection;
    children?: React.ReactNode;
    className?: string;
}
export declare const CenterLayout: ({ direction, children, className, }: CenterLayoutProps) => JSX.Element;
