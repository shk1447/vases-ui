import React, { useState } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '../../../units/atoms/List';
import { DropdownMenu } from '../../../units/molecules/DropdownMenu';
import {
  NestedListItem,
  NestedListItemProps,
} from '../../../units/molecules/NestedListItem';
import { ICON_AccountCircle } from '../../../units/styles/icons';
import { ICON_MENU_Ball } from '../../../units/styles/icons/Menu';

export default {
  title: 'VASES-UI/Molecules/NestedMenuItem',
  component: DropdownMenu,
};

export const Default = (props: NestedListItemProps) => {
  return (
    <>
      <NestedListItem
        {...props}
        parent={
          <>
            <ListItemIcon>
              <ICON_MENU_Ball />
            </ListItemIcon>
            <ListItemText>Click me</ListItemText>
          </>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <ICON_AccountCircle />
          </ListItemIcon>
          <ListItemText>Account</ListItemText>
        </ListItemButton>
      </NestedListItem>
    </>
  );
};

Default.storyName = 'Default';
