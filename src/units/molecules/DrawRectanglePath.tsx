import React, { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { DrawPoints, DrawPointsProps } from './DrawPoints';
import { Group } from '../atoms/Vector/Group';
import { Rectangle, RectangleProps } from '../atoms/Vector/Rectangle';

export interface DrawRectanglePathProps
  extends RectangleProps,
    DrawPointsProps {}

export const DrawRectanglePath = (props: DrawRectanglePathProps) => {
  const groupRef = useRef<any>();

  const handleGoPosition = (top: number, left: number) => {
    groupRef.current.goToPosition(top, left);
  };

  useEffect(() => {
    handleGoPosition(30, 40);
  }, []);

  return (
    <Group ref={groupRef}>
      <Rectangle {...props} />
      <DrawPoints
        points={props.points}
        radius={props.radius}
        pointstroke={props.pointstroke}
      />
      <Button>Test</Button>
    </Group>
  );
};
