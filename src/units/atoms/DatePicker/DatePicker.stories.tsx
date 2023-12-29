import React from 'react';

import { DatePicker, DatePickerProps } from '.';

export default {
  title: 'VASES-UI/Atoms/DatePicker',
  component: DatePicker,
};

export const Default = (props: DatePickerProps) => <DatePicker {...props} />;
Default.storyName = 'DatePicker';
Default.args = {
  label: 'DatePicker',
};
