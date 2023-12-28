import React from 'react';
import { Link, LinkProps } from '../../units/atoms/Link';

export default {
  title: 'VASES-UI/Atoms/Link',
  component: Link,
  argTypes: {
    color: {
      type: 'text',
    },
    underline: {
      control: { type: 'select' },
      options: ['always', 'hover', 'none'],
    },
    variant: {
      control: { type: 'select' },
      options: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
        'string',
      ],
    },
  },
};

export const Default = (props: LinkProps) => <Link {...props}></Link>;
Default.storyName = 'Link';
Default.args = {
  underline: 'hover',
  variant: 'h4',
  color: 'primary',
  children: (
    <>
      <span>Link</span>
    </>
  ),
};
