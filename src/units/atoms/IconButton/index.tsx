import React, { forwardRef } from 'react';
import _IconButton, {
  IconButtonProps as _IconButtonProps,
} from '@mui/material/IconButton';
import { styled } from '@mui/material';

export interface IconButtonProps extends _IconButtonProps {
  rectagle?: boolean;
}

const StyledIconButton = styled(
  forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ ...props }: IconButtonProps, ref) => (
      <_IconButton {...props} ref={ref} />
    ),
  ),
)(({ theme: _, rectagle }) => {
  return {
    '&': {
      'border-radius': rectagle ? '0' : '50%',
    },
  };
});

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ ...props }: IconButtonProps, ref = null) => {
    const styledIconButton = <StyledIconButton ref={ref} {...props} />;

    return styledIconButton;
  },
);
