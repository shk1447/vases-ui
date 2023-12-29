import React, {
  Children,
  cloneElement,
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
  MouseEvent,
  useEffect,
  isValidElement,
  PropsWithChildren,
} from "react";


import {
  Interpolation,
  Menu,
  MenuListProps,
  PopoverOrigin,
  SxProps,
  Theme,
} from '@mui/material';

export interface IPopperContext {
  anchorEl: null | HTMLElement;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

export const PopperContext =
  createContext<IPopperContext | null>(null);
interface PopperProps {
  children: ReactNode;
}
export const Popper = ({ children }: PopperProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  useEffect(() => {
    return () => {
      setAnchorEl(null);
    };
  }, []);

  useEffect(() => {
    if (!open) setAnchorEl(null);
  }, [open]);
  return (
    <PopperContext.Provider value={{ anchorEl, setAnchorEl }}>
      {children}
    </PopperContext.Provider>
  );
};

export interface TriggerProps {
  children: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}
const Trigger = ({ children, onOpen, onClose }: TriggerProps) => {
  const popperContext = useContext(PopperContext);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const anchor = popperContext?.anchorEl
        ? null
        : event.currentTarget;
        popperContext?.setAnchorEl(anchor);
    },
    [popperContext]
  );

  useEffect(() => {
    if (popperContext?.anchorEl) {
      onOpen && onOpen();
    } else {
      onClose && onClose();
    }
  }, [popperContext?.anchorEl]);

  return (
    <>
      {Children.toArray(children).map((child: ReactNode) => {
        return cloneElement(child as ReactElement, {
          onClick: (event: MouseEvent<HTMLElement>) => {
            if ((child as ReactElement).props.disabled) {
              return;
            } else {
              handleClick(event);
            }
            // event.preventDefault();
            // event.stopPropagation();
          },
        });
      })}
    </>
  );
};

export const usePopTriggerContext = () => {
  let popperTriggerContext = useContext(PopperContext);
  return popperTriggerContext;
};


// import React, {
//   Children,
//   cloneElement,
  
// } from 'react';

export interface PopperMenuProps {
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  anchorEl?: null | HTMLElement;
  css?: SxProps<Theme> | undefined;
  listOptions?: Partial<MenuListProps<'ul'>> | undefined;
}

export type PopMenuHandle = {
  open: () => void;
  close: () => void;
};

const PopMenu = (props: PropsWithChildren<PopperMenuProps>) => {
  const {
    anchorEl = null,
    children,
    anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
    transformOrigin,
    css,
    listOptions,
  } = props;

  const popperTriggerContext = usePopTriggerContext();

  const open = popperTriggerContext
    ? Boolean(popperTriggerContext.anchorEl)
    : Boolean(props.anchorEl);

  const anchor = popperTriggerContext
    ? popperTriggerContext.anchorEl
    : anchorEl;

  return (
    <Menu
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      sx={{
        ...css,
        '& .MuiMenu-paper': {
          boxShadow: '0px 8px 12px rgba(42, 46, 57, 0.1)',
          borderRadius: '4px',
          border: `1px solid #CACCD0`,
          marginTop: '4px',
          overflow: 'auto',
        },
        '& .MuiList-root': {
          padding: '4px 0px',
        },
      }}
      MenuListProps={{
        ...listOptions,
      }}
      anchorEl={anchor}
      open={open}
      onClose={() => {
        console.log('ttt');
        popperTriggerContext?.setAnchorEl(null);
      }}
    >
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            context: popperTriggerContext,
          });
        }

        return child;
      })}
    </Menu>
  );
};

Popper.Trigger = Trigger;
Popper.Menu = PopMenu;