import React from 'react';
import _Collapse, {
  CollapseProps as _CollapseProps,
} from '@mui/material/Collapse';
import { styled } from '@mui/material';

export interface CollapseProps extends _CollapseProps {}

const StyledCollapse = styled(({ ...props }: CollapseProps) => (
  <_Collapse {...props} />
))(({ theme: _ }) => {
  return {};
});

export const Collapse = ({ ...props }: CollapseProps) => {
  const styledCollapse = <StyledCollapse {...props} />;

  return styledCollapse;
};
