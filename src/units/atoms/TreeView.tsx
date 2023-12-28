import React from 'react';
import {
  treeItemClasses,
  TreeView as _TreeView,
  TreeViewProps as _TreeViewProps,
} from '@mui/lab';

import {
  TreeItem as _TreeItem,
  TreeItemProps as _TreeItemProps,
  TreeItemContentProps as _TreeItemContentProps,
} from '@mui/lab';
import { css, styled, SvgIconProps } from '@mui/material';
import { Box } from './Box';
import { Typography } from './Typography';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export type TreeViewProps = _TreeViewProps & {};

export interface TreeItemProps extends _TreeItemProps {}
export interface TreeItemContentProps extends _TreeItemContentProps {}

declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon?: React.ElementType<SvgIconProps>;
  labelInfo?: React.ReactNode;
  labelText?: string;
  depth?: number;
};

const StyledTreeItemRoot = styled(
  (props: TreeItemProps & { depth?: number }) => {
    return <_TreeItem {...props}></_TreeItem>;
  },
)(({ theme, depth }) => {
  return {
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '&.Mui-expanded': {
        fontWeight: theme.typography.fontWeightRegular,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: 'var(--tree-view-color)',
      },
      [`& .${treeItemClasses.label}`]: {
        fontWeight: 'inherit',
        color: 'inherit',
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 0,
    },
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: `${(depth ? depth : 1) * 8}px`,
    },
  };
});

const StyledTreeItem = (props: StyledTreeItemProps) => {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props;
  const handlePrevent = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <StyledTreeItemRoot
      label={
        other.label? other.label : 
        <div draggable>
          <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              sx={{ fontWeight: 'inherit', flexGrow: 1 }}
            >
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  );
};

export const TreeItem = (props: StyledTreeItemProps) => {
  return <StyledTreeItem {...props}></StyledTreeItem>;
};
export const TreeView = (props: TreeViewProps) => {
  const {
    defaultCollapseIcon = <ArrowDropDownIcon />,
    defaultExpandIcon = <ArrowRightIcon />,
  } = props;
  return (
    <_TreeView
      defaultCollapseIcon={defaultCollapseIcon}
      defaultExpandIcon={defaultExpandIcon}
      {...props}
    ></_TreeView>
  );
};
