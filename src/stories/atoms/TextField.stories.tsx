import React from 'react';

import { TextField, TextFieldProps } from '../../units/atoms/TextField';

export default {
  title: 'VASES-UI/Atoms/TextField',
  component: TextField,
};

export const Default = (props: TextFieldProps) => <TextField {...props} />;
Default.storyName = 'TextField';
Default.args = {
  label: 'TextField',
  focused: true,
  fullWidth: true,
};
