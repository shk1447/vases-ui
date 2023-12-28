/// <reference types="react" />
import { PolygonProps as _PolygonProps } from '@visx/shape/lib/shapes/Polygon';
export interface PolygonProps extends _PolygonProps {
    fill?: string;
    fillOpacity?: number;
    stroke?: string;
    strokeWidth?: number;
}
export declare const StyledPolygon: import("@emotion/styled").StyledComponent<PolygonProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Polygon: (props: PolygonProps) => JSX.Element;
