import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as PlusIcon } from './svg/plus.svg';
import { LoadingOverlay } from '.';
export default {
  title: 'Vases-UI/molecules/LoadingOverlay',
  component: LoadingOverlay,
  parameters: {
    docs: {
      description: {
        component: `LoadingOverlay 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LoadingOverlay>;

export const Default: ComponentStory<typeof LoadingOverlay> = args => (
  <div style={{ width: '100%', height: '100%' }}>
    <LoadingOverlay {...args} />
  </div>
);
Default.bind({});
Default.args = {
  active: true,
  progress: {
    total: 200,
    current: 100,
  },
  message: '학습중입니다.',
};
