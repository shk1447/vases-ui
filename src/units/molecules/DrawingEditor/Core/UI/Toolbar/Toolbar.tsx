import { css } from '@mui/material';
import React, { memo } from 'react';
import { FlexLayout } from '../../../../../atoms/Layout/FlexLayout';
import { LabelingToolbarProps } from '../../Interfaces/UI/Toolbar';

const toolbarContainer_styled = (align: string) => {
  return css`
    width: ${align === 'horizontal' ? '100%' : '40px'};
    align-items: center;
    background-color: #535353;
  `;
};

const LabelingToolbar = ({ ...props }: LabelingToolbarProps) => {
  return (
    <FlexLayout
      direction={props.align === 'horizontal' ? 'row' : 'column'}
      gap={0}
      css={toolbarContainer_styled(props.align ?? '')}
    >
      {props.itemComponent}
    </FlexLayout>
  );
};

export default memo(LabelingToolbar);
