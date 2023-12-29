import React from 'react';
import _Breadcrumbs, {
  BreadcrumbsProps as _BreadcrumbsProps,
} from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material';

export interface BreadcrumbsProps extends _BreadcrumbsProps {}

const StyledBreadcrumbs = styled(({ ...props }: BreadcrumbsProps) => (
  <_Breadcrumbs {...props} />
))(({ theme: _ }) => {
  return {};
});

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const styledBreadcrumbs = <StyledBreadcrumbs {...props} />;

  return styledBreadcrumbs;
};
