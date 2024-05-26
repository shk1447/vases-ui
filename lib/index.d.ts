import * as _mui_material_styles from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
export { ThemeProvider } from '@mui/material/styles';
import * as _emotion_styled from '@emotion/styled';
import * as _mui_system from '@mui/system';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import * as _mui_material_ButtonBase_TouchRipple from '@mui/material/ButtonBase/TouchRipple';
import * as _mui_material from '@mui/material';
import { TypographyProps } from '@mui/material';
import * as _mui_material_Button from '@mui/material/Button';
import * as react from 'react';
import { CheckboxProps } from '@mui/material/Checkbox';
import { SwitchProps as SwitchProps$1 } from '@mui/material/Switch';
import { TooltipProps as TooltipProps$1 } from '@mui/material/Tooltip';

declare module "@mui/material/styles" {
    interface Theme {
    }
    interface ThemeOptions {
    }
    interface PaletteColor {
        outlinedText?: string;
    }
    interface Palette {
        vases_success: Palette["primary"];
        vases_primary: Palette["primary"];
        vases_warning: Palette["primary"];
        vases_alert: Palette["primary"];
        vases_neutral: Palette["primary"];
    }
    interface PaletteOptions {
        vases_success: Palette["primary"];
        vases_primary: Palette["primary"];
        vases_warning: Palette["primary"];
        vases_alert: Palette["primary"];
        vases_neutral: Palette["primary"];
    }
    interface TypographyVariants {
        title1: React.CSSProperties;
        title2: React.CSSProperties;
        reg12: React.CSSProperties;
        med12: React.CSSProperties;
        bol12: React.CSSProperties;
        paragraph12: React.CSSProperties;
        reg14: React.CSSProperties;
        med14: React.CSSProperties;
        bol14: React.CSSProperties;
        paragraph14: React.CSSProperties;
        reg16: React.CSSProperties;
        med16: React.CSSProperties;
        bol16: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        title1: React.CSSProperties;
        title2: React.CSSProperties;
        reg12: React.CSSProperties;
        med12: React.CSSProperties;
        bol12: React.CSSProperties;
        paragraph12: React.CSSProperties;
        reg14: React.CSSProperties;
        med14: React.CSSProperties;
        bol14: React.CSSProperties;
        paragraph14: React.CSSProperties;
        reg16: React.CSSProperties;
        med16: React.CSSProperties;
        bol16: React.CSSProperties;
    }
}
declare const lightTheme: Theme;
declare const darkTheme: Theme;

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        vases_success: true;
        vases_primary: true;
        vases_warning: true;
        vases_alert: true;
        vases_neutral: true;
        primary: false;
        secondary: false;
        success: false;
        error: false;
        info: false;
        warning: false;
        inherit: false;
    }
    interface ButtonPropsSizeOverrides {
        small: false;
        medium: false;
        large: false;
        default: true;
        compact: true;
    }
    interface ButtonPropsVariantOverrides {
        contained: false;
        outlined: false;
        text: false;
        primary: true;
        secondary: true;
        tertiary: true;
        ghost: true;
        inline: true;
    }
}
declare const Button: _emotion_styled.StyledComponent<{
    children?: react.ReactNode;
    classes?: Partial<_mui_material_Button.ButtonClasses> | undefined;
    color?: "vases_success" | "vases_primary" | "vases_warning" | "vases_alert" | "vases_neutral" | undefined;
    disabled?: boolean | undefined;
    disableElevation?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    endIcon?: react.ReactNode;
    fullWidth?: boolean | undefined;
    href?: string | undefined;
    size?: "default" | "compact" | undefined;
    startIcon?: react.ReactNode;
    sx?: _mui_material_styles.SxProps<_mui_material_styles.Theme> | undefined;
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "inline" | undefined;
} & Omit<{
    action?: react.Ref<_mui_material.ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: react.ReactNode;
    classes?: Partial<_mui_material.ButtonBaseClasses> | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: react.ElementType<any> | undefined;
    onFocusVisible?: react.FocusEventHandler<any> | undefined;
    sx?: _mui_material_styles.SxProps<_mui_material_styles.Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<_mui_material_ButtonBase_TouchRipple.TouchRippleProps> | undefined;
    touchRippleRef?: react.Ref<_mui_material_ButtonBase_TouchRipple.TouchRippleActions> | undefined;
}, "classes"> & _mui_material_OverridableComponent.CommonProps & Omit<Pick<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | "css" | keyof react.ButtonHTMLAttributes<HTMLButtonElement>> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | react.RefObject<HTMLButtonElement> | null | undefined;
}, keyof _mui_material_OverridableComponent.CommonProps | "tabIndex" | "color" | "children" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "href" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "size" | "startIcon" | "variant"> & _mui_system.MUIStyledCommonProps<_mui_material_styles.Theme>, {}, {}>;

declare const Checkbox: (props: CheckboxProps) => JSX.Element;

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        title1: true;
        title2: true;
        reg12: true;
        med12: true;
        bol12: true;
        paragraph12: true;
        reg14: true;
        med14: true;
        bol14: true;
        paragraph14: true;
        reg16: true;
        med16: true;
        bol16: true;
    }
}
declare const Typography: ({ children, ...props }: TypographyProps) => JSX.Element;

interface SwitchProps extends SwitchProps$1 {
}
declare const Switch: _emotion_styled.StyledComponent<SwitchProps$1 & _mui_system.MUIStyledCommonProps<_mui_material_styles.Theme>, {}, {}>;

interface TooltipProps extends TooltipProps$1 {
    variant?: "info" | "name" | "items";
}
declare const Tooltip: _emotion_styled.StyledComponent<TooltipProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;

declare type SpinnerProps = {
    open: boolean;
    message?: string;
};
declare const Spinner: ({ open, message }: SpinnerProps) => JSX.Element;

declare const Chip: _emotion_styled.StyledComponent<{
    avatar?: react.ReactElement<any, string | react.JSXElementConstructor<any>> | undefined;
    children?: null | undefined;
    classes?: Partial<_mui_material.ChipClasses> | undefined;
    clickable?: boolean | undefined;
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | "default" | undefined;
    deleteIcon?: react.ReactElement<any, string | react.JSXElementConstructor<any>> | undefined;
    disabled?: boolean | undefined;
    icon?: react.ReactElement<any, string | react.JSXElementConstructor<any>> | undefined;
    label?: react.ReactNode;
    onDelete?: ((event: any) => void) | undefined;
    size?: "medium" | "small" | undefined;
    sx?: _mui_material.SxProps<_mui_material.Theme> | undefined;
    variant?: "outlined" | "filled" | undefined;
} & _mui_material_OverridableComponent.CommonProps & Omit<Pick<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | "css" | keyof react.HTMLAttributes<HTMLDivElement>> & {
    ref?: ((instance: HTMLDivElement | null) => void) | react.RefObject<HTMLDivElement> | null | undefined;
}, keyof _mui_material_OverridableComponent.CommonProps | "label" | "color" | "children" | "disabled" | "sx" | "size" | "variant" | "icon" | "avatar" | "clickable" | "deleteIcon" | "onDelete"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;

export { Button, Checkbox, Chip, Spinner, type SpinnerProps, Switch, type SwitchProps, Tooltip, Typography, darkTheme, lightTheme };
