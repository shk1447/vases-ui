import React from "react";
import { LayoutConfig as _LayoutConfig, ComponentItemConfig as _ComponentItemConfig, EventEmitter, ComponentItem } from "golden-layout";
import "./css/goldenlayout-base.css";
import "./css/themes/goldenlayout-dark-theme.css";
export interface LayoutConfig extends _LayoutConfig {
}
export interface ComponentItemConfig extends _ComponentItemConfig {
}
export interface GoldenLayoutProps {
    className?: string;
    config: LayoutConfig;
    components?: Record<string, any>;
    itemCreated?: (item: EventEmitter.BubblingEvent) => void;
    itemDropped?: (item: ComponentItem) => void;
    itemDestroyed?: (item: EventEmitter.BubblingEvent) => void;
    stateChanged?: (content: any) => void;
}
export declare type GoldenLayoutHandle = {
    addComponent: (name: string, title: string, payload: any) => void;
    registerComponent: (name: string, DynamicComponent: any) => void;
};
export declare const GoldenLayout: React.ForwardRefExoticComponent<GoldenLayoutProps & React.RefAttributes<GoldenLayoutHandle>>;
