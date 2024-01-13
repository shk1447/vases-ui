import type { Meta, StoryObj } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import { ColorDefine, ColorDefineProps } from './ColorDefine';

const ColorPicker = ({value, setValue}) => {
  console.log(value)
  return <div>ttttt</div>
}

class VeryComplicatedObject {
  constructor(text) {
    /* even more properties */
  }
}

const meta = {
  title: 'VASES-UI/New/ColorDefine',
  component: ColorDefine,
  argTypes: {
    primary: {
      control:{
        type:'object',
      }
    },
    secondary: {
      control:{
        type:'object'
      }
    }
  }
};

export const Default = (props: ColorDefineProps) => {
  console.log(props)
  return <ColorDefine {...props} />
}

Default.storyName = 'Default';
Default.args = {
  primary: {
    hue:260,
    saturation:100
  },
  secondary: {
    hue:220,
    saturation:50
  }
}

export default meta;