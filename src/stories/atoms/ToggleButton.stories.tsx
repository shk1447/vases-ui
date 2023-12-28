import React, { PropsWithChildren } from 'react';

import { ToggleButton, ToggleButtonProps } from '../../units/atoms/Toggle';

export default {
  title: 'VASES-UI/Atoms/ToggleButton',
  component: ToggleButton,
};

export const Default = (props: PropsWithChildren<ToggleButtonProps>) => {
  return <ToggleButton {...props}>{props.children}</ToggleButton>;
};

Default.storyName = 'ToggleButton';
Default.args = {
  children: 'ToggleButton',
};
