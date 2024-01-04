import React, { PropsWithChildren } from 'react';

import { CustomButton, CustomButtonProps } from './CustomButton';

export default {
  title: 'VASES-UI/New/CustomButton',
  component: CustomButton,
};

export const Default = (props: CustomButtonProps) => (
  <CustomButton {...props}>test</CustomButton>
);

Default.storyName = 'Default';
