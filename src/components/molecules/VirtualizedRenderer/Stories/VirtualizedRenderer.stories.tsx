import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as PlusIcon } from './svg/plus.svg';
import VirtualizedRenderer from '..';
import { Box, Checkbox, Typography } from '@vases-ui/components/atoms';
import { useCallback } from 'react';
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

const files = new Array(10000).fill(0).map((d, i) => {
  return {
    id: i,
    name: `file_${i}`,
  };
});
console.log(files);

export const Default: ComponentStory<typeof VirtualizedRenderer> = args => {
  const handleRenderItem = useCallback((index: number) => {
    return (
      <Box display={'flex'} alignItems={'center'}>
        <Checkbox checked={false}></Checkbox>
        <Typography variant="reg12">{files[index].name}</Typography>
      </Box>
    );
  }, []);
  return (
    <VirtualizedRenderer
      direction={'vertical'}
      itemSize={45}
      itemCount={files.length}
      containerSize={500}
      overscanSize={5}
      onRenderItem={handleRenderItem}
    />
  );
};
Default.bind({});
Default.args = {};
