import React from 'react';
import _LinearProgress, {
  LinearProgressProps as _LinearProgressProps,
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

export interface LinearProgressProps extends _LinearProgressProps {}

const StyledLinearProgress = styled(({ ...props }: LinearProgressProps) => (
  <_LinearProgress {...props} />
))(({ theme: _ }) => {
  return {};
});

export const LinearProgress = ({ ...props }: LinearProgressProps) => {
  return <StyledLinearProgress {...props} />;
};

export const CustomLinearProgress = styled(LinearProgress)(() => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'rgba(34,34,34, 1)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'rgba(48, 143, 232, 1)',
  },
}));
