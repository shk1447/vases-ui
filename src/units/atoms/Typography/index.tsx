import React from 'react';
import _Typography, {
  TypographyProps as _TypographyProps,
} from '@mui/material/Typography';
import { styled } from '@mui/material';

export interface TypographyProps extends _TypographyProps {}

const StyledTypography = styled(({ ...props }: TypographyProps) => (
  <_Typography {...props} />
))(({ theme: _ }) => {
  return {};
});

export const Typography = ({ ...props }: TypographyProps) => {
  const styledTypography = <StyledTypography {...props} />;

  return styledTypography;
};
