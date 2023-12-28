import React from 'react';
import _List, { ListProps as _ListProps } from '@mui/material/List';
import _ListSubheader, {
  ListSubheaderProps as _ListSubheaderProps,
} from '@mui/material/ListSubheader';
import { styled } from '@mui/material';

export interface ListProps extends _ListProps {
  component?: string;
  className?: string;
}

export interface ListSubheaderProps extends _ListSubheaderProps {
  component?: string;
  className?: string;
}

const StyledList = styled(({ ...props }: ListProps) => <_List {...props} />)(
  ({ theme: _ }) => {
    return {
      '& .MuiList-root': {
        paddingLeft: '16px !important',
      },
    };
  },
);

const StyledListSubheader = styled(({ ...props }: ListSubheaderProps) => (
  <_ListSubheader {...props} />
))(({ theme: _ }) => {
  return {};
});

export const List = ({ ...props }: ListProps) => {
  const styledList = <StyledList {...props} dense />;

  return styledList;
};

export const ListSubheader = ({ ...props }: ListSubheaderProps) => {
  const styledListSubheader = <StyledListSubheader {...props} />;

  return styledListSubheader;
};
