import React from 'react';
import _Chip, { ChipProps as _ChipProps } from '@mui/material/Chip';
import { styled } from '@mui/material';

export interface ChipProps extends _ChipProps {}

const StyledChip = styled(({ ...props }: ChipProps) => <_Chip {...props} />)(
  ({ theme: _ }) => {
    return {
      '&': {
        height: '30px',
        borderRadius: '8px',
      },
    };
  },
);

export const Chip = ({ ...props }: ChipProps) => {
  const styledChip = <StyledChip {...props} />;

  return styledChip;
};
