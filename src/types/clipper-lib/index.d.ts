declare module '@doodle3d/clipper-lib' {

    export const JS: any;
    export const Clipper: any;
    export const PolyFillType: any;
    export const PolyType: any;
    export const Paths: any;    
    export const ClipType: any;
    export const PolyTree: any;
    export interface Point {
        X : number,
        Y: number
    }
    export type Polygon = Point[];
    export type Polygons = Polygon[];
}