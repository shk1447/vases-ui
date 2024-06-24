import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as PlusIcon } from './svg/plus.svg';
import VirtualizedRenderer from '..';
export default {
  title: 'Vases-UI/molecules/VirtualizedRenderer',
  component: VirtualizedRenderer,
  parameters: {
    docs: {
      description: {
        component: `CircularLoading 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof VirtualizedRenderer>;

export const Default: ComponentStory<typeof VirtualizedRenderer> = args => (
  <div style={{ width: '100%', padding: '50px' }}>
    <VirtualizedRenderer {...args} />
  </div>
);
Default.bind({});
Default.args = {};
