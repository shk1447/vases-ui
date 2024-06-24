import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as PlusIcon } from './svg/plus.svg';
import { TabPanel, Tabs, Tab } from './index';
import { Typography } from '@vases-ui/components/atoms';
import { useState } from 'react';
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

export const Default: ComponentStory<typeof Tabs> = args => {
  const [tab, setTab] = useState<string>('a');
  return (
    <>
      <Tabs
        value={tab}
        onChange={(e, v) => {
          setTab(v);
        }}
      >
        <Tab
          value={'a'}
          label={<Typography variant="med12">A</Typography>}
        ></Tab>
        <Tab
          value={'b'}
          label={<Typography variant="med12">B</Typography>}
        ></Tab>
      </Tabs>
      <TabPanel index={'a'} value={tab}>
        hoho
      </TabPanel>
      <TabPanel index={'b'} value={tab}>
        haha
      </TabPanel>
    </>
  );
};
Default.bind({});
Default.args = {};
