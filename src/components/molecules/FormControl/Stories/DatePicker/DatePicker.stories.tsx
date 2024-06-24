import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Calendar from '../../Component/Calendar';
import FormControl from '../..';

export default {
  title: 'Vases-UI/molecules/FormControl/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: `DatePicker 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Calendar>;

export const Default: ComponentStory<typeof Calendar> = args => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div style={{ padding: '50px', width: '336px' }}>
      <FormControl>
        <FormControl.Label>Label</FormControl.Label>
        <FormControl.Calendar
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          monthsShown={1}
          width={'100%'}
        ></FormControl.Calendar>
        <FormControl.HelperText>Helper Text</FormControl.HelperText>
      </FormControl>
    </div>
  );
};

Default.bind({});
Default.args = {};

export const Range: ComponentStory<typeof Calendar> = args => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div style={{ padding: '50px', width: '336px' }}>
      <Calendar
        selected={startDate}
        onChange={onChange}
        monthsShown={2}
        startDate={startDate}
        endDate={endDate}
        selectsRange={true as any}
        width={'336px'}
      />
    </div>
  );
};

Range.bind({});
Range.args = {};
