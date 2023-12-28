import React from 'react';
import _Tab, { TabProps as _TabProps } from '@mui/material/Tab';
import _Tabs, { TabsProps as _TabsProps } from '@mui/material/Tabs';
import { styled } from '@mui/material';

export interface TabProps extends _TabProps {}

export interface TabsProps extends _TabsProps {
  height?: number;
}

const StyledTabs = styled(({ ...props }: TabsProps) => <_Tabs {...props} />)(
  ({ theme: _, height }) => {
    return {
      '&': {
        minHeight: height ? `${height}px` : '',
      },
      '& .MuiButtonBase-root': {
        minHeight: height ? `${height}px` : '',
        height: height ? `${height}px` : '',
      },
    };
  },
);

const StyledTab = styled(({ ...props }: TabProps) => <_Tab {...props} />)(
  ({ theme: _ }) => {
    return {};
  },
);

export const Tab = ({ ...props }: TabProps) => {
  return <StyledTab {...props} />;
};

export const Tabs = ({ ...props }: TabsProps) => {
  return <StyledTabs {...props} />;
};
