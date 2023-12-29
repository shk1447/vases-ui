import React, { useState } from 'react';
import { Button } from '../Button';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '.';

export default {
  title: 'VASES-UI/Atoms/Dialog',
  component: Dialog,
  argTypes: {
    open: {
      control: 'boolean',
      defaultValue: true,
    },
    fullScreen: {
      control: 'boolean',
      defaultValue: false,
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'sm',
    },
    scroll: {
      control: { type: 'select' },
      options: ['body', 'paper'],
      defaultValue: 'paper',
    },
  },
};

export const Default = (props: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogTitle>title</DialogTitle>
      <DialogContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        exercitationem cumque repellendus eaque est dolor eius expedita nulla
        ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus
        iure cumque eaque?
      </DialogContent>
    </Dialog>
  );
};

Default.storyName = 'Dialog';
