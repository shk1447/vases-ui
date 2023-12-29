/// <reference types="react" />
import { AlertProps as _AlertProps } from '@mui/material/Alert';
export interface AlertProps extends _AlertProps {
}
export declare const CustomAlert: import("@emotion/styled").StyledComponent<AlertProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare function Alert({ ...props }: AlertProps): JSX.Element;
