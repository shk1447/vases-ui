
import { jsx, css } from '@emotion/react'
import React from 'react';

import { ParamsMap, MediaPlayerProps, MediaPlayer } from '..';

export default {
  title: 'VASES-UI/Molecules/MediaPlayer',
  component: MediaPlayer,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['file', 'rtsp', 'local'],
    },
    autoPlay: {
      control: 'boolean',
    },
    muted: {
      control: 'boolean',
    },
    controls: {
      control: 'boolean',
    },
  },
};

export const Default = (props: MediaPlayerProps<keyof ParamsMap>) => {
  return (
    <MediaPlayer
      css={css`
        width: 100%;
        height: 100%;
      `}
      {...props}
    />
  );
};

Default.storyName = 'Video';
Default.parameters = {
  docs: {
    description: {
      story: '> 비디오 (파일)에 대한 스토리입니다..',
    },
  },
};
Default.args = {
  autoPlay: false,
  muted: true,
  controls: true,
  type: 'file',
  params: {
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
};
