/// <reference types="react" />
import { DrawPointsProps } from './DrawPoints';
import { RectangleProps } from '../atoms/visualization/Rectangle';
export interface DrawRectanglePathProps extends RectangleProps, DrawPointsProps {
}
export declare const DrawRectanglePath: (props: DrawRectanglePathProps) => JSX.Element;
