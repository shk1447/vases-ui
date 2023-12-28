import React from 'react';
import { Cmd } from '../../Interfaces/Commands';
import { CanvasImperativeInterface } from '../../Interfaces/UI/Canvas';
export interface CanvasProps {
    cmds: Cmd[];
    onSizeChanged: () => void;
    onCommandExcuted?: (param: any) => void;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<CanvasProps & React.RefAttributes<CanvasImperativeInterface | undefined>>>;
export default _default;
