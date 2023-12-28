import React from 'react';
import { css, keyframes } from '@emotion/react';

export interface RectangleProps {
  /** 너비 */
  width: number;
  /** 높이 */
  height: number;
  /** 시작 점 x 좌표 */
  x: number;
  /** 시작 점 y 좌표 */
  y: number;
  /** 꼭지점 x축 둥글기 */
  rx?: number;
  /** 꼭지점 y축 둥글기 */
  ry?: number;
  /** 둘레 색상 */
  stroke?: string;
  /** 둘레 굵기 */
  strokeWidth?: number;
  /** 색상 */
  fill?: string;
  /** 색상 투명도*/
  fillOpacity?: number;
  strokeDasharray?: number;
  animation?: string;
}

const pulse = keyframes`
25% {
  opacity: 0.4;
}
100% {
  opacity: 1;
}
`;

export const Rectangle = (props: RectangleProps) => {
  return (
    <rect
      css={css`
        position: absolute;
        z-index: 10;
        animation: ${props.animation === 'pulse'
          ? css`
              ${pulse} 1.7s infinite linear;
            `
          : ''};
      `}
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      fill={props.fill}
      fillOpacity={props.fillOpacity}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      strokeDasharray={props.strokeDasharray}
    />
  );
};
