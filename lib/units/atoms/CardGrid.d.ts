import React from 'react';
export interface CardGridProps {
    cards: React.ReactNode[] | Element[];
    gap?: number;
    cardSize?: {
        width: string;
        height: string;
    };
    className?: string;
}
export declare const CardGrid: (props: CardGridProps) => import("@emotion/react/jsx-runtime").JSX.Element;
