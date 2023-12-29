import React from 'react';
import _SwipeableDrawer, {
  SwipeableDrawerProps as _SwipeableDrawerProps,
} from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/material';

export interface SwipeableDrawerProps extends _SwipeableDrawerProps {}

const StyledSwipeableDrawer = styled((props: SwipeableDrawerProps) => (
  <_SwipeableDrawer {...props} />
))(({ theme: _ }) => {
  return {};
});

export const SwipeableDrawer = (props: SwipeableDrawerProps) => {
  return <StyledSwipeableDrawer {...props} />;
};
