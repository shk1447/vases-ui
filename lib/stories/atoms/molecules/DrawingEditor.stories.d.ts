import React from 'react';
import { CommandExecutedHandlerParam } from '../../../units/molecules/DrawingEditor/Core/Interfaces/CommandRegistry';
import { DrawingEditorProps } from '../../../units/molecules/DrawingEditor/Core/Interfaces/UI/DrawingEditor';
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<DrawingEditorProps & React.RefAttributes<import("../../../units/molecules/DrawingEditor/Core/Interfaces/UI/Canvas").CanvasImperativeInterface | undefined>>;
};
export default _default;
export declare const Default: {
    (props: DrawingEditorProps): JSX.Element;
    storyName: string;
    args: {
        width: string;
        height: string;
        imgSrc: string;
        booleanOperation: boolean;
        color: string;
        eraserRadius: number;
        cmds: import("../../../units/molecules/DrawingEditor/Core/Interfaces/Commands").Cmd[];
        commandExcutedHandler: (param: CommandExecutedHandlerParam) => void;
    };
};
