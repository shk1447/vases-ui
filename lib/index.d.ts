/// <reference types="react" />
import * as _emotion_styled from '@emotion/styled';
import * as _mui_system from '@mui/system';
import * as _mui_material from '@mui/material';
import { DrawerProps as DrawerProps$1, GridDirection, SvgIconProps, PaletteMode } from '@mui/material';
import { AlertProps as AlertProps$1 } from '@mui/material/Alert';
import { AppBarProps as AppBarProps$1 } from '@mui/material/AppBar';
import { AutocompleteProps as AutocompleteProps$1 } from '@mui/material/Autocomplete';
import { BadgeProps as BadgeProps$1 } from '@mui/material/Badge';
import { BoxProps as BoxProps$1 } from '@mui/material/Box';
import { BreadcrumbsProps as BreadcrumbsProps$1 } from '@mui/material/Breadcrumbs';
import { ButtonProps as ButtonProps$1 } from '@mui/material/Button';
import React, { DOMAttributes, PropsWithChildren } from 'react';
import { GraphicComponentOption, TooltipComponentOption } from 'echarts/components';
import { ComposeOption, SetOptionOpts, ECharts } from 'echarts/core';
import { BarSeriesOption, PieSeriesOption, LineSeriesOption, GaugeSeriesOption, ScatterSeriesOption } from 'echarts/charts';
import { CheckboxProps as CheckboxProps$1 } from '@mui/material/Checkbox';
import { ChipProps as ChipProps$1 } from '@mui/material/Chip';
import { CollapseProps as CollapseProps$1 } from '@mui/material/Collapse';
import { ColorPickerProps as ColorPickerProps$1 } from 'material-ui-color';
import * as _mui_x_data_grid_models_api_gridApiCommunity from '@mui/x-data-grid/models/api/gridApiCommunity';
import { GridValidRowModel, GridColDef, GridActionsColDef, GridRowParams as GridRowParams$1, DataGridProps as DataGridProps$1 } from '@mui/x-data-grid';
import { GridCellParams as GridCellParams$1, GridRenderCellParams } from '@mui/x-data-grid/models/params/gridCellParams';
import { GridCallbackDetails as GridCallbackDetails$1 } from '@mui/x-data-grid/models/api/gridCallbackDetails';
import { GridCellEditCommitParams as GridCellEditCommitParams$1 } from '@mui/x-data-grid/models/params/gridEditCellParams';
import { GridSelectionModel as GridSelectionModel$1 } from '@mui/x-data-grid/models/gridSelectionModel';
import { GridSortModel } from '@mui/x-data-grid/models/gridSortModel';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import * as _mui_material_DialogTitle from '@mui/material/DialogTitle';
import { DialogTitleProps as DialogTitleProps$1 } from '@mui/material/DialogTitle';
import * as _mui_material_styles from '@mui/material/styles';
import { ThemeOptions as ThemeOptions$1, Theme as Theme$1, ThemeProvider as ThemeProvider$1 } from '@mui/material/styles';
import { DialogProps as DialogProps$1 } from '@mui/material/Dialog';
import { DialogContentProps as DialogContentProps$1 } from '@mui/material/DialogContent';
import { DialogActionsProps as DialogActionsProps$1 } from '@mui/material/DialogActions';
import { FormControlLabelProps as FormControlLabelProps$1 } from '@mui/material/FormControlLabel';
import { IconButtonProps as IconButtonProps$1 } from '@mui/material/IconButton';
import { InputAdornmentProps as InputAdornmentProps$1 } from '@mui/material/InputAdornment';
import { DividerData as DividerData$1, TabGroup as TabGroup$1, LayoutData as LayoutData$1, LayoutProps } from 'rc-dock';
import { LinkProps as LinkProps$1 } from '@mui/material/Link';
import { ListItemButtonProps as ListItemButtonProps$1 } from '@mui/material/ListItemButton';
import { ListItemIconProps as ListItemIconProps$1 } from '@mui/material/ListItemIcon';
import { ListItemTextProps as ListItemTextProps$1 } from '@mui/material/ListItemText';
import { ListProps as ListProps$1 } from '@mui/material/List';
import { ListSubheaderProps as ListSubheaderProps$1 } from '@mui/material/ListSubheader';
import { LoadingButtonProps as LoadingButtonProps$1 } from '@mui/lab/LoadingButton';
import { MenuProps as MenuProps$1 } from '@mui/material/Menu';
import { MenuItemProps as MenuItemProps$1 } from '@mui/material/MenuItem';
import { LinearProgressProps as LinearProgressProps$1 } from '@mui/material/LinearProgress';
import { RadioProps as RadioProps$1 } from '@mui/material/Radio';
import { RadioGroupProps as RadioGroupProps$1 } from '@mui/material/RadioGroup';
import { SelectProps as SelectProps$1 } from '@mui/material/Select';
import { SketchPickerProps } from 'react-color';
import { SliderProps as SliderProps$1 } from '@mui/material/Slider';
import { SwipeableDrawerProps as SwipeableDrawerProps$1 } from '@mui/material/SwipeableDrawer';
import { SwitchProps as SwitchProps$1 } from '@mui/material/Switch';
import { TabProps as TabProps$1 } from '@mui/material/Tab';
import { TabsProps as TabsProps$1 } from '@mui/material/Tabs';
import { TextFieldProps as TextFieldProps$1 } from '@mui/material/TextField';
import { ToggleButtonProps as ToggleButtonProps$1 } from '@mui/material/ToggleButton';
import { ToggleButtonGroupProps as ToggleButtonGroupProps$1 } from '@mui/material/ToggleButtonGroup';
import { ToolbarProps as ToolbarProps$1 } from '@mui/material/Toolbar';
import { TreeViewProps as TreeViewProps$1, TreeItemProps as TreeItemProps$1, TreeItemContentProps as TreeItemContentProps$1 } from '@mui/lab';
import { TypographyProps as TypographyProps$1 } from '@mui/material/Typography';
import { PolygonProps as PolygonProps$1 } from '@visx/shape/lib/shapes/Polygon';
import { TextProps } from '@visx/text/lib/Text';

interface AlertProps extends AlertProps$1 {
}
declare const CustomAlert: _emotion_styled.StyledComponent<AlertProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare function Alert({ ...props }: AlertProps): JSX.Element;

interface AppBarProps extends AppBarProps$1 {
}
declare const AppBar: ({ ...props }: AppBarProps) => JSX.Element;

interface AutocompleteProps extends AutocompleteProps$1<any, any, any, any> {
    label?: string;
}
declare const Autocomplete: (props: AutocompleteProps) => JSX.Element;

interface BadgeProps extends BadgeProps$1 {
}
declare const Badge: (props: BadgeProps) => JSX.Element;

interface BoxProps extends BoxProps$1 {
}
declare const Box: (props: BoxProps) => JSX.Element;

interface BreadcrumbsProps extends BreadcrumbsProps$1 {
}
declare const Breadcrumbs: (props: BreadcrumbsProps) => JSX.Element;

interface ButtonProps extends ButtonProps$1 {
}
declare const Button: ({ ...props }: ButtonProps) => JSX.Element;

interface CardGridProps {
    cards: React.ReactNode[] | Element[];
    gap?: number;
    cardSize?: {
        width: string;
        height: string;
    };
    className?: string;
}
declare const CardGrid: (props: CardGridProps) => JSX.Element;

declare type SlideOption = {
    index: number;
};
declare type ScrollOption = {
    frame?: number;
    loading?: boolean;
};
declare type OptionMap = {
    slide: SlideOption;
    scroll: ScrollOption;
};
interface CarouselProps<K extends keyof OptionMap> {
    type: K;
    option: OptionMap[K];
    items: string[];
    className?: string;
    useLoading?: boolean;
    onRenderItem?: (path: string, idx: number, isScrolling: boolean | undefined) => any;
}
declare const Carousel: <K extends keyof OptionMap>(props: CarouselProps<K>) => JSX.Element;

declare type BaseSeriesOption = ComposeOption<BarSeriesOption | PieSeriesOption | LineSeriesOption | GaugeSeriesOption | ScatterSeriesOption | GraphicComponentOption | TooltipComponentOption>;
interface BaseChartProps {
    theme?: 'light' | 'dark';
    option?: any;
    loading?: boolean;
    settings?: SetOptionOpts;
    className?: string;
    onLoaded?: () => void;
}
declare type ChartHandle = {
    echarts: () => ECharts | undefined;
    dataZoom?: () => void;
    export?: (fileName: string) => void;
};
declare const BaseChart: React.ForwardRefExoticComponent<BaseChartProps & React.RefAttributes<ChartHandle>>;

interface GaugeChartProps {
    theme?: 'light' | 'dark';
    loading?: boolean;
    title?: string;
    value?: number;
    className?: string;
}
declare const GaugeChart: ({ theme, loading, title, value, className, }: GaugeChartProps) => JSX.Element;

interface SeriesProps {
    name: string | undefined;
    data: number[];
}
interface LineChartProps {
    theme?: 'light' | 'dark';
    loading?: boolean;
    title?: string;
    series: SeriesProps[];
    xAxis?: {
        type?: string;
        data?: string[];
    };
    yAxis?: {
        min?: number;
        max?: number;
    };
    underArea?: boolean;
    className?: string;
    valueFormatter?: any;
}
declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<ChartHandle>>;

interface CheckboxProps extends CheckboxProps$1 {
    label?: string;
    labelPlacement?: 'top' | 'start' | 'bottom' | 'end';
}
declare const Checkbox: (props: CheckboxProps) => JSX.Element;

interface ChipProps extends ChipProps$1 {
}
declare const Chip: ({ ...props }: ChipProps) => JSX.Element;

interface CollapseProps extends CollapseProps$1 {
}
declare const Collapse: ({ ...props }: CollapseProps) => JSX.Element;

interface ColorPickerProps extends ColorPickerProps$1 {
}
declare const ColorPicker: (props: ColorPickerProps) => JSX.Element;

declare type GridRowModel<R extends GridValidRowModel = any> = R;
interface GridSelectionModel extends GridSelectionModel$1 {
}
interface GridCallbackDetails extends GridCallbackDetails$1 {
}
interface GridSortItem extends GridSortModel {
}
interface GridCellParams<V = any, R extends GridValidRowModel = any, F = V> extends GridCellParams$1 {
}
declare type ExtendGridEnrichedColDef<R extends GridValidRowModel = any, V = any, F = V> = (GridColDef<R, V, F> | GridActionsColDef<R, V, F>) & {
    tooltip?: boolean;
    renderTooltip?: (params: GridRenderCellParams<V, R, F>) => React.ReactNode;
};
declare type GridColumns = ExtendGridEnrichedColDef[];
interface GridRowParams extends GridRowParams$1 {
}
interface GridCellEditCommitParams extends GridCellEditCommitParams$1 {
}
interface DataGridProps extends DataGridProps$1 {
    selectedRow?: any;
    onRowSelected?: (row: GridRowParams | undefined) => void;
    tooltip?: boolean;
    columns: GridColumns;
}
interface _GridRenderCellParams extends GridRenderCellParams {
}
declare const useGridApiContext: () => React.MutableRefObject<_mui_x_data_grid_models_api_gridApiCommunity.GridApiCommunity>;
interface StyledDataGridProps extends DataGridProps {
    selected?: number;
}
declare const StyledDataGrid: _emotion_styled.StyledComponent<StyledDataGridProps & React.RefAttributes<unknown> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
interface EditInputCellProps {
    params: _GridRenderCellParams;
}
interface CheckEditInputCellProps extends EditInputCellProps {
}
declare const CheckEditInputCell: (props: CheckEditInputCellProps) => JSX.Element;
interface SelectEditInputCellProps extends EditInputCellProps {
    list: any[];
}
declare const SelectEditInputCell: (props: SelectEditInputCellProps) => JSX.Element;
declare type DataGridHandle = {
    scrollTo: () => void;
};
declare const DataGrid: React.ForwardRefExoticComponent<DataGridProps & React.RefAttributes<DataGridHandle>>;

interface DatePickerProps {
    className?: string;
    type: 'date' | 'datetime-local';
    criteria: 'startTime' | 'endTime';
    label: string;
    step?: number;
    value?: number;
    onBlur?: () => void;
    onChange?: (date: number | undefined, criteria: 'startTime' | 'endTime') => void;
}
declare const DatePicker: (props: DatePickerProps) => JSX.Element;

declare type DialogProps = DialogProps$1;
declare type DialogTitleProps = DialogTitleProps$1;
declare type DialogContentProps = DialogContentProps$1;
declare type DialogActionsProps = DialogActionsProps$1;
declare const StyledDialog: _emotion_styled.StyledComponent<DialogProps$1 & _mui_system.MUIStyledCommonProps<_mui_material_styles.Theme>, {}, {}>;
declare const StyledDialogTitle: _emotion_styled.StyledComponent<{
    component?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
    classes?: Partial<_mui_material_DialogTitle.DialogTitleClasses> | undefined;
    sx?: _mui_material_styles.SxProps<_mui_material_styles.Theme> | undefined;
} & Omit<_mui_system.SystemProps<_mui_material_styles.Theme> & {
    align?: "right" | "left" | "inherit" | "center" | "justify" | undefined;
    children?: React.ReactNode;
    classes?: Partial<_mui_material.TypographyClasses> | undefined;
    gutterBottom?: boolean | undefined;
    noWrap?: boolean | undefined;
    paragraph?: boolean | undefined;
    sx?: _mui_material_styles.SxProps<_mui_material_styles.Theme> | undefined;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined;
    variantMapping?: Partial<Record<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit", string>> | undefined;
}, "classes"> & _mui_material_OverridableComponent.CommonProps & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | "css" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
}, keyof _mui_material_OverridableComponent.CommonProps | ("border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderColor" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "top" | "right" | "bottom" | "left" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "typography" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "align" | "children" | "gutterBottom" | "noWrap" | "paragraph" | "sx" | "variant" | "variantMapping" | "component"> & _mui_system.MUIStyledCommonProps<_mui_material_styles.Theme>, {}, {}>;
declare const StyledDialogContent: _emotion_styled.StyledComponent<DialogContentProps$1 & _mui_system.MUIStyledCommonProps<_mui_material_styles.Theme>, {}, {}>;
declare const StyledDialogActions: _emotion_styled.StyledComponent<DialogActionsProps$1 & _mui_system.MUIStyledCommonProps<_mui_material_styles.Theme>, {}, {}>;
declare const Dialog: ({ ...props }: DialogProps) => JSX.Element;
declare const DialogTitle: ({ ...props }: DialogTitleProps) => JSX.Element;
declare const DialogContent: React.ForwardRefExoticComponent<Pick<DialogContentProps$1, "className" | "style" | "classes" | "color" | "translate" | "children" | "sx" | "slot" | "title" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "dividers"> & React.RefAttributes<unknown>>;
declare const DialogActions: ({ ...props }: DialogActionsProps) => JSX.Element;

interface DrawerProps extends DrawerProps$1 {
}
declare const Drawer: (props: DrawerProps) => JSX.Element;

interface FormControlLabelProps extends FormControlLabelProps$1 {
}
declare const FormControlLabel: ({ ...props }: FormControlLabelProps) => JSX.Element;

interface IconButtonProps extends IconButtonProps$1 {
    rectagle?: boolean;
}
declare const IconButton: React.ForwardRefExoticComponent<Pick<IconButtonProps, "className" | "style" | "classes" | "form" | "slot" | "title" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge" | "size" | "key" | "css" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value" | "rectagle"> & React.RefAttributes<HTMLButtonElement>>;

interface InputAdornmentProps extends InputAdornmentProps$1 {
}
declare const InputAdornment: ({ ...props }: InputAdornmentProps) => JSX.Element;

interface CenterLayoutProps {
    direction?: GridDirection;
    children?: React.ReactNode;
    className?: string;
}
declare const CenterLayout: ({ direction, children, className, }: CenterLayoutProps) => JSX.Element;

interface DividerData extends DividerData$1 {
}
interface TabGroup extends TabGroup$1 {
}
interface LayoutData extends LayoutData$1 {
}
interface DockLayoutProps extends LayoutProps {
}
declare const DockLayout: (props: DockLayoutProps) => JSX.Element;
interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    mode?: 'horizontal' | 'vertical';
}
declare const DividerBox: (props: DividerProps) => JSX.Element;

declare type MouseEvents = Pick<DOMAttributes<HTMLDivElement>, "onMouseOver" | "onMouseLeave" | "onMouseDown" | "onMouseUp">;
interface FlexLayoutProps extends MouseEvents {
    direction: "row" | "column";
    gap: number;
    children?: React.ReactNode;
    className?: string;
}
declare const FlexLayout: ({ ...props }: FlexLayoutProps) => JSX.Element;
interface SpacerProps {
    className?: string;
}
declare const Spacer: (props: SpacerProps) => JSX.Element;

interface GridComponent {
    gridColumn: string;
    gridRow: string;
    component: React.ReactNode;
}
interface IGridContainer {
    column: number;
    row: number;
    className?: string;
}
interface IGridLayout {
    gridContainer: IGridContainer;
    gridItems: GridComponent[];
    className?: string;
}
declare const GridLayout: ({ gridContainer, gridItems, className, }: IGridLayout) => JSX.Element;

declare type LinkProps = LinkProps$1 & any;
declare const Link: (props: LinkProps) => JSX.Element;

interface ListItemButtonProps extends ListItemButtonProps$1 {
}
interface ListItemIconProps extends ListItemIconProps$1 {
}
interface ListItemTextProps extends ListItemTextProps$1 {
}

interface ListProps extends ListProps$1 {
    component?: string;
    className?: string;
}
interface ListSubheaderProps extends ListSubheaderProps$1 {
    component?: string;
    className?: string;
}

declare const List: ({ ...props }: ListProps) => JSX.Element;
declare const ListSubheader: ({ ...props }: ListSubheaderProps) => JSX.Element;
declare const ListItemButton: ({ ...props }: ListItemButtonProps) => JSX.Element;
declare const ListItemIcon: ({ ...props }: ListItemIconProps) => JSX.Element;
declare const ListItemText: ({ ...props }: ListItemTextProps) => JSX.Element;

interface LoadingButtonProps extends LoadingButtonProps$1 {
}
declare const LoadingButton: ({ ...props }: LoadingButtonProps) => JSX.Element;

interface MenuProps extends MenuProps$1 {
}
interface MenuItemProps extends MenuItemProps$1 {
}
declare const Menu: (props: MenuProps) => JSX.Element;
declare const MenuItem: (props: MenuItemProps) => JSX.Element;

interface LinearProgressProps extends LinearProgressProps$1 {
}
declare const LinearProgress: ({ ...props }: LinearProgressProps) => JSX.Element;
declare const CustomLinearProgress: _emotion_styled.StyledComponent<LinearProgressProps & _mui_system.MUIStyledCommonProps<_mui_material_styles.Theme>, {}, {}>;

interface RadioProps extends RadioProps$1 {
    value: string | number | boolean;
    label: string;
}
interface RadioGroupProps extends RadioGroupProps$1 {
    label?: string;
    items: RadioProps[];
}
declare const RadioGroup: (props: RadioGroupProps) => JSX.Element;

interface SelectProps extends SelectProps$1 {
}
interface SelectItemProps extends MenuItemProps$1 {
}
declare const Select: (props: SelectProps) => JSX.Element;
declare const Option: (props: SelectItemProps) => JSX.Element;

interface ColorPickerParams extends SketchPickerProps {
    defaultValue?: string;
}
declare const SketchPicker: ({ ...props }: SketchPickerProps) => JSX.Element;

interface SliderProps extends SliderProps$1 {
    ratio?: number;
}
declare const Slider: (props: SliderProps) => JSX.Element;

interface SwipeableDrawerProps extends SwipeableDrawerProps$1 {
}
declare const SwipeableDrawer: (props: SwipeableDrawerProps) => JSX.Element;

interface SwitchProps extends SwitchProps$1 {
}
declare const Switch: ({ ...props }: SwitchProps) => JSX.Element;

interface TableProps {
    stickyHeader?: boolean;
    children?: React.ReactNode;
    className?: string;
}
declare const StyledTable: _emotion_styled.StyledComponent<TableProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const Table: (props: TableProps) => JSX.Element;

interface TableBodyProps {
    children?: React.ReactNode;
    className?: string;
}
declare const StyledTableBody: _emotion_styled.StyledComponent<TableBodyProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const TableBody: ({ children, className }: TableBodyProps) => JSX.Element;

interface TableCellProps {
    children?: React.ReactNode;
    className?: string;
    colSpan?: number;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}
declare const StyledTableCell: _emotion_styled.StyledComponent<TableCellProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const TableCell: ({ align, children, className, colSpan, }: TableCellProps) => JSX.Element;

interface TableContainerProps {
    children?: React.ReactNode;
    className?: string;
}
declare const StyledTableContainer: _emotion_styled.StyledComponent<TableContainerProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const TableContainer: ({ children, className, }: TableContainerProps) => JSX.Element;

interface TableHeadProps {
    children?: React.ReactNode;
    className?: string;
}
declare const StyledTableHead: _emotion_styled.StyledComponent<TableHeadProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const TableHead: ({ children, className }: TableHeadProps) => JSX.Element;

interface TableRowProps {
    children?: React.ReactNode;
    className?: string;
    selected?: boolean;
    onClick?: (e: any) => any;
    onDoubleClick?: (e: any) => any;
}
declare const StyledTableRow: _emotion_styled.StyledComponent<TableRowProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const TableRow: ({ selected, onClick, onDoubleClick, children, className, }: TableRowProps) => JSX.Element;

interface TabProps extends TabProps$1 {
}
interface TabsProps extends TabsProps$1 {
    height?: number;
}
declare const Tab: ({ ...props }: TabProps) => JSX.Element;
declare const Tabs: ({ ...props }: TabsProps) => JSX.Element;

declare type TextFieldProps = TextFieldProps$1;
declare const TextField: ({ ...props }: TextFieldProps) => JSX.Element;

interface ToggleButtonProps extends ToggleButtonProps$1 {
}
interface ToggleButtonGroupProps extends ToggleButtonGroupProps$1 {
}
declare const ToggleButton: ({ ...props }: ToggleButtonProps) => JSX.Element;
declare const ToggleButtonGroup: ({ ...props }: ToggleButtonGroupProps) => JSX.Element;

interface ToolbarProps extends ToolbarProps$1 {
}
declare const Toolbar: ({ ...props }: ToolbarProps) => JSX.Element;

declare type TreeViewProps = TreeViewProps$1 & {};
interface TreeItemProps extends TreeItemProps$1 {
}
interface TreeItemContentProps extends TreeItemContentProps$1 {
}
declare module 'react' {
    interface CSSProperties {
        '--tree-view-color'?: string;
        '--tree-view-bg-color'?: string;
    }
}
declare type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon?: React.ElementType<SvgIconProps>;
    labelInfo?: React.ReactNode;
    labelText?: string;
    depth?: number;
};
declare const TreeItem: (props: StyledTreeItemProps) => JSX.Element;
declare const TreeView: (props: TreeViewProps) => JSX.Element;

interface TypographyProps extends TypographyProps$1 {
}
declare const Typography: ({ ...props }: TypographyProps) => JSX.Element;

interface CircleProps {
    /** 반지름 길이 */
    r: number;
    /** 중심 x 좌표 */
    cx?: number;
    /** 중심 y 좌표 */
    cy?: number;
    /** 둘레 색상 */
    stroke?: string;
    /** 둘레 굵기 */
    strokeWidth?: number;
    /** 색상 */
    fill?: string;
    /** 색상 투명도 */
    fillOpacity?: number;
}
declare const StyledCircle: _emotion_styled.StyledComponent<CircleProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const Circle: (props: CircleProps) => JSX.Element;

interface GroupProps {
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
declare const StyledGroup: _emotion_styled.StyledComponent<GroupProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const Group: React.ForwardRefExoticComponent<GroupProps & React.RefAttributes<unknown>>;

interface PolygonProps extends PolygonProps$1 {
    fill?: string;
    fillOpacity?: number;
    stroke?: string;
    strokeWidth?: number;
}
declare const StyledPolygon: _emotion_styled.StyledComponent<PolygonProps & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const Polygon: (props: PolygonProps) => JSX.Element;

interface RectangleProps {
    /** 너비 */
    width: number;
    /** 높이 */
    height: number;
    /** 시작 점 x 좌표 */
    x: number;
    /** 시작 점 y 좌표 */
    y: number;
    /** 꼭지점 x축 둥글기 */
    rx?: number;
    /** 꼭지점 y축 둥글기 */
    ry?: number;
    /** 둘레 색상 */
    stroke?: string;
    /** 둘레 굵기 */
    strokeWidth?: number;
    /** 색상 */
    fill?: string;
    /** 색상 투명도*/
    fillOpacity?: number;
    strokeDasharray?: number;
    animation?: string;
}
declare const Rectangle: (props: RectangleProps) => JSX.Element;

interface SvgProps {
    size?: any;
    width?: number;
    height?: number;
    children?: React.ReactNode;
    className?: string;
}
interface CalculateRatioProps {
    width: number;
    height: number;
}
declare const CalculateRatio: ({ width, height }: CalculateRatioProps) => {
    wRatio: number;
    hRatio: number;
};
declare const CalculateRevertRatio: ({ width, height }: CalculateRatioProps) => {
    wRatio: number;
    hRatio: number;
};
declare const Svg: ({ size, className, children, }: PropsWithChildren<SvgProps>) => JSX.Element;

/**
  verticalAnchor="start" 를 default로 해두어야,
  초기 위치가 svg canvas의 0,0에 위치한다.
*/
declare const StyledText: _emotion_styled.StyledComponent<{
    className?: string | undefined;
    scaleToFit?: boolean | "shrink-only" | undefined;
    angle?: number | undefined;
    textAnchor?: "end" | "start" | "middle" | "inherit" | undefined;
    verticalAnchor?: "end" | "start" | "middle" | undefined;
    style?: React.CSSProperties | undefined;
    innerRef?: React.Ref<SVGSVGElement> | undefined;
    innerTextRef?: React.Ref<SVGTextElement> | undefined;
    x?: string | number | undefined;
    y?: string | number | undefined;
    dx?: string | number | undefined;
    dy?: string | number | undefined;
    lineHeight?: string | number | undefined;
    capHeight?: string | number | undefined;
    fontSize?: string | number | undefined;
    fontFamily?: string | undefined;
    fill?: string | undefined;
    width?: number | undefined;
    children?: string | number | undefined;
} & Omit<React.SVGAttributes<SVGTextElement>, keyof {
    className?: string | undefined;
    scaleToFit?: boolean | "shrink-only" | undefined;
    angle?: number | undefined;
    textAnchor?: "end" | "start" | "middle" | "inherit" | undefined;
    verticalAnchor?: "end" | "start" | "middle" | undefined;
    style?: React.CSSProperties | undefined;
    innerRef?: React.Ref<SVGSVGElement> | undefined;
    innerTextRef?: React.Ref<SVGTextElement> | undefined;
    x?: string | number | undefined;
    y?: string | number | undefined;
    dx?: string | number | undefined;
    dy?: string | number | undefined;
    lineHeight?: string | number | undefined;
    capHeight?: string | number | undefined;
    fontSize?: string | number | undefined;
    fontFamily?: string | undefined;
    fill?: string | undefined;
    width?: number | undefined;
    children?: string | number | undefined;
}> & _mui_system.MUIStyledCommonProps<_mui_material.Theme>, {}, {}>;
declare const Text: (props: TextProps) => JSX.Element;

type index_d$1_AlertProps = AlertProps;
declare const index_d$1_CustomAlert: typeof CustomAlert;
declare const index_d$1_Alert: typeof Alert;
type index_d$1_AppBarProps = AppBarProps;
declare const index_d$1_AppBar: typeof AppBar;
type index_d$1_AutocompleteProps = AutocompleteProps;
declare const index_d$1_Autocomplete: typeof Autocomplete;
type index_d$1_BadgeProps = BadgeProps;
declare const index_d$1_Badge: typeof Badge;
type index_d$1_BoxProps = BoxProps;
declare const index_d$1_Box: typeof Box;
type index_d$1_BreadcrumbsProps = BreadcrumbsProps;
declare const index_d$1_Breadcrumbs: typeof Breadcrumbs;
type index_d$1_ButtonProps = ButtonProps;
declare const index_d$1_Button: typeof Button;
type index_d$1_CardGridProps = CardGridProps;
declare const index_d$1_CardGrid: typeof CardGrid;
type index_d$1_CarouselProps<K extends keyof OptionMap> = CarouselProps<K>;
declare const index_d$1_Carousel: typeof Carousel;
type index_d$1_BaseSeriesOption = BaseSeriesOption;
type index_d$1_BaseChartProps = BaseChartProps;
type index_d$1_ChartHandle = ChartHandle;
declare const index_d$1_BaseChart: typeof BaseChart;
type index_d$1_GaugeChartProps = GaugeChartProps;
declare const index_d$1_GaugeChart: typeof GaugeChart;
type index_d$1_SeriesProps = SeriesProps;
type index_d$1_LineChartProps = LineChartProps;
declare const index_d$1_LineChart: typeof LineChart;
type index_d$1_CheckboxProps = CheckboxProps;
declare const index_d$1_Checkbox: typeof Checkbox;
type index_d$1_ChipProps = ChipProps;
declare const index_d$1_Chip: typeof Chip;
type index_d$1_CollapseProps = CollapseProps;
declare const index_d$1_Collapse: typeof Collapse;
type index_d$1_ColorPickerProps = ColorPickerProps;
declare const index_d$1_ColorPicker: typeof ColorPicker;
type index_d$1_GridRowModel<R extends GridValidRowModel = any> = GridRowModel<R>;
type index_d$1_GridSelectionModel = GridSelectionModel;
type index_d$1_GridCallbackDetails = GridCallbackDetails;
type index_d$1_GridSortItem = GridSortItem;
type index_d$1_GridCellParams<V = any, R extends GridValidRowModel = any, F = V> = GridCellParams<V, R, F>;
type index_d$1_ExtendGridEnrichedColDef<R extends GridValidRowModel = any, V = any, F = V> = ExtendGridEnrichedColDef<R, V, F>;
type index_d$1_GridColumns = GridColumns;
type index_d$1_GridRowParams = GridRowParams;
type index_d$1_GridCellEditCommitParams = GridCellEditCommitParams;
type index_d$1_DataGridProps = DataGridProps;
type index_d$1__GridRenderCellParams = _GridRenderCellParams;
declare const index_d$1_useGridApiContext: typeof useGridApiContext;
type index_d$1_StyledDataGridProps = StyledDataGridProps;
declare const index_d$1_StyledDataGrid: typeof StyledDataGrid;
type index_d$1_EditInputCellProps = EditInputCellProps;
type index_d$1_CheckEditInputCellProps = CheckEditInputCellProps;
declare const index_d$1_CheckEditInputCell: typeof CheckEditInputCell;
type index_d$1_SelectEditInputCellProps = SelectEditInputCellProps;
declare const index_d$1_SelectEditInputCell: typeof SelectEditInputCell;
type index_d$1_DataGridHandle = DataGridHandle;
declare const index_d$1_DataGrid: typeof DataGrid;
type index_d$1_DatePickerProps = DatePickerProps;
declare const index_d$1_DatePicker: typeof DatePicker;
type index_d$1_DialogProps = DialogProps;
type index_d$1_DialogTitleProps = DialogTitleProps;
type index_d$1_DialogContentProps = DialogContentProps;
type index_d$1_DialogActionsProps = DialogActionsProps;
declare const index_d$1_StyledDialog: typeof StyledDialog;
declare const index_d$1_StyledDialogTitle: typeof StyledDialogTitle;
declare const index_d$1_StyledDialogContent: typeof StyledDialogContent;
declare const index_d$1_StyledDialogActions: typeof StyledDialogActions;
declare const index_d$1_Dialog: typeof Dialog;
declare const index_d$1_DialogTitle: typeof DialogTitle;
declare const index_d$1_DialogContent: typeof DialogContent;
declare const index_d$1_DialogActions: typeof DialogActions;
type index_d$1_DrawerProps = DrawerProps;
declare const index_d$1_Drawer: typeof Drawer;
type index_d$1_FormControlLabelProps = FormControlLabelProps;
declare const index_d$1_FormControlLabel: typeof FormControlLabel;
type index_d$1_IconButtonProps = IconButtonProps;
declare const index_d$1_IconButton: typeof IconButton;
type index_d$1_InputAdornmentProps = InputAdornmentProps;
declare const index_d$1_InputAdornment: typeof InputAdornment;
type index_d$1_CenterLayoutProps = CenterLayoutProps;
declare const index_d$1_CenterLayout: typeof CenterLayout;
type index_d$1_DividerData = DividerData;
type index_d$1_TabGroup = TabGroup;
type index_d$1_LayoutData = LayoutData;
type index_d$1_DockLayoutProps = DockLayoutProps;
declare const index_d$1_DockLayout: typeof DockLayout;
type index_d$1_DividerProps = DividerProps;
declare const index_d$1_DividerBox: typeof DividerBox;
type index_d$1_FlexLayoutProps = FlexLayoutProps;
declare const index_d$1_FlexLayout: typeof FlexLayout;
type index_d$1_SpacerProps = SpacerProps;
declare const index_d$1_Spacer: typeof Spacer;
type index_d$1_GridComponent = GridComponent;
type index_d$1_IGridContainer = IGridContainer;
type index_d$1_IGridLayout = IGridLayout;
declare const index_d$1_GridLayout: typeof GridLayout;
type index_d$1_LinkProps = LinkProps;
declare const index_d$1_Link: typeof Link;
declare const index_d$1_List: typeof List;
declare const index_d$1_ListSubheader: typeof ListSubheader;
declare const index_d$1_ListItemButton: typeof ListItemButton;
declare const index_d$1_ListItemIcon: typeof ListItemIcon;
declare const index_d$1_ListItemText: typeof ListItemText;
type index_d$1_LoadingButtonProps = LoadingButtonProps;
declare const index_d$1_LoadingButton: typeof LoadingButton;
type index_d$1_MenuProps = MenuProps;
type index_d$1_MenuItemProps = MenuItemProps;
declare const index_d$1_Menu: typeof Menu;
declare const index_d$1_MenuItem: typeof MenuItem;
type index_d$1_LinearProgressProps = LinearProgressProps;
declare const index_d$1_LinearProgress: typeof LinearProgress;
declare const index_d$1_CustomLinearProgress: typeof CustomLinearProgress;
type index_d$1_RadioProps = RadioProps;
type index_d$1_RadioGroupProps = RadioGroupProps;
declare const index_d$1_RadioGroup: typeof RadioGroup;
type index_d$1_SelectProps = SelectProps;
type index_d$1_SelectItemProps = SelectItemProps;
declare const index_d$1_Select: typeof Select;
declare const index_d$1_Option: typeof Option;
type index_d$1_ColorPickerParams = ColorPickerParams;
declare const index_d$1_SketchPicker: typeof SketchPicker;
type index_d$1_SliderProps = SliderProps;
declare const index_d$1_Slider: typeof Slider;
type index_d$1_SwipeableDrawerProps = SwipeableDrawerProps;
declare const index_d$1_SwipeableDrawer: typeof SwipeableDrawer;
type index_d$1_SwitchProps = SwitchProps;
declare const index_d$1_Switch: typeof Switch;
type index_d$1_TableProps = TableProps;
declare const index_d$1_StyledTable: typeof StyledTable;
declare const index_d$1_Table: typeof Table;
type index_d$1_TableBodyProps = TableBodyProps;
declare const index_d$1_StyledTableBody: typeof StyledTableBody;
declare const index_d$1_TableBody: typeof TableBody;
type index_d$1_TableCellProps = TableCellProps;
declare const index_d$1_StyledTableCell: typeof StyledTableCell;
declare const index_d$1_TableCell: typeof TableCell;
type index_d$1_TableContainerProps = TableContainerProps;
declare const index_d$1_StyledTableContainer: typeof StyledTableContainer;
declare const index_d$1_TableContainer: typeof TableContainer;
type index_d$1_TableHeadProps = TableHeadProps;
declare const index_d$1_StyledTableHead: typeof StyledTableHead;
declare const index_d$1_TableHead: typeof TableHead;
type index_d$1_TableRowProps = TableRowProps;
declare const index_d$1_StyledTableRow: typeof StyledTableRow;
declare const index_d$1_TableRow: typeof TableRow;
type index_d$1_TabProps = TabProps;
type index_d$1_TabsProps = TabsProps;
declare const index_d$1_Tab: typeof Tab;
declare const index_d$1_Tabs: typeof Tabs;
type index_d$1_TextFieldProps = TextFieldProps;
declare const index_d$1_TextField: typeof TextField;
type index_d$1_ToggleButtonProps = ToggleButtonProps;
type index_d$1_ToggleButtonGroupProps = ToggleButtonGroupProps;
declare const index_d$1_ToggleButton: typeof ToggleButton;
declare const index_d$1_ToggleButtonGroup: typeof ToggleButtonGroup;
type index_d$1_ToolbarProps = ToolbarProps;
declare const index_d$1_Toolbar: typeof Toolbar;
type index_d$1_TreeViewProps = TreeViewProps;
type index_d$1_TreeItemProps = TreeItemProps;
type index_d$1_TreeItemContentProps = TreeItemContentProps;
declare const index_d$1_TreeItem: typeof TreeItem;
declare const index_d$1_TreeView: typeof TreeView;
type index_d$1_TypographyProps = TypographyProps;
declare const index_d$1_Typography: typeof Typography;
type index_d$1_CircleProps = CircleProps;
declare const index_d$1_StyledCircle: typeof StyledCircle;
declare const index_d$1_Circle: typeof Circle;
type index_d$1_GroupProps = GroupProps;
declare const index_d$1_StyledGroup: typeof StyledGroup;
declare const index_d$1_Group: typeof Group;
type index_d$1_PolygonProps = PolygonProps;
declare const index_d$1_StyledPolygon: typeof StyledPolygon;
declare const index_d$1_Polygon: typeof Polygon;
type index_d$1_RectangleProps = RectangleProps;
declare const index_d$1_Rectangle: typeof Rectangle;
type index_d$1_SvgProps = SvgProps;
type index_d$1_CalculateRatioProps = CalculateRatioProps;
declare const index_d$1_CalculateRatio: typeof CalculateRatio;
declare const index_d$1_CalculateRevertRatio: typeof CalculateRevertRatio;
declare const index_d$1_Svg: typeof Svg;
declare const index_d$1_StyledText: typeof StyledText;
declare const index_d$1_Text: typeof Text;
declare namespace index_d$1 {
  export { type index_d$1_AlertProps as AlertProps, index_d$1_CustomAlert as CustomAlert, index_d$1_Alert as Alert, type index_d$1_AppBarProps as AppBarProps, index_d$1_AppBar as AppBar, type index_d$1_AutocompleteProps as AutocompleteProps, index_d$1_Autocomplete as Autocomplete, type index_d$1_BadgeProps as BadgeProps, index_d$1_Badge as Badge, type index_d$1_BoxProps as BoxProps, index_d$1_Box as Box, type index_d$1_BreadcrumbsProps as BreadcrumbsProps, index_d$1_Breadcrumbs as Breadcrumbs, type index_d$1_ButtonProps as ButtonProps, index_d$1_Button as Button, type index_d$1_CardGridProps as CardGridProps, index_d$1_CardGrid as CardGrid, type index_d$1_CarouselProps as CarouselProps, index_d$1_Carousel as Carousel, type index_d$1_BaseSeriesOption as BaseSeriesOption, type index_d$1_BaseChartProps as BaseChartProps, type index_d$1_ChartHandle as ChartHandle, index_d$1_BaseChart as BaseChart, type index_d$1_GaugeChartProps as GaugeChartProps, index_d$1_GaugeChart as GaugeChart, type index_d$1_SeriesProps as SeriesProps, type index_d$1_LineChartProps as LineChartProps, index_d$1_LineChart as LineChart, type index_d$1_CheckboxProps as CheckboxProps, index_d$1_Checkbox as Checkbox, type index_d$1_ChipProps as ChipProps, index_d$1_Chip as Chip, type index_d$1_CollapseProps as CollapseProps, index_d$1_Collapse as Collapse, type index_d$1_ColorPickerProps as ColorPickerProps, index_d$1_ColorPicker as ColorPicker, type index_d$1_GridRowModel as GridRowModel, type index_d$1_GridSelectionModel as GridSelectionModel, type index_d$1_GridCallbackDetails as GridCallbackDetails, type index_d$1_GridSortItem as GridSortItem, type index_d$1_GridCellParams as GridCellParams, type index_d$1_ExtendGridEnrichedColDef as ExtendGridEnrichedColDef, type index_d$1_GridColumns as GridColumns, type index_d$1_GridRowParams as GridRowParams, type index_d$1_GridCellEditCommitParams as GridCellEditCommitParams, type index_d$1_DataGridProps as DataGridProps, type index_d$1__GridRenderCellParams as _GridRenderCellParams, index_d$1_useGridApiContext as useGridApiContext, type index_d$1_StyledDataGridProps as StyledDataGridProps, index_d$1_StyledDataGrid as StyledDataGrid, type index_d$1_EditInputCellProps as EditInputCellProps, type index_d$1_CheckEditInputCellProps as CheckEditInputCellProps, index_d$1_CheckEditInputCell as CheckEditInputCell, type index_d$1_SelectEditInputCellProps as SelectEditInputCellProps, index_d$1_SelectEditInputCell as SelectEditInputCell, type index_d$1_DataGridHandle as DataGridHandle, index_d$1_DataGrid as DataGrid, type index_d$1_DatePickerProps as DatePickerProps, index_d$1_DatePicker as DatePicker, type index_d$1_DialogProps as DialogProps, type index_d$1_DialogTitleProps as DialogTitleProps, type index_d$1_DialogContentProps as DialogContentProps, type index_d$1_DialogActionsProps as DialogActionsProps, index_d$1_StyledDialog as StyledDialog, index_d$1_StyledDialogTitle as StyledDialogTitle, index_d$1_StyledDialogContent as StyledDialogContent, index_d$1_StyledDialogActions as StyledDialogActions, index_d$1_Dialog as Dialog, index_d$1_DialogTitle as DialogTitle, index_d$1_DialogContent as DialogContent, index_d$1_DialogActions as DialogActions, type index_d$1_DrawerProps as DrawerProps, index_d$1_Drawer as Drawer, type index_d$1_FormControlLabelProps as FormControlLabelProps, index_d$1_FormControlLabel as FormControlLabel, type index_d$1_IconButtonProps as IconButtonProps, index_d$1_IconButton as IconButton, type index_d$1_InputAdornmentProps as InputAdornmentProps, index_d$1_InputAdornment as InputAdornment, type index_d$1_CenterLayoutProps as CenterLayoutProps, index_d$1_CenterLayout as CenterLayout, type index_d$1_DividerData as DividerData, type index_d$1_TabGroup as TabGroup, type index_d$1_LayoutData as LayoutData, type index_d$1_DockLayoutProps as DockLayoutProps, index_d$1_DockLayout as DockLayout, type index_d$1_DividerProps as DividerProps, index_d$1_DividerBox as DividerBox, type index_d$1_FlexLayoutProps as FlexLayoutProps, index_d$1_FlexLayout as FlexLayout, type index_d$1_SpacerProps as SpacerProps, index_d$1_Spacer as Spacer, type index_d$1_GridComponent as GridComponent, type index_d$1_IGridContainer as IGridContainer, type index_d$1_IGridLayout as IGridLayout, index_d$1_GridLayout as GridLayout, type index_d$1_LinkProps as LinkProps, index_d$1_Link as Link, index_d$1_List as List, index_d$1_ListSubheader as ListSubheader, index_d$1_ListItemButton as ListItemButton, index_d$1_ListItemIcon as ListItemIcon, index_d$1_ListItemText as ListItemText, type index_d$1_LoadingButtonProps as LoadingButtonProps, index_d$1_LoadingButton as LoadingButton, type index_d$1_MenuProps as MenuProps, type index_d$1_MenuItemProps as MenuItemProps, index_d$1_Menu as Menu, index_d$1_MenuItem as MenuItem, type index_d$1_LinearProgressProps as LinearProgressProps, index_d$1_LinearProgress as LinearProgress, index_d$1_CustomLinearProgress as CustomLinearProgress, type index_d$1_RadioProps as RadioProps, type index_d$1_RadioGroupProps as RadioGroupProps, index_d$1_RadioGroup as RadioGroup, type index_d$1_SelectProps as SelectProps, type index_d$1_SelectItemProps as SelectItemProps, index_d$1_Select as Select, index_d$1_Option as Option, type index_d$1_ColorPickerParams as ColorPickerParams, index_d$1_SketchPicker as SketchPicker, type index_d$1_SliderProps as SliderProps, index_d$1_Slider as Slider, type index_d$1_SwipeableDrawerProps as SwipeableDrawerProps, index_d$1_SwipeableDrawer as SwipeableDrawer, type index_d$1_SwitchProps as SwitchProps, index_d$1_Switch as Switch, type index_d$1_TableProps as TableProps, index_d$1_StyledTable as StyledTable, index_d$1_Table as Table, type index_d$1_TableBodyProps as TableBodyProps, index_d$1_StyledTableBody as StyledTableBody, index_d$1_TableBody as TableBody, type index_d$1_TableCellProps as TableCellProps, index_d$1_StyledTableCell as StyledTableCell, index_d$1_TableCell as TableCell, type index_d$1_TableContainerProps as TableContainerProps, index_d$1_StyledTableContainer as StyledTableContainer, index_d$1_TableContainer as TableContainer, type index_d$1_TableHeadProps as TableHeadProps, index_d$1_StyledTableHead as StyledTableHead, index_d$1_TableHead as TableHead, type index_d$1_TableRowProps as TableRowProps, index_d$1_StyledTableRow as StyledTableRow, index_d$1_TableRow as TableRow, type index_d$1_TabProps as TabProps, type index_d$1_TabsProps as TabsProps, index_d$1_Tab as Tab, index_d$1_Tabs as Tabs, type index_d$1_TextFieldProps as TextFieldProps, index_d$1_TextField as TextField, type index_d$1_ToggleButtonProps as ToggleButtonProps, type index_d$1_ToggleButtonGroupProps as ToggleButtonGroupProps, index_d$1_ToggleButton as ToggleButton, index_d$1_ToggleButtonGroup as ToggleButtonGroup, type index_d$1_ToolbarProps as ToolbarProps, index_d$1_Toolbar as Toolbar, type index_d$1_TreeViewProps as TreeViewProps, type index_d$1_TreeItemProps as TreeItemProps, type index_d$1_TreeItemContentProps as TreeItemContentProps, index_d$1_TreeItem as TreeItem, index_d$1_TreeView as TreeView, type index_d$1_TypographyProps as TypographyProps, index_d$1_Typography as Typography, type index_d$1_CircleProps as CircleProps, index_d$1_StyledCircle as StyledCircle, index_d$1_Circle as Circle, type index_d$1_GroupProps as GroupProps, index_d$1_StyledGroup as StyledGroup, index_d$1_Group as Group, type index_d$1_PolygonProps as PolygonProps, index_d$1_StyledPolygon as StyledPolygon, index_d$1_Polygon as Polygon, type index_d$1_RectangleProps as RectangleProps, index_d$1_Rectangle as Rectangle, type index_d$1_SvgProps as SvgProps, type index_d$1_CalculateRatioProps as CalculateRatioProps, index_d$1_CalculateRatio as CalculateRatio, index_d$1_CalculateRevertRatio as CalculateRevertRatio, index_d$1_Svg as Svg, index_d$1_StyledText as StyledText, index_d$1_Text as Text };
}

declare type CommonOptions = {
    design: {
        pallete: {
            neutral: {
                black: string;
                white: string;
                grey100: string;
                grey80: string;
                grey60: string;
                grey20: string;
                grey10: string;
                grey5: string;
            };
            brand: {
                navy: string;
                orange: string;
                skyblue: string;
                turquoise: string;
            };
            semantic: {
                success: string;
                warning: string;
                error100: string;
                error110: string;
            };
            primary110: string;
            primary100: string;
            primary60: string;
            primary40: string;
            primary20: string;
        };
    };
};

declare type _CustomOptions = {
    pallete?: {
        background?: string;
        border?: string;
        color?: string;
    };
    background?: string;
    color?: string;
    border?: string;
};
declare type CustomOptions = _CustomOptions & CommonOptions;
declare type CustomTheme = {
    custom_mode?: string;
    custom?: CustomOptions;
};
declare module '@mui/material/styles' {
    interface Theme extends CustomTheme {
    }
    interface ThemeOptions extends CustomTheme {
    }
}
interface ThemeOptions extends ThemeOptions$1, CustomTheme {
}
declare const createMyTheme: (mode: PaletteMode, options?: ThemeOptions) => Theme;
interface Theme extends Theme$1 {
}
declare const useMyTheme: () => Theme;
declare const ThemeProvider: typeof ThemeProvider$1;

type index_d__CustomOptions = _CustomOptions;
type index_d_CustomOptions = CustomOptions;
type index_d_ThemeOptions = ThemeOptions;
declare const index_d_createMyTheme: typeof createMyTheme;
type index_d_Theme = Theme;
declare const index_d_useMyTheme: typeof useMyTheme;
declare const index_d_ThemeProvider: typeof ThemeProvider;
declare namespace index_d {
  export { type index_d__CustomOptions as _CustomOptions, type index_d_CustomOptions as CustomOptions, type index_d_ThemeOptions as ThemeOptions, index_d_createMyTheme as createMyTheme, type index_d_Theme as Theme, index_d_useMyTheme as useMyTheme, index_d_ThemeProvider as ThemeProvider };
}

export { index_d as Theme, index_d$1 as Units };
