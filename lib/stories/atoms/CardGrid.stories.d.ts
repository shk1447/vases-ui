/// <reference types="react" />
import { CardGridProps } from '../../units/atoms/CardGrid';
declare const _default: {
    title: string;
    component: (props: CardGridProps) => import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
    argTypes: {
        gap: {
            control: string;
        };
        cards: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: {
    (props: CardGridProps): JSX.Element;
    storyName: string;
    args: {
        cards: number[];
        gap: number;
        cardSize: {
            width: string;
            height: string;
        };
    };
};
