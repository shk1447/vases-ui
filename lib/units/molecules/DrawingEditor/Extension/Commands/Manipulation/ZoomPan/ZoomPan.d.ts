import { Cmd } from '../../../../Core/Interfaces/Commands';
interface ZoomCommandParameter {
    zoomScale: number;
}
export declare type zoomInCommandParameter = ZoomCommandParameter;
export declare type zoomOutCommandParameter = ZoomCommandParameter;
export declare type zoomInCommandReturn = void;
/**
 * 줌 인 커맨드
 */
declare const zoomInCommand: Cmd;
/**
 * 줌 아웃 커맨드
 */
declare const zoomOutCommand: Cmd;
declare const panCommand: Cmd;
export { zoomInCommand, zoomOutCommand, panCommand };
