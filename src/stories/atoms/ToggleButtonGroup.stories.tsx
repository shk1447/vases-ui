import React from 'react';

import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from '../../units/atoms/Toggle';
import {
  ICON_Add,
  ICON_Delete,
  ICON_UploadFile,
} from '../../units/styles/icons';
import { PropsWithItems } from '../PropsWithItems';

export default {
  title: 'VASES-UI/Atoms/ToggleButtonGroup',
  component: ToggleButtonGroup,
};

export const Default = (props: PropsWithItems<ToggleButtonGroupProps>) => {
  return (
    <ToggleButtonGroup {...props}>
      {props.items.map(item => {
        return <ToggleButton value={item.value}>{item.label}</ToggleButton>;
      })}
    </ToggleButtonGroup>
  );
};

Default.storyName = 'ToggleButtonGroup';
Default.args = {
  value: '01',
  items: [
    {
      value: '01',
      label: 'Toggle01',
    },
    {
      value: '02',
      label: 'Toggle02',
    },
  ],
};
