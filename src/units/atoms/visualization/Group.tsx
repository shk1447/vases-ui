import React, { forwardRef, useImperativeHandle } from 'react';
import { Group as _Group } from '@visx/group';
import { styled } from '@mui/material';

export interface GroupProps {
  /** Top offset applied to `<g/>`. */
  top?: number;
  /** Left offset applied to `<g/>`. */
  left?: number;
  /** Override `top` and `left` to provide the entire `transform` string. */
  transform?: string;
  /** className to apply to `<g/>`. */
  className?: string;
  children?: React.ReactNode;
  /** ref to underlying `<g/>`. */
  innerRef?: React.Ref<SVGGElement>;
}

export const StyledGroup = styled((props: GroupProps) => <_Group {...props} />)(
  ({ theme: _ }) => {
    return {};
  },
);

export const Group = forwardRef((props: GroupProps, ref) => {
  const { children } = props;

  useImperativeHandle(ref, () => ({
    goToPosition(top: number, left: number) {
      console.log('top :', top, 'left :', left);
    },
  }));

  return <StyledGroup {...props}>{children}</StyledGroup>;
});
