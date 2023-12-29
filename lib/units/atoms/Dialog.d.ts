import React from 'react';
import { DialogProps as _DialogProps } from '@mui/material/Dialog';
import { DialogTitleProps as _DialogTitleProps } from '@mui/material/DialogTitle';
import { DialogContentProps as _DialogContentProps } from '@mui/material/DialogContent';
import { DialogActionsProps as _DialogActionsProps } from '@mui/material/DialogActions';
export declare type DialogProps = _DialogProps;
export declare type DialogTitleProps = _DialogTitleProps;
export declare type DialogContentProps = _DialogContentProps;
export declare type DialogActionsProps = _DialogActionsProps;
export declare const StyledDialog: import("@emotion/styled").StyledComponent<_DialogProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
export declare const StyledDialogTitle: import("@emotion/styled").StyledComponent<{
    component?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material/DialogTitle").DialogTitleClasses> | undefined;
    sx?: import("@mui/material/styles").SxProps<import("@mui/material/styles").Theme> | undefined;
} & Omit<import("@mui/system").SystemProps<import("@mui/material/styles").Theme> & {
    align?: "left" | "right" | "inherit" | "center" | "justify" | undefined;
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").TypographyClasses> | undefined;
    gutterBottom?: boolean | undefined;
    noWrap?: boolean | undefined;
    paragraph?: boolean | undefined;
    sx?: import("@mui/material/styles").SxProps<import("@mui/material/styles").Theme> | undefined;
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2" | undefined;
    variantMapping?: Partial<Record<"button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2", string>> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | "css" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "children" | "sx" | "variant" | "align" | "component" | ("p" | "color" | "border" | "boxShadow" | "fontWeight" | "zIndex" | "alignContent" | "alignItems" | "alignSelf" | "bottom" | "boxSizing" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "justifyContent" | "justifyItems" | "justifySelf" | "left" | "letterSpacing" | "lineHeight" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "order" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "top" | "visibility" | "whiteSpace" | "width" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "flex" | "gap" | "gridArea" | "gridColumn" | "gridRow" | "margin" | "overflow" | "padding" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "pt" | "pr" | "pb" | "pl" | "px" | "paddingX" | "py" | "paddingY" | "typography" | "displayPrint") | "gutterBottom" | "noWrap" | "paragraph" | "variantMapping"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
export declare const StyledDialogContent: import("@emotion/styled").StyledComponent<_DialogContentProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
export declare const StyledDialogActions: import("@emotion/styled").StyledComponent<_DialogActionsProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
export declare const Dialog: ({ ...props }: DialogProps) => JSX.Element;
export declare const DialogTitle: ({ ...props }: DialogTitleProps) => JSX.Element;
export declare const DialogContent: React.ForwardRefExoticComponent<Pick<_DialogContentProps, "className" | "style" | "classes" | "slot" | "title" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "sx" | "dividers"> & React.RefAttributes<unknown>>;
export declare const DialogActions: ({ ...props }: DialogActionsProps) => JSX.Element;
