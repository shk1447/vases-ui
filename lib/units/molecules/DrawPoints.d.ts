/// <reference types="react" />
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
export declare const DrawPoints: ({ points, radius, pointstroke, pointStrokeWidth, pointFill, pointFillOpacity, }: DrawPointsProps) => JSX.Element;
