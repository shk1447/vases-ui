import React from 'react';
import _Badge, { BadgeProps as _BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material';

export interface BadgeProps extends _BadgeProps {}

const StyledBadge = styled((props: BadgeProps) => {
  return <_Badge {...props} />;
})(({ theme: _ }) => {
  return {};
});

export const Badge = (props: BadgeProps) => {
  return <StyledBadge {...props} />;
};
