import React, { useMemo } from 'react';
import { Menu, MenuItem } from '../atoms/Menu';

export interface DropdownMenuProps {
  className?: string;
  children?: React.ReactNode;
  anchor: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { className, children, open, anchor = null, onClose } = props;

  return (
    <>
      <Menu
        className={className}
        anchorEl={anchor}
        open={open}
        onClose={onClose}
      >
        {children}
      </Menu>
    </>
  );
};
