import React, { useState } from 'react';

import {
  LoadingButton,
  LoadingButtonProps,
} from '..';

export default {
  title: 'VASES-UI/Atoms/LoadingButton',
  component: LoadingButton,
};

export const Default = (props: LoadingButtonProps) => {
  const [_loading, setLoading] = useState(false);

  return <LoadingButton {...props}>Loading</LoadingButton>;
};
Default.storyName = 'LoadingButton';
Default.args = {
  loading: false,
  variant: 'outlined',
};
Default.parameters = {
  docs: {
    description: {
      story: '> 로딩하는 버튼에 대한 스토리입니다.',
    },
  },
};
