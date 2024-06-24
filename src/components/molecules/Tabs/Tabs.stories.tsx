import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as PlusIcon } from './svg/plus.svg';
import { TabPanel, Tabs, Tab } from './index';
export default {
  title: 'Vases-UI/molecules/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: `Tabs 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = args => (
  <div style={{ width: '100%' }}>
    <Tabs {...args} />
  </div>
);
Default.bind({});
Default.args = {};
