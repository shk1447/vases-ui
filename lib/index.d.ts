import * as _mui_material_styles from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
export { ThemeProvider } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import { CheckboxProps } from '@mui/material/Checkbox';
import * as _mui_material from '@mui/material';
import { TypographyProps } from '@mui/material';
import { SwitchProps as SwitchProps$1 } from '@mui/material/Switch';
import { TooltipProps as TooltipProps$1 } from '@mui/material/Tooltip';
import { ChipProps } from '@mui/material/Chip';
import * as _emotion_styled from '@emotion/styled';
import * as _mui_system from '@mui/system';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import * as _mui_material_Breadcrumbs from '@mui/material/Breadcrumbs';
import * as react from 'react';
import react__default, { ReactNode, ReactElement, RefObject, Key, RefAttributes, Dispatch, SetStateAction, PropsWithChildren } from 'react';
import { CardProps } from '@mui/material/Card';
import { CardHeaderProps } from '@mui/material/CardHeader';
import { CardContentProps } from '@mui/material/CardContent';
import { DialogProps } from '@mui/material/Dialog';
import { FormControlProps } from '@mui/material/FormControl';
import { SnackbarKey, SnackbarProviderProps } from 'notistack';
import { SnackbarProps } from '@mui/material/Snackbar';

declare module '@mui/material/styles' {
    interface Theme {
    }
    interface ThemeOptions {
    }
    interface PaletteColor {
        outlinedText?: string;
    }
    interface Palette {
        vases_success: Palette['primary'];
        vases_primary: Palette['primary'];
        vases_warning: Palette['primary'];
        vases_alert: Palette['primary'];
        vases_neutral: Palette['primary'];
    }
    interface PaletteOptions {
        vases_success: Palette['primary'];
        vases_primary: Palette['primary'];
        vases_warning: Palette['primary'];
        vases_alert: Palette['primary'];
        vases_neutral: Palette['primary'];
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

declare module '@mui/material/Button' {
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
declare const Button: {
    ({ ...props }: ButtonProps): JSX.Element;
    defaultProps: {
        color: string;
        variant: string;
        size: string;
    };
};

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
declare const Switch: ({ ...props }: SwitchProps) => JSX.Element;

interface TooltipProps extends TooltipProps$1 {
    variant?: 'info' | 'name' | 'items';
}
declare const Tooltip: ({ ...props }: TooltipProps) => JSX.Element;

declare type SpinnerProps = {
    open: boolean;
    message?: string;
};
declare const Spinner: ({ open, message }: SpinnerProps) => JSX.Element;

declare const Chip: ({ ...props }: ChipProps) => JSX.Element;

declare const Breadcrumbs: _emotion_styled.StyledComponent<{
    children?: react.ReactNode;
    classes?: Partial<_mui_material_Breadcrumbs.BreadcrumbsClasses> | undefined;
    expandText?: string | undefined;
    itemsAfterCollapse?: number | undefined;
    itemsBeforeCollapse?: number | undefined;
    maxItems?: number | undefined;
    separator?: react.ReactNode;
    sx?: _mui_material_styles.SxProps<_mui_material_styles.Theme> | undefined;
} & _mui_material_OverridableComponent.CommonProps & Omit<Pick<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, keyof react.HTMLAttributes<HTMLElement> | "key" | "css"> & {
    ref?: ((instance: HTMLElement | null) => void) | react.RefObject<HTMLElement> | null | undefined;
}, keyof _mui_material_OverridableComponent.CommonProps | "children" | "sx" | "separator" | "expandText" | "itemsAfterCollapse" | "itemsBeforeCollapse" | "maxItems"> & _mui_system.MUIStyledCommonProps<_mui_material_styles.Theme>, {}, {}>;

interface StyledCardProps extends CardProps {
    checkable?: boolean;
    disableCheckbox?: boolean;
    checkHandler?: (flag: boolean) => void;
}
declare const Card: {
    ({ children, onChange, checkable, disableCheckbox, checkHandler, ...props }: StyledCardProps): JSX.Element;
    Header: (props: CardHeaderProps) => JSX.Element;
    Content: ({ children, ...props }: CardContentProps) => JSX.Element;
    Footer: ({ children }: FooterProps) => JSX.Element;
};
interface FooterProps {
    children: ReactNode;
}

interface CustomDialogProps extends DialogProps {
    children: ReactNode;
    open: boolean;
}
declare const Dialog: {
    (props: CustomDialogProps): JSX.Element;
    Title: {
        ({ children }: AreaProps): JSX.Element;
        displayName: string;
    };
    Description: {
        ({ children }: AreaProps): JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: AreaProps): JSX.Element;
        displayName: string;
    };
    Buttons: {
        ({ children }: AreaProps): JSX.Element;
        displayName: string;
    };
};
interface AreaProps {
    children: ReactNode;
}

interface OptionProps {
    title: react__default.ReactNode;
    value: any;
    addNew?: boolean;
    disabled?: boolean;
    renderOption?: react__default.ReactNode;
    description?: string;
}
interface AutoCompleteProps {
    options: OptionProps[];
    selectedItem: OptionProps | undefined;
    addOption?: boolean;
    onChange?: (value: any) => void;
    onAddItem?: (value: any) => void;
    style?: react__default.CSSProperties | undefined;
}

declare const FormControl: {
    ({ children, ...props }: FormControlProps): JSX.Element;
    Label: ({ children }: _mui_material.InputLabelProps) => JSX.Element;
    Dropdown: {
        ({ select, value, onClick, children, renderValue, ...props }: {
            renderValue?: ((value: unknown) => react.ReactNode) | undefined;
        } & _mui_material.StandardTextFieldProps): JSX.Element;
        Item: any;
    };
    TextField: ({ color, ...props }: _mui_material.TextFieldProps) => JSX.Element;
    RadioGroup: {
        ({ children, ...props }: _mui_material.RadioGroupProps): JSX.Element;
        Radio: (props: {
            className?: string | undefined;
            style?: react.CSSProperties | undefined;
            classes?: Partial<_mui_material.FormControlLabelClasses> | undefined;
            form?: string | undefined;
            label: react.ReactNode;
            slot?: string | undefined;
            title?: string | undefined;
            defaultChecked?: boolean | undefined;
            defaultValue?: string | number | readonly string[] | undefined;
            suppressContentEditableWarning?: boolean | undefined;
            suppressHydrationWarning?: boolean | undefined;
            accessKey?: string | undefined;
            contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
            contextMenu?: string | undefined;
            dir?: string | undefined;
            draggable?: (boolean | "true" | "false") | undefined;
            hidden?: boolean | undefined;
            id?: string | undefined;
            lang?: string | undefined;
            nonce?: string | undefined;
            placeholder?: string | undefined;
            spellCheck?: (boolean | "true" | "false") | undefined;
            tabIndex?: number | undefined;
            translate?: "yes" | "no" | undefined;
            radioGroup?: string | undefined;
            role?: react.AriaRole | undefined;
            about?: string | undefined;
            datatype?: string | undefined;
            inlist?: any;
            prefix?: string | undefined;
            property?: string | undefined;
            resource?: string | undefined;
            typeof?: string | undefined;
            vocab?: string | undefined;
            autoCapitalize?: string | undefined;
            autoCorrect?: string | undefined;
            autoSave?: string | undefined;
            color?: string | undefined;
            itemProp?: string | undefined;
            itemScope?: boolean | undefined;
            itemType?: string | undefined;
            itemID?: string | undefined;
            itemRef?: string | undefined;
            results?: number | undefined;
            security?: string | undefined;
            unselectable?: "on" | "off" | undefined;
            inputMode?: "text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
            is?: string | undefined;
            'aria-activedescendant'?: string | undefined;
            'aria-atomic'?: (boolean | "true" | "false") | undefined;
            'aria-autocomplete'?: "list" | "none" | "inline" | "both" | undefined;
            'aria-busy'?: (boolean | "true" | "false") | undefined;
            'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
            'aria-colcount'?: number | undefined;
            'aria-colindex'?: number | undefined;
            'aria-colspan'?: number | undefined;
            'aria-controls'?: string | undefined;
            'aria-current'?: boolean | "time" | "true" | "false" | "page" | "step" | "date" | "location" | undefined;
            'aria-describedby'?: string | undefined;
            'aria-details'?: string | undefined;
            'aria-disabled'?: (boolean | "true" | "false") | undefined;
            'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
            'aria-errormessage'?: string | undefined;
            'aria-expanded'?: (boolean | "true" | "false") | undefined;
            'aria-flowto'?: string | undefined;
            'aria-grabbed'?: (boolean | "true" | "false") | undefined;
            'aria-haspopup'?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined;
            'aria-hidden'?: (boolean | "true" | "false") | undefined;
            'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
            'aria-keyshortcuts'?: string | undefined;
            'aria-label'?: string | undefined;
            'aria-labelledby'?: string | undefined;
            'aria-level'?: number | undefined;
            'aria-live'?: "off" | "assertive" | "polite" | undefined;
            'aria-modal'?: (boolean | "true" | "false") | undefined;
            'aria-multiline'?: (boolean | "true" | "false") | undefined;
            'aria-multiselectable'?: (boolean | "true" | "false") | undefined;
            'aria-orientation'?: "horizontal" | "vertical" | undefined;
            'aria-owns'?: string | undefined;
            'aria-placeholder'?: string | undefined;
            'aria-posinset'?: number | undefined;
            'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
            'aria-readonly'?: (boolean | "true" | "false") | undefined;
            'aria-relevant'?: "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
            'aria-required'?: (boolean | "true" | "false") | undefined;
            'aria-roledescription'?: string | undefined;
            'aria-rowcount'?: number | undefined;
            'aria-rowindex'?: number | undefined;
            'aria-rowspan'?: number | undefined;
            'aria-selected'?: (boolean | "true" | "false") | undefined;
            'aria-setsize'?: number | undefined;
            'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
            'aria-valuemax'?: number | undefined;
            'aria-valuemin'?: number | undefined;
            'aria-valuenow'?: number | undefined;
            'aria-valuetext'?: string | undefined;
            dangerouslySetInnerHTML?: {
                __html: string;
            } | undefined;
            onCopy?: react.ClipboardEventHandler<HTMLLabelElement> | undefined;
            onCopyCapture?: react.ClipboardEventHandler<HTMLLabelElement> | undefined;
            onCut?: react.ClipboardEventHandler<HTMLLabelElement> | undefined;
            onCutCapture?: react.ClipboardEventHandler<HTMLLabelElement> | undefined;
            onPaste?: react.ClipboardEventHandler<HTMLLabelElement> | undefined;
            onPasteCapture?: react.ClipboardEventHandler<HTMLLabelElement> | undefined;
            onCompositionEnd?: react.CompositionEventHandler<HTMLLabelElement> | undefined;
            onCompositionEndCapture?: react.CompositionEventHandler<HTMLLabelElement> | undefined;
            onCompositionStart?: react.CompositionEventHandler<HTMLLabelElement> | undefined;
            onCompositionStartCapture?: react.CompositionEventHandler<HTMLLabelElement> | undefined;
            onCompositionUpdate?: react.CompositionEventHandler<HTMLLabelElement> | undefined;
            onCompositionUpdateCapture?: react.CompositionEventHandler<HTMLLabelElement> | undefined;
            onFocus?: react.FocusEventHandler<HTMLLabelElement> | undefined;
            onFocusCapture?: react.FocusEventHandler<HTMLLabelElement> | undefined;
            onBlur?: react.FocusEventHandler<HTMLLabelElement> | undefined;
            onBlurCapture?: react.FocusEventHandler<HTMLLabelElement> | undefined;
            onChange?: ((event: react.SyntheticEvent<Element, Event>, checked: boolean) => void) | undefined;
            onChangeCapture?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onBeforeInput?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onBeforeInputCapture?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onInput?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onInputCapture?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onReset?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onResetCapture?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onSubmit?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onSubmitCapture?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onInvalid?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onInvalidCapture?: react.FormEventHandler<HTMLLabelElement> | undefined;
            onLoad?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onLoadCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onError?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onErrorCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onKeyDown?: react.KeyboardEventHandler<HTMLLabelElement> | undefined;
            onKeyDownCapture?: react.KeyboardEventHandler<HTMLLabelElement> | undefined;
            onKeyPress?: react.KeyboardEventHandler<HTMLLabelElement> | undefined;
            onKeyPressCapture?: react.KeyboardEventHandler<HTMLLabelElement> | undefined;
            onKeyUp?: react.KeyboardEventHandler<HTMLLabelElement> | undefined;
            onKeyUpCapture?: react.KeyboardEventHandler<HTMLLabelElement> | undefined;
            onAbort?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onAbortCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onCanPlay?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onCanPlayCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onCanPlayThrough?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onCanPlayThroughCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onDurationChange?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onDurationChangeCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onEmptied?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onEmptiedCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onEncrypted?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onEncryptedCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onEnded?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onEndedCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onLoadedData?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onLoadedDataCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onLoadedMetadata?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onLoadedMetadataCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onLoadStart?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onLoadStartCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onPause?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onPauseCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onPlay?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onPlayCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onPlaying?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onPlayingCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onProgress?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onProgressCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onRateChange?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onRateChangeCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onResize?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onResizeCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onSeeked?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onSeekedCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onSeeking?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onSeekingCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onStalled?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onStalledCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onSuspend?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onSuspendCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onTimeUpdate?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onTimeUpdateCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onVolumeChange?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onVolumeChangeCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onWaiting?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onWaitingCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onAuxClick?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onAuxClickCapture?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onClick?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onClickCapture?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onContextMenu?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onContextMenuCapture?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onDoubleClick?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onDoubleClickCapture?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onDrag?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragCapture?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragEnd?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragEndCapture?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragEnter?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragEnterCapture?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragExit?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragExitCapture?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragLeave?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragLeaveCapture?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragOver?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragOverCapture?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragStart?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDragStartCapture?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDrop?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onDropCapture?: react.DragEventHandler<HTMLLabelElement> | undefined;
            onMouseDown?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseDownCapture?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseEnter?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseLeave?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseMove?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseMoveCapture?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseOut?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseOutCapture?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseOver?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseOverCapture?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseUp?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onMouseUpCapture?: react.MouseEventHandler<HTMLLabelElement> | undefined;
            onSelect?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onSelectCapture?: react.ReactEventHandler<HTMLLabelElement> | undefined;
            onTouchCancel?: react.TouchEventHandler<HTMLLabelElement> | undefined;
            onTouchCancelCapture?: react.TouchEventHandler<HTMLLabelElement> | undefined;
            onTouchEnd?: react.TouchEventHandler<HTMLLabelElement> | undefined;
            onTouchEndCapture?: react.TouchEventHandler<HTMLLabelElement> | undefined;
            onTouchMove?: react.TouchEventHandler<HTMLLabelElement> | undefined;
            onTouchMoveCapture?: react.TouchEventHandler<HTMLLabelElement> | undefined;
            onTouchStart?: react.TouchEventHandler<HTMLLabelElement> | undefined;
            onTouchStartCapture?: react.TouchEventHandler<HTMLLabelElement> | undefined;
            onPointerDown?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerDownCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerMove?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerMoveCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerUp?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerUpCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerCancel?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerCancelCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerEnter?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerEnterCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerLeave?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerLeaveCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerOver?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerOverCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerOut?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onPointerOutCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onGotPointerCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onGotPointerCaptureCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onLostPointerCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onLostPointerCaptureCapture?: react.PointerEventHandler<HTMLLabelElement> | undefined;
            onScroll?: react.UIEventHandler<HTMLLabelElement> | undefined;
            onScrollCapture?: react.UIEventHandler<HTMLLabelElement> | undefined;
            onWheel?: react.WheelEventHandler<HTMLLabelElement> | undefined;
            onWheelCapture?: react.WheelEventHandler<HTMLLabelElement> | undefined;
            onAnimationStart?: react.AnimationEventHandler<HTMLLabelElement> | undefined;
            onAnimationStartCapture?: react.AnimationEventHandler<HTMLLabelElement> | undefined;
            onAnimationEnd?: react.AnimationEventHandler<HTMLLabelElement> | undefined;
            onAnimationEndCapture?: react.AnimationEventHandler<HTMLLabelElement> | undefined;
            onAnimationIteration?: react.AnimationEventHandler<HTMLLabelElement> | undefined;
            onAnimationIterationCapture?: react.AnimationEventHandler<HTMLLabelElement> | undefined;
            onTransitionEnd?: react.TransitionEventHandler<HTMLLabelElement> | undefined;
            onTransitionEndCapture?: react.TransitionEventHandler<HTMLLabelElement> | undefined;
            disabled?: boolean | undefined;
            sx?: _mui_system.SxProps<_mui_material.Theme> | undefined;
            ref?: react.Ref<unknown> | undefined;
            name?: string | undefined;
            value?: unknown;
            checked?: boolean | undefined;
            inputRef?: react.Ref<any> | undefined;
            componentsProps?: {
                typography?: _mui_material.TypographyProps<"span", {}> | undefined;
            } | undefined;
            htmlFor?: string | undefined;
            disableTypography?: boolean | undefined;
            labelPlacement?: "bottom" | "top" | "end" | "start" | undefined;
        }) => JSX.Element;
    };
    CheckboxGroup: {
        ({ children, ...props }: _mui_material.FormGroupProps): JSX.Element;
        Checkbox: (props: _mui_material.FormControlLabelProps) => JSX.Element;
    };
    HelperText: _emotion_styled.StyledComponent<{
        children?: react.ReactNode;
        classes?: Partial<_mui_material.FormHelperTextClasses> | undefined;
        disabled?: boolean | undefined;
        error?: boolean | undefined;
        filled?: boolean | undefined;
        focused?: boolean | undefined;
        margin?: "dense" | undefined;
        required?: boolean | undefined;
        sx?: _mui_system.SxProps<_mui_material.Theme> | undefined;
        variant?: "outlined" | "filled" | "standard" | undefined;
    } & _mui_material_OverridableComponent.CommonProps & Omit<Pick<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "key" | "css" | keyof react.HTMLAttributes<HTMLParagraphElement>> & {
        ref?: ((instance: HTMLParagraphElement | null) => void) | react.RefObject<HTMLParagraphElement> | null | undefined;
    }, keyof _mui_material_OverridableComponent.CommonProps | "children" | "disabled" | "sx" | "margin" | "variant" | "error" | "required" | "filled" | "focused"> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
    AutoComplete: (props: AutoCompleteProps) => JSX.Element;
    ColorPicker: ({ hex, onChange, }: {
        hex: string;
        onChange: (hex: string) => void;
    }) => JSX.Element;
};

declare const Toast: {
    ({ children, ...props }: SnackbarProps): JSX.Element;
    Content: _emotion_styled.StyledComponent<_mui_material.SnackbarContentProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme> & CustomToastContentProps, {}, {}>;
};
interface CustomToastContentProps extends SnackbarProps {
    severity: 'info' | 'success' | 'warning' | 'error';
}
declare const useSnackbar: () => {
    enqueueSnackbar: (variant: 'error' | 'warning' | 'info' | 'success', message: react__default.ReactNode) => SnackbarKey;
    closeSnackbar: (key?: SnackbarKey) => void;
};
declare const SnackbarProvider: (props: SnackbarProviderProps) => JSX.Element;

interface GroupRowRendererProps<R, SR> extends Omit$1<React.HTMLAttributes<HTMLDivElement>, "style" | "children"> {
    id: string;
    groupKey: unknown;
    groupByKey: string | undefined;
    viewportColumns: readonly CalculatedColumn<R, SR>[];
    childRows: readonly R[];
    selectedChildRows?: readonly R[];
    rowIdx: number;
    row: GroupRow<R>;
    columns: readonly Column<R, SR>[];
    gridRowStart: number;
    height: number;
    level: number;
    selectedCellIdx: number | undefined;
    isExpanded: boolean;
    isRowSelected: boolean;
    selectGroup: (rowIdx: number) => void;
    toggleGroup: (expandedGroupId: unknown) => void;
}

declare type Omit$1<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type Maybe<T> = T | undefined | null;
interface Column<TRow, TSummaryRow = unknown> {
    readonly hide?: boolean;
    /** The name of the column. By default it will be displayed in the header cell */
    readonly name: string | ReactElement;
    /** A unique key to distinguish each column */
    readonly key: string;
    /** Column width. If not specified, it will be determined automatically based on grid width and specified widths of other columns */
    readonly width?: Maybe<number | string>;
    /** Minimum column width in px. */
    readonly minWidth?: Maybe<number>;
    /** Maximum column width in px. */
    readonly maxWidth?: Maybe<number>;
    readonly cellClass?: Maybe<string | ((row: TRow) => Maybe<string>)>;
    readonly headerCellClass?: Maybe<string>;
    readonly summaryCellClass?: Maybe<string | ((row: TSummaryRow) => Maybe<string>)>;
    /** Formatter to be used to render the cell content */
    readonly formatter?: Maybe<(props: FormatterProps<TRow, TSummaryRow>) => ReactNode>;
    /** Formatter to be used to render the summary cell content */
    readonly summaryFormatter?: Maybe<(props: SummaryFormatterProps<TSummaryRow, TRow>) => ReactNode>;
    /** Formatter to be used to render the group cell content */
    readonly groupFormatter?: Maybe<(props: GroupFormatterProps<TRow, TSummaryRow>) => ReactNode>;
    /** Enables cell editing. If set and no editor property specified, then a textinput will be used as the cell editor */
    readonly editable?: Maybe<boolean | ((row: TRow) => boolean)>;
    readonly colSpan?: Maybe<(args: ColSpanArgs<TRow, TSummaryRow>, colIndex?: number) => Maybe<number>>;
    /** Determines whether column is frozen or not */
    readonly frozen?: Maybe<boolean>;
    /** Enable resizing of a column */
    readonly resizable?: Maybe<boolean>;
    /** Enable sorting of a column */
    readonly sortable?: Maybe<boolean>;
    /** Sets the column sort order to be descending instead of ascending the first time the column is sorted */
    readonly sortDescendingFirst?: Maybe<boolean>;
    /** Editor to be rendered when cell of column is being edited. If set, then the column is automatically set to be editable */
    readonly editor?: Maybe<(props: EditorProps<TRow, TSummaryRow>) => ReactNode>;
    readonly editorOptions?: Maybe<{
        /** @default false */
        readonly renderFormatter?: Maybe<boolean>;
        /** @default false */
        readonly editOnClick?: Maybe<boolean>;
        /** @default true */
        readonly commitOnOutsideClick?: Maybe<boolean>;
        /** Prevent default to cancel editing */
        readonly onCellKeyDown?: Maybe<(event: React.KeyboardEvent<HTMLDivElement>) => void>;
        /** Control the default cell navigation behavior while the editor is open */
        readonly onNavigation?: Maybe<(event: React.KeyboardEvent<HTMLDivElement>) => boolean>;
    }>;
    /** Header renderer for each header cell */
    readonly headerRenderer?: Maybe<(props: HeaderRendererProps<TRow, TSummaryRow>) => ReactNode>;
}
interface CalculatedColumn<TRow, TSummaryRow = unknown> extends Column<TRow, TSummaryRow> {
    readonly idx: number;
    readonly width: number | string;
    readonly minWidth: number;
    readonly maxWidth: number | undefined;
    readonly resizable: boolean;
    readonly sortable: boolean;
    readonly frozen: boolean;
    readonly isLastFrozenColumn: boolean;
    readonly rowGroup: boolean;
    readonly formatter: (props: FormatterProps<TRow, TSummaryRow>) => ReactNode;
}
interface Position {
    readonly idx: number;
    readonly rowIdx: number;
}
interface FormatterProps<TRow, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TRow;
    isCellSelected: boolean;
    onRowChange: (row: TRow) => void;
}
interface SummaryFormatterProps<TSummaryRow, TRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TSummaryRow;
    isCellSelected: boolean;
}
interface GroupFormatterProps<TRow, TSummaryRow = unknown> {
    groupKey: unknown;
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: GroupRow<TRow>;
    childRows: readonly TRow[];
    isExpanded: boolean;
    isCellSelected: boolean;
    toggleGroup: () => void;
    indeterminate?: boolean;
}
interface EditorProps<TRow, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    row: TRow;
    onRowChange: (row: TRow, commitChanges?: boolean) => void;
    onClose: (commitChanges?: boolean) => void;
}
interface HeaderRendererProps<TRow, TSummaryRow = unknown> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    sortDirection: SortDirection | undefined;
    priority: number | undefined;
    onSort: (ctrlClick: boolean) => void;
    allRowsSelected: boolean;
    indeterminate?: boolean;
    onAllRowsSelectionChange: (checked: boolean) => void;
    isCellSelected: boolean;
}
interface CellRendererProps<TRow, TSummaryRow> extends Pick<RowRendererProps<TRow, TSummaryRow>, "onRowClick" | "onRowDoubleClick" | "selectCell">, Omit$1<React.HTMLAttributes<HTMLDivElement>, "style" | "children"> {
    column: CalculatedColumn<TRow, TSummaryRow>;
    colSpan: number | undefined;
    row: TRow;
    isCopied: boolean;
    isDraggedOver: boolean;
    isCellSelected: boolean;
    dragHandle: ReactElement<React.HTMLAttributes<HTMLDivElement>> | undefined;
    onRowChange: (column: CalculatedColumn<TRow, TSummaryRow>, newRow: TRow) => void;
}
interface RowRendererProps<TRow, TSummaryRow = unknown> extends Omit$1<React.HTMLAttributes<HTMLDivElement>, "style" | "children"> {
    viewportColumns: readonly CalculatedColumn<TRow, TSummaryRow>[];
    row: TRow;
    rowIdx: number;
    selectedCellIdx: number | undefined;
    copiedCellIdx: number | undefined;
    draggedOverCellIdx: number | undefined;
    lastFrozenColumnIndex: number;
    isRowSelected: boolean;
    gridRowStart: number;
    height: number;
    selectedCellEditor: ReactElement<EditorProps<TRow>> | undefined;
    selectedCellDragHandle: ReactElement<React.HTMLAttributes<HTMLDivElement>> | undefined;
    onRowChange: (column: CalculatedColumn<TRow, TSummaryRow>, rowIdx: number, newRow: TRow) => void;
    onRowClick: Maybe<(row: TRow, column: CalculatedColumn<TRow, TSummaryRow>, e?: any) => void>;
    onRowDoubleClick: Maybe<(row: TRow, column: CalculatedColumn<TRow, TSummaryRow>, e?: any) => void>;
    rowClass: Maybe<(row: TRow) => Maybe<string>>;
    setDraggedOverRowIdx: ((overRowIdx: number) => void) | undefined;
    selectCell: (row: TRow, column: CalculatedColumn<TRow, TSummaryRow>, enableEditor?: Maybe<boolean>) => void;
}
interface RowsChangeData<R, SR = unknown> {
    indexes: number[];
    column: CalculatedColumn<R, SR>;
}
interface SelectRowEvent<TRow> {
    row: TRow;
    checked: boolean;
    isShiftClick: boolean;
}
interface FillEvent<TRow> {
    columnKey: string;
    sourceRow: TRow;
    targetRow: TRow;
}
interface CopyEvent<TRow> {
    sourceColumnKey: string;
    sourceRow: TRow;
}
interface PasteEvent<TRow> {
    sourceColumnKey: string;
    sourceRow: TRow;
    targetColumnKey: string;
    targetRow: TRow;
}
interface GroupRow<TRow> {
    readonly childRows: readonly TRow[];
    readonly selectedChildRows: readonly TRow[];
    readonly id: string;
    readonly parentId: unknown;
    readonly groupKey: unknown;
    readonly isExpanded: boolean;
    readonly level: number;
    readonly posInSet: number;
    readonly setSize: number;
    readonly startRowIndex: number;
}
interface SortColumn {
    readonly columnKey: string;
    readonly direction: SortDirection;
}
declare type CellNavigationMode = "NONE" | "CHANGE_ROW" | "LOOP_OVER_ROW";
declare type SortDirection = "ASC" | "DESC";
declare type ColSpanArgs<TRow, TSummaryRow> = {
    type: "HEADER";
} | {
    type: "ROW";
    row: TRow;
} | {
    type: "SUMMARY";
    row: TSummaryRow;
};
declare type RowHeightArgs<TRow> = {
    type: "ROW";
    row: TRow;
} | {
    type: "GROUP";
    row: GroupRow<TRow>;
};
interface SortIconProps {
    sortDirection: SortDirection | undefined;
}
interface SortPriorityProps {
    priority: number | undefined;
}
interface SortStatusProps extends SortIconProps, SortPriorityProps {
}
interface CheckboxFormatterProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "aria-label" | "aria-labelledby" | "checked" | "tabIndex" | "disabled"> {
    indeterminate?: boolean;
    onChange: (checked: boolean, shift: boolean) => void;
}
interface Renderers<TRow, TSummaryRow> {
    sortStatus?: Maybe<(props: SortStatusProps) => ReactNode>;
    checkboxFormatter?: Maybe<(props: CheckboxFormatterProps, ref: RefObject<HTMLInputElement>) => ReactNode>;
    rowRenderer?: Maybe<(key: Key, props: RowRendererProps<TRow, TSummaryRow>) => ReactNode>;
    groupRowRenderer?: Maybe<(key: Key, props: GroupRowRendererProps<TRow, TSummaryRow>) => ReactNode>;
    noRowsFallback?: Maybe<ReactNode>;
}
declare type Direction = "ltr" | "rtl";

declare const SELECT_COLUMN_KEY = "select-row";
declare const SelectColumn: Column<any, any>;

declare const index$4_SELECT_COLUMN_KEY: typeof SELECT_COLUMN_KEY;
declare const index$4_SelectColumn: typeof SelectColumn;
declare namespace index$4 {
  export { index$4_SELECT_COLUMN_KEY as SELECT_COLUMN_KEY, index$4_SelectColumn as SelectColumn };
}

declare const textEditorClassname: string;
declare function TextEditor<TRow, TSummaryRow>({ row, column, onRowChange, onClose, }: EditorProps<TRow, TSummaryRow>): JSX.Element;

declare function DropdownEditor({ row, onRowChange }: EditorProps<any>): JSX.Element;

declare const index$3_textEditorClassname: typeof textEditorClassname;
declare const index$3_TextEditor: typeof TextEditor;
declare const index$3_DropdownEditor: typeof DropdownEditor;
declare namespace index$3 {
  export { index$3_textEditorClassname as textEditorClassname, index$3_TextEditor as TextEditor, index$3_DropdownEditor as DropdownEditor };
}

interface Props {
    /** image url, used as background-image */
    value: string;
}
declare const ImageFormatter: ({ value }: Props) => JSX.Element;

interface CellExpanderFormatterProps {
    isCellSelected: boolean;
    expanded: boolean;
    onCellExpand: () => void;
}
declare const CellExpanderFormatter: ({ isCellSelected, expanded, onCellExpand, }: CellExpanderFormatterProps) => JSX.Element;

declare const ChildRowFormatter: () => JSX.Element;
interface ChildRowDeleteButtonProps {
    isCellSelected: boolean;
    isDeleteSubRowEnabled: boolean;
    onDeleteSubRow: () => void;
}
declare const ChildRowDeleteFormatter: ({ isCellSelected, onDeleteSubRow, isDeleteSubRowEnabled, }: ChildRowDeleteButtonProps) => JSX.Element;

declare const CheckboxFormatter: ({ onChange, ...props }: CheckboxFormatterProps, ref: React.RefObject<HTMLInputElement>) => JSX.Element;

declare type SharedInputProps = Pick<CheckboxFormatterProps, "disabled" | "aria-label" | "aria-labelledby">;
interface SelectCellFormatterProps extends SharedInputProps {
    isCellSelected: boolean;
    value: boolean;
    indeterminate?: boolean;
    onChange: (value: boolean, isShiftClick: boolean) => void;
}
declare const SelectCellFormatter: ({ value, indeterminate, isCellSelected, disabled, onChange, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, }: SelectCellFormatterProps) => JSX.Element;

declare const DefaultFormatter: <R, SR>(props: FormatterProps<R, SR>) => JSX.Element | null;

declare const ToggleGroupFormatter: <R, SR>(props: GroupFormatterProps<R, SR>) => JSX.Element;

declare const index$2_ImageFormatter: typeof ImageFormatter;
declare const index$2_CellExpanderFormatter: typeof CellExpanderFormatter;
declare const index$2_ChildRowFormatter: typeof ChildRowFormatter;
declare const index$2_ChildRowDeleteFormatter: typeof ChildRowDeleteFormatter;
declare const index$2_CheckboxFormatter: typeof CheckboxFormatter;
declare const index$2_SelectCellFormatter: typeof SelectCellFormatter;
declare const index$2_DefaultFormatter: typeof DefaultFormatter;
declare const index$2_ToggleGroupFormatter: typeof ToggleGroupFormatter;
declare namespace index$2 {
  export { index$2_ImageFormatter as ImageFormatter, index$2_CellExpanderFormatter as CellExpanderFormatter, index$2_ChildRowFormatter as ChildRowFormatter, index$2_ChildRowDeleteFormatter as ChildRowDeleteFormatter, index$2_CheckboxFormatter as CheckboxFormatter, index$2_SelectCellFormatter as SelectCellFormatter, index$2_DefaultFormatter as DefaultFormatter, index$2_ToggleGroupFormatter as ToggleGroupFormatter };
}

interface DraggableHeaderRendererProps<R, SR> extends HeaderRendererProps<R, SR> {
    onColumnsReorder: (sourceKey: string, targetKey: string) => void;
}
declare const DraggableHeaderRenderer: <R, SR>({ onColumnsReorder, column, ...props }: DraggableHeaderRendererProps<R, SR>) => JSX.Element;

declare const DefaultHeaderRenderer: <R, SR>({ column, sortDirection, priority, onSort, isCellSelected, }: HeaderRendererProps<R, SR>) => JSX.Element;

declare const index$1_DraggableHeaderRenderer: typeof DraggableHeaderRenderer;
declare const index$1_DefaultHeaderRenderer: typeof DefaultHeaderRenderer;
declare namespace index$1 {
  export { index$1_DraggableHeaderRenderer as DraggableHeaderRenderer, index$1_DefaultHeaderRenderer as DefaultHeaderRenderer };
}

interface DraggableRowRenderProps<R, SR> extends RowRendererProps<R, SR> {
    onRowReorder: (sourceIndex: number, targetIndex: number) => void;
}
declare const DraggableRowRenderer: <R, SR>({ rowIdx, isRowSelected, className, onRowReorder, ...props }: DraggableRowRenderProps<R, SR>) => JSX.Element;

declare const CustomGroupRow: <R, SR>(_props: react__default.PropsWithChildren<GroupRowRendererProps<R, SR>>) => JSX.Element;
declare const CustomGroupRowRenderer: <R, SR>(key: react__default.Key, props: GroupRowRendererProps<R, SR>) => JSX.Element;

declare const index_DraggableRowRenderer: typeof DraggableRowRenderer;
declare const index_CustomGroupRow: typeof CustomGroupRow;
declare const index_CustomGroupRowRenderer: typeof CustomGroupRowRenderer;
declare namespace index {
  export { index_DraggableRowRenderer as DraggableRowRenderer, index_CustomGroupRow as CustomGroupRow, index_CustomGroupRowRenderer as CustomGroupRowRenderer };
}

declare type DefaultColumnOptions<R, SR> = Pick<Column<R, SR>, "formatter" | "width" | "minWidth" | "maxWidth" | "resizable" | "sortable">;
interface DataGridHandle {
    element: HTMLDivElement | null;
    scrollToColumn: (colIdx: number) => void;
    scrollToRow: (rowIdx: number) => void;
    selectCell: (position: Position, enableEditor?: Maybe<boolean>) => void;
}
declare type SharedDivProps = Pick<React.HTMLAttributes<HTMLDivElement>, "aria-label" | "aria-labelledby" | "aria-describedby" | "className" | "style">;
interface DataGridProps<R, SR = unknown, K extends Key = Key> extends SharedDivProps {
    autoSize?: "auto-fill" | "auto-fit";
    /**
     * Grid and data Props
     */
    /** An array of objects representing each column on the grid */
    columns: readonly Column<R, SR>[];
    /** A function called for each rendered row that should return a plain key/value pair object */
    rows: readonly R[];
    /**
     * Rows to be pinned at the top of the rows view for summary, the vertical scroll bar will not scroll these rows.
     */
    topSummaryRows?: Maybe<readonly SR[]>;
    /**
     * Rows to be pinned at the bottom of the rows view for summary, the vertical scroll bar will not scroll these rows.
     */
    bottomSummaryRows?: Maybe<readonly SR[]>;
    /** The getter should return a unique key for each row */
    rowKeyGetter?: Maybe<(row: R) => K>;
    onRowsChange?: Maybe<(rows: R[], data: RowsChangeData<R, SR>) => void>;
    onViewRowsChange?: Maybe<(rows: ReadonlyArray<R | GroupRow<R>>) => void>;
    /**
     * Dimensions props
     */
    /**
     * The height of each row in pixels
     * @default 35
     */
    rowHeight?: Maybe<number | ((args: RowHeightArgs<R>) => number)>;
    /**
     * The height of the header row in pixels
     * @default 35
     */
    headerRowHeight?: Maybe<number>;
    /**
     * The height of each summary row in pixels
     * @default 35
     */
    summaryRowHeight?: Maybe<number>;
    /**
     * Feature props
     */
    /** Set of selected row keys */
    selectedRows?: K[];
    /** Function called whenever row selection is changed */
    onSelectedRowsChange?: Maybe<(selectedRows: K[], group?: boolean) => void>;
    /** Used for multi column sorting */
    sortColumns?: Maybe<readonly SortColumn[]>;
    onSortColumnsChange?: Maybe<(sortColumns: SortColumn[]) => void>;
    defaultColumnOptions?: Maybe<DefaultColumnOptions<R, SR>>;
    groupBy?: Maybe<readonly string[]>;
    rowGrouper?: Maybe<(rows: readonly R[], columnKey: string) => Record<string, readonly R[]>>;
    expandedGroupIds?: Maybe<ReadonlySet<unknown>>;
    onExpandedGroupIdsChange?: Maybe<(expandedGroupIds: Set<unknown>) => void>;
    onFill?: Maybe<(event: FillEvent<R>) => R>;
    onCopy?: Maybe<(event: CopyEvent<R>) => void>;
    onPaste?: Maybe<(event: PasteEvent<R>) => R>;
    /**
     * Event props
     */
    /** Function called whenever a row is clicked */
    onRowClick?: Maybe<(row: R, column: CalculatedColumn<R, SR>, e?: any) => void>;
    /** Function called whenever a row is double clicked */
    onRowDoubleClick?: Maybe<(row: R, column: CalculatedColumn<R, SR>, e?: any) => void>;
    /** Called when the grid is scrolled */
    onScroll?: Maybe<(event: React.UIEvent<HTMLDivElement>) => void>;
    /** Called when a column is resized */
    onColumnResize?: Maybe<(idx: number, width: number) => void>;
    /**
     * Toggles and modes
     */
    /** @default 'NONE' */
    cellNavigationMode?: Maybe<CellNavigationMode>;
    /** @default true */
    enableVirtualization?: Maybe<boolean>;
    /**
     * Miscellaneous
     */
    renderers?: Maybe<Renderers<R, SR>>;
    rowClass?: Maybe<(row: R) => Maybe<string>>;
    /** @default 'ltr' */
    direction?: Maybe<Direction>;
    "data-testid"?: Maybe<string>;
}
declare const _default$1: <R, SR = unknown, K extends Key = Key>(props: DataGridProps<R, SR, K> & RefAttributes<DataGridHandle>) => JSX.Element;

declare const DataGridDefaultComponentsProvider: react.Provider<Maybe<Renderers<any, any>>>;

declare function sortIcon({ sortDirection }: SortIconProps): JSX.Element | null;
declare function sortPriority({ priority }: SortPriorityProps): number | undefined;

declare function useFocusRef<T extends HTMLOrSVGElement>(isSelected: boolean): {
    ref: react.RefObject<T>;
    tabIndex: number;
};

declare function useRowSelection<R>(): [
    boolean,
    (selectRowEvent: SelectRowEvent<R>) => void
];

declare const CancelConfirmDialog: {
    ({ open, onClose, confirmDialogCondition, children, }: {
        children: ReactNode;
        open: boolean;
        onClose: () => void;
        confirmDialogCondition: boolean;
    }): JSX.Element;
    Title: {
        ({ children }: {
            children: ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Description: {
        ({ children }: {
            children: ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Body: {
        ({ children }: {
            children: ReactNode;
        }): JSX.Element;
        displayName: string;
    };
    Buttons: {
        ({ children }: {
            children: ReactNode;
        }): JSX.Element;
        displayName: string;
    };
};

interface IPopperTriggerContext {
    anchorEl: null | HTMLElement;
    setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}
declare const PopperTriggerContext: react.Context<IPopperTriggerContext | null>;
interface PopperTriggerProps {
    children: ReactNode;
}
declare const PopperTrigger: {
    ({ children }: PopperTriggerProps): JSX.Element;
    Trigger: ({ children, onOpen, onClose }: TriggerProps) => JSX.Element;
};
interface TriggerProps {
    children: ReactNode;
    onOpen?: () => void;
    onClose?: () => void;
}
declare const usePopTriggerContext: () => IPopperTriggerContext | null;

interface IStepperContext {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    stepCount: number;
    setStepCount: Dispatch<SetStateAction<number>>;
    back: boolean;
    setBack: Dispatch<SetStateAction<boolean>>;
}
declare const StepperContext: react__default.Context<IStepperContext | null>;
interface StepperProps {
    stepChanged?: (step: number) => void;
    stepCnt?: number;
    children: ReactNode;
}
declare const Stepper: {
    ({ stepChanged, stepCnt, children }: StepperProps): JSX.Element;
    Step: {
        ({ children }: StepProps): JSX.Element;
        Title: ({ step, title, optionalInfo }: StepTitleProps) => JSX.Element;
        Content: ({ children, contentWidth, enableNext, buttonDisable, }: PropsWithChildren<StepContentProps>) => JSX.Element;
        Buttons: ({ enableNext }: StepButtonProps) => JSX.Element;
    };
};
interface StepProps {
    children: ReactNode;
}
interface StepTitleProps {
    step: number;
    title: ReactNode;
    optionalInfo?: ReactNode;
}
interface StepButtonProps {
    enableNext: boolean;
}
interface StepContentProps {
    contentWidth?: string;
    enableNext: boolean;
    buttonDisable?: boolean;
}
declare const useStepperContext: () => IStepperContext | null;

declare const _default: {};

export { Breadcrumbs, Button, type CalculatedColumn, CancelConfirmDialog, Card, type CellNavigationMode, type CellRendererProps, Checkbox, type CheckboxFormatterProps, Chip, type ColSpanArgs, type Column, index$4 as Columns, type CopyEvent, _default$1 as DataGrid, DataGridDefaultComponentsProvider, type DataGridHandle, type DataGridProps, Dialog, type EditorProps, index$3 as Editors, type FillEvent, FormControl, type FormatterProps, index$2 as Formatters, type GroupFormatterProps, type HeaderRendererProps, index$1 as HeaderRenderers, type PasteEvent, PopperTrigger, PopperTriggerContext, type Renderers, type RowHeightArgs, type RowRendererProps, index as RowRenderers, type RowsChangeData, type SelectRowEvent, SnackbarProvider, type SortColumn, type SortDirection, type SortIconProps, type SortPriorityProps, type SortStatusProps, Spinner, type SpinnerProps, Stepper, StepperContext, type SummaryFormatterProps, Switch, type SwitchProps, Toast, Tooltip, Typography, darkTheme, _default as default, lightTheme, sortIcon, sortPriority, useFocusRef, usePopTriggerContext, useRowSelection, useSnackbar, useStepperContext };
