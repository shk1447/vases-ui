import React from 'react';
import _Select, { SelectProps as _SelectProps } from '@mui/material/Select';
import _MenuItem, {
  MenuItemProps as _MenuItemProps,
} from '@mui/material/MenuItem';
import { styled } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export interface SelectProps extends _SelectProps {}

export interface SelectItemProps extends _MenuItemProps {}

const StyledSelect = styled((props: SelectProps) => <_Select {...props} />)(
  ({ theme: _ }) => {
    return {};
  },
);

const StyledMenuItem = styled((props: SelectItemProps) => (
  <_MenuItem {...props} />
))(({ theme: _ }) => ({}));

export const Select = (props: SelectProps) => {
  return (
    <FormControl size={props.size} fullWidth={props.fullWidth}>
      <InputLabel>{props.label}</InputLabel>
      <StyledSelect {...props} />
    </FormControl>
  );
};

export const Option = (props: SelectItemProps) => {
  return <StyledMenuItem {...props} />;
};
