import MiniMapWrapper from '../../../Wrapper/MinimapWrapper';
/**
 * Minimap Imperative Interface
 */
export interface MinimapImperativeInterface {
    minimapWrapper: () => MiniMapWrapper | null | undefined;
    fullMapSizeChange: () => void;
}
/**
 * context interface in Minimap Component
 */
export interface IMinimapContext {
    posX: number;
    posY: number;
    scale: number;
}
