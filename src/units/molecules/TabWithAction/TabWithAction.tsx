
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled';
import { useTheme } from '@mui/material';
import { FlexLayout, Spacer } from '../../atoms/Layout/FlexLayout';
import { Tab, Tabs } from '../../atoms/Tabs';
import { useMyTheme } from '../../../themes';

export interface TabItem {
  value: string;
  label: string;
  component: React.ReactNode;
}

export interface TabWithActionsProps {
  height?: number;
  className?: string;
  activeItem: string;
  tabItems: TabItem[];
  actions?: React.ReactNode;
  onChange?: (activeItem: string) => void;
  children?: React.ReactNode;
}

const TabContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow: auto;
`;

export const TabWithActions = ({
  height,
  className,
  activeItem,
  tabItems,
  actions,
  children,
  onChange,
}: TabWithActionsProps) => {
  const theme = useMyTheme();
  const selected = tabItems.find(item => item.value == activeItem);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    onChange && onChange(newValue);
  };

  return (
    <FlexLayout direction="column" gap={0} className={className}>
      <FlexLayout
        direction="row"
        gap={0}
        css={css`
          background: ${theme.custom?.pallete?.background};
          border-bottom: 1px solid ${theme.custom?.pallete?.border};
        `}
      >
        <Tabs
          height={height}
          variant="scrollable"
          scrollButtons="auto"
          value={activeItem}
          onChange={handleChange}
        >
          {tabItems.map(item => {
            return (
              <Tab key={item.value} value={item.value} label={item.label} />
            );
          })}
        </Tabs>
        <Spacer />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto;
          `}
        >
          {actions}
        </div>
      </FlexLayout>
      {children}
      <TabContainer>{selected ? selected.component : <></>}</TabContainer>
    </FlexLayout>
  );
};
