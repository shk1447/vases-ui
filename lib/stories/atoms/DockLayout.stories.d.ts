/// <reference types="react" />
import { DockLayoutProps } from '../../units/atoms/DockLayout';
declare const _default: {
    title: string;
    component: (props: DockLayoutProps) => JSX.Element;
};
export default _default;
export declare const Default: {
    (props: DockLayoutProps): JSX.Element;
    storyName: string;
    args: {
        defaultLayout: {
            dockbox: {
                mode: string;
                children: ({
                    size: number;
                    tabs: {
                        id: number;
                        title: string;
                    }[];
                    id?: undefined;
                    panelLock?: undefined;
                } | {
                    id: string;
                    size: number;
                    tabs: {
                        id: number;
                        title: string;
                    }[];
                    panelLock: {
                        panelStyle: string;
                    };
                })[];
            };
            floatbox: {
                mode: string;
                children: {
                    tabs: {
                        id: string;
                        title: string;
                        content: JSX.Element;
                        closable: boolean;
                    }[];
                    x: number;
                    y: number;
                    w: number;
                    h: number;
                }[];
            };
        };
    };
};
