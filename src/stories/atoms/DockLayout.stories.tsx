
import { jsx, css } from '@emotion/react'
import React, { PropsWithChildren } from 'react';

import { DockLayout, DockLayoutProps } from '../../units/atoms/Layout/DockLayout';

export default {
  title: 'VASES-UI/Atoms/DockLayout',
  component: DockLayout,
};

export const Default = (props: DockLayoutProps) => (
  <DockLayout
    style={{
      position: 'absolute',
      left: 10,
      top: 10,
      right: 10,
      bottom: 10,
    }}
    {...props}
  />
);
Default.storyName = 'DockLayout';
let tab = {
  content: <div>Tab Content</div>,
  closable: true,
};
Default.args = {
  defaultLayout: {
    dockbox: {
      mode: 'horizontal',
      children: [
        {
          size: 200,
          tabs: [
            { id: 0, title: 'tab1' },
            { id: 1, title: 'tab2' },
          ],
        },
        {
          id: 'main',
          size: 600,
          tabs: [
            { id: 0, title: 'tab0' },
            { id: 1, title: 'jsxTab' },
            { id: 2, title: 'htmlTab' },
          ],
          panelLock: {
            panelStyle: 'main',
          },
        },
        {
          size: 200,
          tabs: [
            { id: 0, title: 'tab5' },
            { id: 1, title: 'tab6' },
          ],
        },
      ],
    },
    floatbox: {
      mode: 'float',
      children: [
        {
          tabs: [
            { ...tab, id: 't9', title: 'Tab 9', content: <div>Float</div> },
            { ...tab, id: 't10', title: 'Tab 10' },
          ],
          x: 300,
          y: 150,
          w: 400,
          h: 300,
        },
      ],
    },
  },
};
