import React, { DOMAttributes } from "react";
declare type MouseEvents = Pick<DOMAttributes<HTMLDivElement>, "onMouseOver" | "onMouseLeave" | "onMouseDown" | "onMouseUp">;
export interface FlexLayoutProps extends MouseEvents {
    direction: "row" | "column";
    gap: number;
    children?: React.ReactNode;
    className?: string;
}
export declare const FlexLayout: ({ ...props }: FlexLayoutProps) => JSX.Element;
export interface SpacerProps {
    className?: string;
}
export declare const Spacer: (props: SpacerProps) => JSX.Element;
export {};
