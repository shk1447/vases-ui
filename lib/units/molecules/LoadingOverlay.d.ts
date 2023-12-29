import React from 'react';
export interface LoadingOverlayProps {
    active: boolean;
    message?: string;
    children?: React.ReactNode;
    type?: 'CircularProgress' | 'ProgressBar';
    progressInfo?: {
        name: string;
        progress: number;
    }[];
    className?: string;
    onCancel?: () => void;
}
export declare const LoadingOverlay: ({ active, message, children, type, className, progressInfo, onCancel, }: LoadingOverlayProps) => JSX.Element;
