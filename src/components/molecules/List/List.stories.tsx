import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as PlusIcon } from './svg/plus.svg';
import { List, ListItem, TreeItem } from '../index';
export default {
  title: 'Vases-UI/molecules/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: `List 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof List>;

export const Default: ComponentStory<typeof List> = args => (
  <div style={{ width: '100%', padding: '50px' }}>
    <List {...args} />
  </div>
);
Default.bind({});
Default.args = {};
