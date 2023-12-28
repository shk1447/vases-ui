import React, { useState } from 'react';
import { Button } from '../../../units/atoms/Button';
import { List, ListItemButton, ListItemText } from '../../../units/atoms/List';
import {
  DropdownMenu,
  DropdownMenuProps,
} from '../../../units/molecules/DropdownMenu';

export default {
  title: 'VASES-UI/Molecules/DropDownMenu',
  component: DropdownMenu,
};

export const Default = (props: DropdownMenuProps) => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!IsOpen)}>Menu Open</Button>
      <DropdownMenu {...props} open={IsOpen}>
        <List>
          <ListItemButton onClick={() => setIsOpen(!IsOpen)}>
            <ListItemText>리스트1</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => setIsOpen(!IsOpen)}>
            <ListItemText>리스트2</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => setIsOpen(!IsOpen)}>
            <ListItemText>리스트3</ListItemText>
          </ListItemButton>
        </List>
      </DropdownMenu>
    </>
  );
};

Default.storyName = 'Default';
