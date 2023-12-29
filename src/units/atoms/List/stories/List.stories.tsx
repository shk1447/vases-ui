import React, { useState } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '..';
import { List, ListProps, ListSubheader } from '../List';
import { NestedListItem } from '../../../molecules/NestedListItem';
import { ICON_AccountCircle } from '../../../styles/icons';
import { ICON_MENU_Ball } from '../../../styles/icons/Menu';
import { PropsWithItems } from '../../../PropsWithItems';

export default {
  title: 'VASES-UI/Atoms/List',
  component: List,
  argTypes: {
    component: 'text',
  },
};

export const Default = (props: PropsWithItems<ListProps>) => (
  <List {...props}>
    {props.items.map(item => {
      return (
        <ListItemButton>
          <ListItemText>{item.label}</ListItemText>
        </ListItemButton>
      );
    })}
  </List>
);

Default.storyName = 'List';
Default.args = {
  items: [
    {
      label: 'List Item 01',
    },
    {
      label: 'List Item 02',
    },
    {
      label: 'List Item 03',
    },
  ],
};
