import React, { ChangeEvent } from 'react';
import moment from 'moment';
import { TextField } from './TextField';
import { styled } from '@mui/material';

export interface DatePickerProps {
  className?: string;
  type: 'date' | 'datetime-local';
  criteria: 'startTime' | 'endTime';
  label: string;
  step?: number;
  value?: number;
  onBlur?: () => void;
  onChange?: (
    date: number | undefined,
    criteria: 'startTime' | 'endTime',
  ) => void;
}

const StyledDatePicker = styled(({ ...props }: DatePickerProps) => {
  const {
    value = props.value ? props.value : moment().unix() * 1000,
    type = 'date',
    label,
    criteria,
    step = 1,
    onBlur,
    onChange,
    className,
  } = props;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = undefined;
    if (e.target.value) {
      value = moment(e.target.value).unix() * 1000;
    }
    onChange && onChange(value, criteria);
  };

  const handleOnBlur = () => {
    onBlur && onBlur();
  };

  const format = type == 'date' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss';
  return (
    <TextField
      className={className}
      label={label}
      type={type}
      InputLabelProps={{
        shrink: true,
      }}
      value={moment(value).format(format)}
      inputProps={{ step: step }}
      onChange={handleChange}
      onBlur={handleOnBlur}
    />
  );
})(({ theme: _ }) => ({
  "input[type='datetime-local']::-webkit-calendar-picker-indicator": {
    color: 'rgba(0, 0, 0, 0)',
    opacity: '1',
    display: 'block',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '16px',
    height: '16px',
    borderWidth: 'thin',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  "input[type='date']::-webkit-calendar-picker-indicator": {
    color: 'rgba(0, 0, 0, 0)',
    opacity: '1',
    display: 'block',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '16px',
    height: '16px',
    borderWidth: 'thin',
    borderRadius: '3px',
    cursor: 'pointer',
  },
}));

export const DatePicker = (props: DatePickerProps) => {
  return (
    <>
      <StyledDatePicker {...props}></StyledDatePicker>
    </>
  );
};
