import React, { useState } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '../../units/atoms/List';
import { List, ListProps, ListSubheader } from '../../units/atoms/List/List';
import { NestedListItem } from '../../units/molecules/NestedListItem';
import { ICON_AccountCircle } from '../../units/styles/icons';
import { ICON_MENU_Ball } from '../../units/styles/icons/Menu';
import { Item, PropsWithItems } from '../PropsWithItems';

export default {
  title: 'VASES-UI/Atoms/NestedList',
  component: List,
  argTypes: {
    compoent: 'text',
  },
};

export const Default = (props: PropsWithItems<ListProps>) => {
  const renderItems = (items: Item[]) => {
    return items.map(item => {
      return item.items && item.items.length > 0 ? (
        <NestedListItem
          open={true}
          parent={<ListItemText>{item.label}</ListItemText>}
        >
          {renderItems(item.items)}
        </NestedListItem>
      ) : (
        <ListItemButton>
          <ListItemText>{item.label}</ListItemText>
        </ListItemButton>
      );
    });
  };
  return <List {...props}>{renderItems(props.items)}</List>;
};

Default.storyName = 'NestedList';
Default.args = {
  items: [
    {
      label: 'parent 01',
      items: [
        {
          label: 'child 01',
        },
        {
          label: 'child 02',
        },
        {
          label: 'child 03',
          items: [
            {
              label: 'end child',
            },
          ],
        },
      ],
    },
    {
      label: 'parent 02',
      items: [
        {
          label: 'child 01',
        },
        {
          label: 'child 02',
        },
        {
          label: 'child 03',
        },
      ],
    },
  ],
};
