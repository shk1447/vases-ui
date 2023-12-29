import React, { useCallback } from 'react';
import _Snackbar, {
  SnackbarProps as _SnackbarProps,
} from '@mui/material/Snackbar';
import { IconButton, styled } from '@mui/material';
import {
  useSnackbar as _useSnackbar,
  SnackbarProvider as _SnackbarProvider,
  SnackbarProviderProps as _SnackbarProviderProps,
  SnackbarKey,
  SnackbarMessage,
  OptionsObject,
} from 'notistack';
import { ICON_Close } from '../../styles/icons';

export interface SnackbarProps extends _SnackbarProps {}
export interface SnackbarProviderProps extends _SnackbarProviderProps {
  direction?:
    | 'TopLeft'
    | 'TopCenter'
    | 'TopRigt'
    | 'BottomRight'
    | 'BottomLeft'
    | 'BottomCenter';
  isClosable?: boolean;
}

type SnackbarKeyProps = {
  snackbarKey: SnackbarKey;
};

const StyledSnackBar = styled(({ ...props }: SnackbarProps) => (
  <_Snackbar {...props} />
))(({ theme: _ }) => {
  return {};
});

let useSnackbarRef: any = null;

export const SnackbarUtilsConfigurator = () => {
  useSnackbarRef = useSnackbar();

  return null;
};

export const Snackbar = ({ ...props }: SnackbarProps) => {
  const styledSnackbar = <StyledSnackBar {...props} />;

  return styledSnackbar;
};

export const useSnackbar = () => {
  const _enqueueSnackbar =
    useSnackbarRef != null
      ? useSnackbarRef.enqueueSnackbar
      : _useSnackbar().enqueueSnackbar;
  const _closeSnackbar =
    useSnackbarRef != null
      ? useSnackbarRef.closeSnackbar
      : _useSnackbar().closeSnackbar;
  const closeSnackbar = (key?: SnackbarKey) => {
    _closeSnackbar(key);
  };
  const enqueueSnackbar = (
    message: SnackbarMessage,
    options?: OptionsObject,
  ): SnackbarKey => {
    const snackbarKey = _enqueueSnackbar(message, {
      ...options,
    });

    let millisecond;
    const range =
      (message as string).length >= 200
        ? 'long'
        : (message as string).length >= 100
        ? 'normal'
        : 'short';

    switch (range) {
      case 'long':
        millisecond = 9000;
        break;
      case 'normal':
        millisecond = 6000;
        break;
      case 'short':
        millisecond = 3000;
        break;
      default:
        break;
    }

    setTimeout(() => {
      closeSnackbar(snackbarKey);
    }, millisecond);
    return snackbarKey;
  };

  return {
    enqueueSnackbar: enqueueSnackbar,
    closeSnackbar: closeSnackbar,
  };
};

export default function SnackbarCloseButton({ snackbarKey }: SnackbarKeyProps) {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <ICON_Close />
    </IconButton>
  );
}

const StyledSnackBarProvider = styled(({ ...props }: SnackbarProviderProps) => {
  return <_SnackbarProvider {...props} />;
})(({ theme: _ }) => {
  return {};
});

export const SnackbarProvider = ({ ...props }: SnackbarProviderProps) => {
  // const { closeSnackbar } = useSnackbar();

  const SnackbarCloseButtonAction = useCallback(
    (key: SnackbarKey) => <SnackbarCloseButton snackbarKey={key} />,
    [],
  );

  switch (props.direction) {
    case 'TopCenter':
      props.anchorOrigin = { horizontal: 'center', vertical: 'top' };
      break;

    case 'TopLeft':
      props.anchorOrigin = { vertical: 'top', horizontal: 'left' };
      break;

    case 'TopRigt':
      props.anchorOrigin = { vertical: 'top', horizontal: 'right' };
      break;

    case 'BottomRight':
      props.anchorOrigin = { vertical: 'bottom', horizontal: 'right' };
      break;

    case 'BottomLeft':
      props.anchorOrigin = { vertical: 'bottom', horizontal: 'left' };
      break;

    case 'BottomCenter':
      props.anchorOrigin = { vertical: 'bottom', horizontal: 'center' };
      break;

    default:
      props.anchorOrigin = { horizontal: 'center', vertical: 'top' };
      break;
  }

  return (
    <StyledSnackBarProvider
      sx={{
        '& .SnackbarContent-root': {
          color: 'primary.main',
          bgcolor: 'secondary.main',
        },
        '&.SnackbarItem-contentRoot': {
          backgroundColor: '#121212',
          border: 0.2,
          borderColor: 'white',
          color: 'white',
        },
        '&.SnackbarItem-variantWarning': {
          color: '#f0ad4e',
        },
        '&.SnackbarItem-variantSuccess': {
          color: '#5cb85c',
        },
        '&.SnackbarItem-variantError': {
          color: '#d9534f',
        },
        '&.SnackbarItem-variantInfo': {
          color: '#5bc0de',
        },
      }}
      {...props}
      action={key =>
        props.isClosable || props.isClosable === undefined
          ? SnackbarCloseButtonAction(key)
          : {}
      }
    ></StyledSnackBarProvider>
  );
};
