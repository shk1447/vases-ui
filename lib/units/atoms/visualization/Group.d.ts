import React from 'react';
export interface GroupProps {
    /** Top offset applied to `<g/>`. */
    top?: number;
    /** Left offset applied to `<g/>`. */
    left?: number;
    /** Override `top` and `left` to provide the entire `transform` string. */
    transform?: string;
    /** className to apply to `<g/>`. */
    className?: string;
    children?: React.ReactNode;
    /** ref to underlying `<g/>`. */
    innerRef?: React.Ref<SVGGElement>;
}
export declare const StyledGroup: import("@emotion/styled").StyledComponent<GroupProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Group: React.ForwardRefExoticComponent<GroupProps & React.RefAttributes<unknown>>;
