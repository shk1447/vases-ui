import React, { useEffect, useRef } from 'react';
import { Button } from '../../units/atoms/Button';
import { ListItemIcon } from '../../units/atoms/List';
import { ListItemText } from '../../units/atoms/List/ListItem';

import { Menu, MenuItem, MenuProps } from '../../units/atoms/Menu';
import { Typography } from '../../units/atoms/Typography';
import {
  ICON_Check,
  ICON_Circle,
  ICON_Delete,
  ICON_Record,
} from '../../units/styles/icons';
import { PropsWithItems } from '../PropsWithItems';

export default {
  title: 'VASES-UI/Atoms/Menu',
  component: Menu,
  argsTypes: {
    open: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['menu', 'selectedMenu'],
    },
    autoFocus: {
      control: 'boolean',
    },
  },
};

export const Default = (props: PropsWithItems<MenuProps>) => {
  const ref = useRef(null);
  const [anchorEl, seAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      seAnchorEl(ref.current);
    }
  }, []);

  return (
    <>
      <div ref={ref} />
      <Menu {...props} id="basic-menu" anchorEl={anchorEl} open={true}>
        {props.items.map(item => {
          return <MenuItem>{item.label}</MenuItem>;
        })}
      </Menu>
    </>
  );
};

Default.storyName = 'Menu';
Default.args = {
  items: [{ label: 'Menu01' }, { label: 'Menu02' }, { label: 'Menu03' }],
};
