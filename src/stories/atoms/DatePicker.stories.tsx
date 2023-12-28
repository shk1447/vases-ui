import React from 'react';

import { DatePicker, DatePickerProps } from '../../units/atoms/DatePicker';

export default {
  title: 'VASES-UI/Atoms/DatePicker',
  component: DatePicker,
};

export const Default = (props: DatePickerProps) => <DatePicker {...props} />;
Default.storyName = 'DatePicker';
Default.args = {
  label: 'DatePicker',
};
