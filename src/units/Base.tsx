import React, {
  PropsWithChildren,
  Children,
  cloneElement,
  CSSProperties,
  isValidElement,
} from 'react';

export type BaseProps = PropsWithChildren<{
  clickable: boolean;
  focusable: boolean;
  selectable: boolean;

  disabled: boolean;
  hovered: boolean;
  selected: boolean;
  focused: boolean;
  style?: React.CSSProperties;
}>;

export const Base = (props: BaseProps) => {
  const { children, disabled, hovered, selected, focused, style } = props;
  return (
    <div style={style ? style : {}}>
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(
            child,
            Object.assign(
              { disabled, hovered, selected, focused },
              child.props,
            ),
          );
        }

        return child;
      })}
    </div>
  );
};
