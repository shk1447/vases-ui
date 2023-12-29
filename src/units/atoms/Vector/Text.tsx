import React from 'react';
import { Text as _Text } from '@visx/text';
import { TextProps } from '@visx/text/lib/Text';
import { styled } from '@mui/material';

/**
  verticalAnchor="start" 를 default로 해두어야,
  초기 위치가 svg canvas의 0,0에 위치한다.
*/

export const StyledText = styled((props: TextProps) => {
  const { children } = props;

  return (
    <_Text verticalAnchor="start" {...props}>
      {children}
    </_Text>
  );
})(({ theme: _ }) => {
  return {};
});

export const Text = (props: TextProps) => {
  const { children } = props;

  return <StyledText {...props}>{children}</StyledText>;
};
