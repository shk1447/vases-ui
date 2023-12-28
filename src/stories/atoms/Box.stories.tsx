
import { jsx, css } from '@emotion/react'
import React, { PropsWithChildren } from 'react';

import { Box, BoxProps } from '../../units/atoms/Box';

export default {
  title: 'VASES-UI/Atoms/Box',
  component: Box,
};

export const Default = (props: PropsWithChildren<BoxProps>) => {
  return <Box {...props}>{props.children}</Box>;
};

Default.storyName = 'Box';

Default.args = {
  children: 'Box',
  border: '1px solid black',
  height: '100%',
};
