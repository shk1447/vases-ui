/// <reference types="react" />
import { Cmd } from '../../Commands';
export interface LabelingToolbarItemInfo {
    command: Cmd;
}
export interface LabelingToolbarProps {
    align: string;
    itemComponent: JSX.Element[];
}
