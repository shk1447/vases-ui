import React, { PropsWithChildren } from 'react';
import { CustomButton, CustomButtonProps } from './CustomButton';

export default {
  title: 'VASES-UI/New/CustomButton',
  component: CustomButton,
};

export const Default = (props: CustomButtonProps) => {
  return <CustomButton {...props}>한국말</CustomButton>
}

Default.storyName = 'Default';
