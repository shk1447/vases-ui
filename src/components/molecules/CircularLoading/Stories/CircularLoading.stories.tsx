import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as PlusIcon } from './svg/plus.svg';
import CircularLoading from '..';
export default {
  title: 'Vases-UI/molecules/CircularLoading',
  component: CircularLoading,
  parameters: {
    docs: {
      description: {
        component: `CircularLoading 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CircularLoading>;

export const Default: ComponentStory<typeof CircularLoading> = args => (
  <div style={{ width: '100%', padding: '50px' }}>
    <CircularLoading {...args} />
  </div>
);
Default.bind({});
Default.args = {
  size: 16,
  indeterminate: false,
  value: 40,
};
