
import { jsx, css } from '@emotion/react'
import React, { PropsWithChildren } from 'react';
import {
  GridLayout,
  IGridContainer,
  IGridLayout,
} from '../GridLayout';
import { Box } from '../../Box';

export default {
  title: 'VASES-UI/Layout/Grid',
  component: GridLayout,
};

const gridItems = ['#2e2efe', '#f7fe2e', '#fe9a2e'].map((array, idx) => {
  return {
    gridColumn: `${idx + 1}`,
    gridRow: `${idx + 1}`,
    component: (
      <Box
        css={css`
          height: 100px;
          width: 100px;
          background: ${array};
        `}
      ></Box>
    ),
  };
});

export const Default = (props: IGridLayout) => {
  return <GridLayout {...props} gridItems={gridItems} />;
};

Default.storyName = '3 and 3 Column';
Default.args = {
  gridContainer: { column: 3, row: 2 },
  gridItems: { gridItems },
};
