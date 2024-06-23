import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from './IconButton';
import { ReactComponent as ZoomInIcon } from './svg/zoomIn.svg';
import Button from '../Button';
import { ICON_Delete, ICON_Remove } from '../Icons';
export default {
  title: 'Vases-UI/atoms/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: `Button 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof IconButton>;

export const Default: ComponentStory<typeof IconButton> = args => (
  <div style={{ width: '100%', padding: '12px' }}>
    <Button>Test</Button>
    <IconButton {...args}>
      <ICON_Delete />
    </IconButton>
  </div>
);
Default.bind({});
Default.args = {
  disabled: false,
};
