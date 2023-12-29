import React from 'react';
import { Polygon as _Polygon } from '@visx/shape';
import { PolygonProps as _PolygonProps } from '@visx/shape/lib/shapes/Polygon';
import { styled } from '@mui/material';

export interface PolygonProps extends _PolygonProps {
  fill?: string;
  fillOpacity?: number;
  stroke?: string;
  strokeWidth?: number;
}

export const StyledPolygon = styled((props: PolygonProps) => (
  <_Polygon {...props} />
))(({ theme: _ }) => {
  return {};
});

export const Polygon = (props: PolygonProps) => {
  return <StyledPolygon {...props} />;
};
