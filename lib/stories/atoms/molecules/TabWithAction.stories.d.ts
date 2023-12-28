import { PropsWithChildren } from 'react';
import { TabWithActionsProps } from '../../../units/molecules/TabWithAction';
declare const _default: {
    title: string;
    component: ({ height, className, activeItem, tabItems, actions, children, onChange, }: TabWithActionsProps) => import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
};
export default _default;
export declare const Default: {
    (props: PropsWithChildren<TabWithActionsProps>): JSX.Element;
    storyName: string;
    args: {
        tabItems: {
            label: string;
            value: string;
            component: JSX.Element;
        }[];
    };
};
