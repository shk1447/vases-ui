import {
  SwipeableDrawer as _SwipeableDrawer,
  SwipeableDrawerProps as _SwipeableDrawerProps,
} from '@mui/material';

export interface SwipeableDrawerProps extends _SwipeableDrawerProps {}
export const SwipeableDrawer = (props: SwipeableDrawerProps) => {
  return <_SwipeableDrawer {...props}></_SwipeableDrawer>;
};

export default SwipeableDrawer;
