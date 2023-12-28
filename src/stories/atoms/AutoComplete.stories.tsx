import React, { PropsWithChildren } from 'react';

import { AppBar } from '../../units/atoms/AppBar';
import {
  Autocomplete,
  AutocompleteProps,
} from '../../units/atoms/Autocomplete';
import { Checkbox } from '../../units/atoms/Checkbox';
import { TextField } from '../../units/atoms/TextField';

export default {
  title: 'VASES-UI/Atoms/Autocomplete',
  component: AppBar,
  argTypes: {
    label: {
      control: 'text',
    },
    disableCloseOnSelect: {
      control: 'boolean',
    },
    disableClearble: {
      control: 'boolean',
    },
    disablePortal: {
      control: 'boolean',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    options: {
      control: 'array',
    },
  },
};

export const Default = (props: PropsWithChildren<AutocompleteProps>) => (
  <Autocomplete
    {...props}
    fullWidth
    renderInput={params => (
      <TextField {...params} label={props.label} focused />
    )}
  ></Autocomplete>
);

Default.storyName = 'Autocomplete';
Default.parameters = {
  docs: {
    description: {
      story: '텍스트필드 형태에 대한 자동완성 스토리입니다.',
    },
  },
};
Default.args = {
  options: ['France', 'America', 'Korea', 'Italy'],
  disablePortal: true,
  disableCloseOnSelect: false,
  disableClearble: false,
  size: 'small',
  label: 'Country',
};
