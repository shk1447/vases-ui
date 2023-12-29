import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import _Dialog, { DialogProps as _DialogProps } from '@mui/material/Dialog';
import _DialogTitle, {
  DialogTitleProps as _DialogTitleProps,
} from '@mui/material/DialogTitle';
import _DialogContent, {
  DialogContentProps as _DialogContentProps,
} from '@mui/material/DialogContent';
import _DialogActions, {
  DialogActionsProps as _DialogActionsProps,
} from '@mui/material/DialogActions';

export type DialogProps = _DialogProps;

export type DialogTitleProps = _DialogTitleProps;

export type DialogContentProps = _DialogContentProps;

export type DialogActionsProps = _DialogActionsProps;

export const StyledDialog = styled(({ ...props }: DialogProps) => (
  <_Dialog {...props} />
))(({ theme: _ }) => ({
  '.MuiPaper-root': {
    maxWidth: '100%',
  },
  '.MuiDialogContent-root': {},
}));

export const StyledDialogTitle = styled(({ ...props }: DialogTitleProps) => (
  <_DialogTitle {...props} />
))(({ theme: _ }) => ({}));

export const StyledDialogContent = styled(
  ({ ...props }: DialogContentProps) => <_DialogContent {...props} />,
)(({ theme: _ }) => ({
  '&': {
    padding: '20px !important',
  },
}));

export const StyledDialogActions = styled(
  ({ ...props }: DialogActionsProps) => <_DialogActions {...props} />,
)(({ theme: _ }) => ({
  '&.MuiDialogActions-root': {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
}));

export const Dialog = ({ ...props }: DialogProps) => {
  return <StyledDialog {...props} />;
};

export const DialogTitle = ({ ...props }: DialogTitleProps) => {
  return <StyledDialogTitle {...props} />;
};

export const DialogContent = forwardRef(
  ({ ...props }: DialogContentProps, ref) => {
    return <StyledDialogContent {...props} ref={ref} />;
  },
);

export const DialogActions = ({ ...props }: DialogActionsProps) => {
  return <StyledDialogActions {...props} />;
};
