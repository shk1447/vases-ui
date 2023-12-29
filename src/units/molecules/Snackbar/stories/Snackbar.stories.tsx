import React from 'react';

import { Snackbar, SnackbarProps } from '..';

export default {
  title: 'VASES-UI/Molecules/Snackbar',
  component: Snackbar,
  open: {
    type: 'boolean',
  },
  message: {
    type: 'text',
  },
  anchorOrigin: {
    type: 'object',
  },
  autoHideDuration: {
    type: 'number',
  },
  key: {
    type: 'text',
  },
  resumeHideDuration: {
    type: 'number',
  },
};

export const Default = (props: SnackbarProps) => <Snackbar {...props} />;
Default.storyName = 'Snackbar';
Default.args = {
  open: true,
  message: 'snackbar!',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  autoHideDuration: 3,
  key: 'key',
  resumeHideDuration: 1,
};
