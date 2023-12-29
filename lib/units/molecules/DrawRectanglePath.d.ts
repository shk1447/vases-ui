/// <reference types="react" />
import { DrawPointsProps } from './DrawPoints';
import { RectangleProps } from '../atoms/Vector/Rectangle';
export interface DrawRectanglePathProps extends RectangleProps, DrawPointsProps {
}
export declare const DrawRectanglePath: (props: DrawRectanglePathProps) => JSX.Element;
