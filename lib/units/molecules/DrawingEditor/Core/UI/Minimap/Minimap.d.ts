import React from 'react';
import { MinimapImperativeInterface } from '../../Interfaces/UI/Minimap';
export interface MiniMapProps {
    ratio: {
        height: number;
        width: number;
    };
    className?: string;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<MiniMapProps & React.RefAttributes<MinimapImperativeInterface | undefined>>>;
export default _default;
