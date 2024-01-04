import React, { PropsWithChildren } from 'react';

import { Base, BaseProps } from './Base';

export default {
  title: 'VASES-UI/New/Base',
  component: Base,
};

export const Default = (props: PropsWithChildren<BaseProps>) => (
  <Base {...props} />
);

Default.storyName = 'Base';
