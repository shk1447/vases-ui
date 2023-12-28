import { Vector2d } from 'konva/lib/types';
import { MiniMapProps } from '../UI/Minimap/Minimap';
import { APIWrapper } from './APIWrapper';
import StageWrapper from './StageWrapper';
export interface ViewBoxProps {
    pos: {
        x: number;
        y: number;
    } | undefined;
    scale: Vector2d | undefined;
}
export interface MiniMapWarapperProps {
    height?: number;
    width?: number;
    scaleX?: number;
    scaleY?: number;
    posX?: number;
    posY?: number;
    minimap: MiniMapProps;
}
export default class MiniMapWrapper extends APIWrapper {
    private _ignoreShapes;
    private _minimapProps;
    private _fullmapStage;
    private _viewbox;
    constructor(container: HTMLDivElement, fullmapStage: StageWrapper | null | undefined, minimapProps: MiniMapWarapperProps);
    get minimapProps(): MiniMapWarapperProps;
    get stage(): import("konva/lib/Stage").Stage | null;
    get fullmapStage(): StageWrapper | null | undefined;
    get viewBox(): import("konva/lib/shapes/Rect").Rect | null;
    initialize(): void;
    MinimapSetUp(src: string): void;
    viewBoxUpdate(props: ViewBoxProps): void;
    destory(): void;
}
