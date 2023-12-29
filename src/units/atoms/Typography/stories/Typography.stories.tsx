import React, { PropsWithChildren } from 'react';

import { Typography, TypographyProps } from '..';

export default {
  title: 'VASES-UI/Atoms/Typography',
  component: Typography,
};

export const Default = (props: PropsWithChildren<TypographyProps>) => (
  <Typography {...props}>{props.children}</Typography>
);
Default.storyName = 'Typography';
Default.args = {
  children: 'Test',
};
