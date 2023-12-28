import React from 'react';
import { Circle } from '../atoms/visualization/Circle';

export interface PointProps {
  /** x 좌표 */
  x: number;
  /** y 좌표 */
  y: number;
}

export interface DrawPointsProps {
  /** 점 배열 */
  points: PointProps[];
  /** 점 반지름 */
  radius: number;
  /** 점 둘레 색상 */
  pointstroke: string;
  /** 점 배열 둘레 두께*/
  pointStrokeWidth?: number;
  /** 점 색상 */
  pointFill?: string;
  /** 점 색상 투명도 */
  pointFillOpacity?: number;
}

export const DrawPoints = ({
  points,
  radius,
  pointstroke,
  pointStrokeWidth,
  pointFill,
  pointFillOpacity,
}: DrawPointsProps) => {
  return (
    <>
      {points.map(({ x, y }, i: number) => (
        <Circle
          key={`roi-point-${i}`}
          cx={x}
          cy={y}
          r={radius}
          stroke={pointstroke}
          strokeWidth={pointStrokeWidth}
          fill={pointFill}
          fillOpacity={pointFillOpacity}
        />
      ))}
    </>
  );
};
