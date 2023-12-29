
import { jsx, css } from '@emotion/react'

import React from 'react';
import {
  FlexLayout,
  FlexLayoutProps,
} from '../../../units/atoms/Layout/FlexLayout';


export default {
  title: 'VASES-UI/Layout/Flex',
  component: FlexLayout,
};

export const Default = (props: FlexLayoutProps) => {
  return (
    <FlexLayout {...props}>
      {['#2e2efe', '#58faf4', '#f7fe2e'].map((array, idx) => {
        return (
          <div
            css={css`
            height: 100px;
            width: 100px;
            background: ${array};
            `}
          ></div>
        );
      })}
    </FlexLayout>
  );
};

Default.storyName = 'Default';
Default.args = {
  direction: 'row',
};
