import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as PlusIcon } from './svg/plus.svg';
import { BottomNavigation, BottomNavigationAction } from '.';
import { Typography } from '@vases-ui/components/atoms';
import Paper from '@vases-ui/components/atoms/Layouts/Paper';
import { useState } from 'react';
export default {
  title: 'Vases-UI/molecules/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    docs: {
      description: {
        component: `BottomNavigation 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BottomNavigation>;

export const Default: ComponentStory<typeof BottomNavigation> = args => {
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, v) => setValue(v)}
      >
        <BottomNavigationAction label={'A'}></BottomNavigationAction>
        <BottomNavigationAction label={'B'}></BottomNavigationAction>
        <BottomNavigationAction label={'C'}></BottomNavigationAction>
      </BottomNavigation>
    </Paper>
  );
};
Default.bind({});
Default.args = {};
