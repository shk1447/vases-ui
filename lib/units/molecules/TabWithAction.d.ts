import React from 'react';
export interface TabItem {
    value: string;
    label: string;
    component: React.ReactNode;
}
export interface TabWithActionsProps {
    height?: number;
    className?: string;
    activeItem: string;
    tabItems: TabItem[];
    actions?: React.ReactNode;
    onChange?: (activeItem: string) => void;
    children?: React.ReactNode;
}
export declare const TabWithActions: ({ height, className, activeItem, tabItems, actions, children, onChange, }: TabWithActionsProps) => JSX.Element;
