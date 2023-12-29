import React from 'react';
import { styled } from '@mui/material';

export interface CircleProps {
  /** 반지름 길이 */
  r: number;
  /** 중심 x 좌표 */
  cx?: number;
  /** 중심 y 좌표 */
  cy?: number;
  /** 둘레 색상 */
  stroke?: string;
  /** 둘레 굵기 */
  strokeWidth?: number;
  /** 색상 */
  fill?: string;
  /** 색상 투명도 */
  fillOpacity?: number;
}

export const StyledCircle = styled((props: CircleProps) => (
  <circle {...props} />
))(({ theme: _ }) => {
  return {};
});

export const Circle = (props: CircleProps) => {
  return <StyledCircle {...props} />;
};
