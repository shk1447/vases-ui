import React from 'react';
export interface DropdownMenuProps {
    className?: string;
    children?: React.ReactNode;
    anchor: HTMLElement | null;
    open: boolean;
    onClose: () => void;
}
export declare const DropdownMenu: (props: DropdownMenuProps) => JSX.Element;
