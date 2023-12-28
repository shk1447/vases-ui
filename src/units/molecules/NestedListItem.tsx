
import React, { useState } from 'react';
import { ListItemButton } from '../atoms/List';
import { Collapse } from '../atoms/Collapse';
import { ICON_ExpandMore, ICON_MENU_ArrowRight } from '../styles/icons/Menu';
import { IconButton } from '../atoms/IconButton';
import { jsx, css } from '@emotion/react'

export interface NestedListItemProps {
  className?: string;
  open?: boolean;
  selected?: boolean;
  parent?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}

export const NestedListItem = (props: NestedListItemProps) => {
  const { open, onClick, selected = false, className } = props;
  const [_open, setOpen] = useState<boolean>(open == undefined ? true : open);

  const handleClick = (e: any) => {
    onClick && onClick(e);
  };

  const handleCollapse = () => {
    setOpen(!_open);
  };

  return (
    <>
      <ListItemButton
        className={className}
        onClick={handleClick}
        selected={selected}
      >
        <>{props.parent}</>

        <IconButton
          onClick={handleCollapse}
          css={css`
            padding: 0;
          `}
        >
          {_open ? <ICON_ExpandMore /> : <ICON_MENU_ArrowRight />}
        </IconButton>
      </ListItemButton>

      <Collapse in={_open} timeout="auto" unmountOnExit className={className}>
        <>{props.children}</>
      </Collapse>
    </>
  );
};
