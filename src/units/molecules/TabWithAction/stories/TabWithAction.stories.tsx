import React, { PropsWithChildren, useState } from 'react';
import { IconButton } from '../../../atoms/IconButton';
import {
  TabWithActions,
  TabWithActionsProps,
} from '../TabWithAction';
import { ICON_Save } from '../../../styles/icons';
import { action } from '@storybook/addon-actions';

import { jsx, css } from '@emotion/react'

export default {
  title: 'VASES-UI/Molecules/TabWithAction',
  component: TabWithActions,
};

export const Default = (props: PropsWithChildren<TabWithActionsProps>) => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleChangeTab = (value: string) => {
    setActiveTab(value);
  };

  return (
    <>
      <TabWithActions
        {...props}
        css={css`
          width: 100%;
          height: 50%;
        `}
        activeItem={activeTab}
        onChange={handleChangeTab}
        actions={
          <IconButton size="small" onClick={action('save Click!')}>
            <ICON_Save />
          </IconButton>
        }
      />
    </>
  );
};

Default.storyName = 'Default';
Default.args = {
  tabItems: [1, 2, 3, 4].map(item => {
    return {
      label: `tab${item}`,
      value: `tab${item}`,
      component: (
        <h3
          css={css`
            margin-left: 30px;
          `}
        >
          tab{item}
        </h3>
      ),
    };
  }),
};
