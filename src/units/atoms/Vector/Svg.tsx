import React, { cloneElement, PropsWithChildren } from 'react';

import { jsx, css } from '@emotion/react'

export interface SvgProps {
  size?: any;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  className?: string;
}

export interface CalculateRatioProps {
  width: number;
  height: number;
}

export const CalculateRatio = ({ width, height }: CalculateRatioProps) => ({
  wRatio: width / 1920,
  hRatio: height / 1080,
});

export const CalculateRevertRatio = ({ width, height }: CalculateRatioProps) => ({
  wRatio: 1920 / width,
  hRatio: 1080 / height
});

export const Svg = ({
  size,
  className,
  children,
}: PropsWithChildren<SvgProps>) => {
  const { width, height, top, left} = size;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      css={css`
        position: absolute;
        top: ${top}px;
        left: ${left}px;
      `}
    >
      {children}
    </svg>
  );
};
