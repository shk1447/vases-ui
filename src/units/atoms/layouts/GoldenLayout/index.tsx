import React, {
  useEffect,
  forwardRef,
  createRef,
  useImperativeHandle,
  useCallback,
  useState,
} from "react";
import styled from "@emotion/styled";
import {
  LayoutConfig as _LayoutConfig,
  GoldenLayout as _GoldenLayout,
  ComponentItemConfig as _ComponentItemConfig,
  ComponentContainer,
  JsonValue,
  EventEmitter,
  ComponentItem,
} from "golden-layout";
import "./css/goldenlayout-base.css";
import "./css/themes/goldenlayout-dark-theme.css";
import ReactDOM from "react-dom";

export interface LayoutConfig extends _LayoutConfig {}

export interface ComponentItemConfig extends _ComponentItemConfig {}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export interface GoldenLayoutProps {
  className?: string;
  config: LayoutConfig;
  components?: Record<string, any>;
  itemCreated?: (item: EventEmitter.BubblingEvent) => void;
  itemDropped?: (item: ComponentItem) => void;
  itemDestroyed?: (item: EventEmitter.BubblingEvent) => void;
  stateChanged?: (content: any) => void;
}

export type GoldenLayoutHandle = {
  addComponent: (name: string, title: string, payload: any) => void;
  registerComponent: (name: string, DynamicComponent: any) => void;
};

export const GoldenLayout = forwardRef(
  (
    {
      className,
      config,
      components,
      stateChanged,
      itemCreated,
      itemDropped,
      itemDestroyed,
    }: GoldenLayoutProps,
    ref: React.Ref<GoldenLayoutHandle>
  ) => {
    const [gl, setGl] = useState<_GoldenLayout>();
    const containerRef = createRef<HTMLDivElement>();

    useImperativeHandle(ref, () => ({
      addComponent(name: string, title: string, payload: any) {
        if (gl) {
          gl.addComponent(name, payload, title);
        }
      },
      registerComponent(name: string, DynamicComponent: any) {
        if (gl) {
          gl.registerComponentFactoryFunction(
            name,
            (
              container: ComponentContainer,
              state: JsonValue | undefined,
              virtual: boolean
            ) => {
              ReactDOM.render(
                <DynamicComponent {...(state as any)} />,
                container.element
              );
            }
          );
        }
      },
    }));
    useEffect(() => {
      if (containerRef.current) {
        if (!gl) {
          const _gl = new _GoldenLayout(containerRef.current);
          _gl.resizeWithContainerAutomatically = true;

          if (itemCreated) {
            _gl.on("itemCreated", itemCreated);
          }

          if (stateChanged) {
            _gl.on("stateChanged", () => {
              stateChanged(_gl.toConfig());
            });
          }

          if (itemDropped) {
            _gl.on("itemDropped", itemDropped);
          }

          if (itemDestroyed) {
            _gl.on("itemDestroyed", itemDestroyed);
          }

          if (components) {
            for (const [name, DynamicComponent] of Object.entries(components)) {
              _gl.registerComponentFactoryFunction(
                name,
                (
                  container: ComponentContainer,
                  state: JsonValue | undefined,
                  virtual: boolean
                ) => {
                  ReactDOM.render(
                    <DynamicComponent {...(state as any)} />,
                    container.element
                  );
                }
              );
            }
          }

          _gl.loadLayout(config);
          setGl(_gl);
        }
      }
    }, []);

    return <StyledContainer ref={containerRef} className={className} />;
  }
);
