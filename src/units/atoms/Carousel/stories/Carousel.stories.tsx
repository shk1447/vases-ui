
import { jsx, css } from '@emotion/react'
import React from 'react';

import { Carousel, CarouselProps } from '..';

export default {
  title: 'VASES-UI/Atoms/Carousel',
  component: Carousel,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['slide', 'scroll'],
    },
    option: {
      name: 'carousel option',
      control: 'object',
      description: 'scroll - frame slide - index',
    },
    items: {
      control: 'array',
    },
    className: {
      control: 'text',
    },
  },
};

type SlideOption = {
  index: number;
};

type ScrollOption = {
  frame: number;
};

type OptionMap = {
  slide: SlideOption;
  scroll: ScrollOption;
};

export const Default = (props: CarouselProps<keyof OptionMap>) => {
  return (
    <Carousel
      css={css`
        width: 100%;
        height: 100%;
      `}
      {...props}
    />
  );
};

Default.storyName = 'Carousel';
Default.args = {
  type: 'scroll',
  items: [
    'https://picsum.photos/150',
    'https://picsum.photos/100',
    'https://picsum.photos/200',
  ],
  option: {
    frame: 1,
    index: 1,
  },
  onRenderItem: null,
};
