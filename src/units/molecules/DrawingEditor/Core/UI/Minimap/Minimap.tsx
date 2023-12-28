
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled';
import React, {
  ForwardedRef,
  memo,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { forwardRef } from 'react';
import { IconButton } from '../../../../../atoms/IconButton';
import { FlexLayout } from '../../../../../atoms/layouts/FlexLayout';
import {
  ICON_Add,
  ICON_AddNoneBorder,
  ICON_Remove,
} from '../../../../../styles/icons';
import { MinimapImperativeInterface } from '../../Interfaces/UI/Minimap';
import MiniMapWrapper, {
  MiniMapWarapperProps,
} from '../../Wrapper/MinimapWrapper';
import { CanvasContext } from '../DrawingEditor';

// TODO: 미니맵을 어디에 띄울지 정하면 props로 옮길지 결정..
const miniMapStyled = css`
  position: absolute;
  bottom: 25px;
  right: 25px;
  border: 1px solid gray;
  z-index: 1;
  box-sizing: border-box;
`;

const viewBoxStyled = css`
  background-color: #56ccf2;
  border: #2d9cdb;
  z-index: 2;
`;

const MinimapHeader = styled.div`
  display: flex;
  height: 15px;
  width: 100%;
  justify-content: flex-end;
  background-color: #a9a9a9;
  padding-top: 2px;
  padding-bottom: 2px;
`;

export interface MiniMapProps {
  ratio: {
    height: number;
    width: number;
  };
  className?: string;
}

const MiniMap = (
  props: MiniMapProps,
  ref: ForwardedRef<MinimapImperativeInterface | undefined>,
): JSX.Element => {
  const _context = useContext(CanvasContext);

  const miniMap = useRef<HTMLDivElement | null>(null);
  const viewBox = useRef<HTMLDivElement | null>(null);
  const [Minimize, setMinimize] = useState<boolean>(false);

  const miniMapWrapper = useRef<MiniMapWrapper | null>(null);

  useEffect(() => {
    return () => {
      miniMap.current = null;
      viewBox.current = null;
    };
  }, []);
  const sizeChanged = useCallback(() => {
    const fullMap = _context?.canvas.current?.stageWrapper();
    const full_width = fullMap?.stage?.width() ?? 0;
    const full_height = fullMap?.stage?.height() ?? 0;

    const width = full_width / props.ratio.width;
    const height = full_height / props.ratio.height;

    const minmapProps: MiniMapWarapperProps = {
      width: width,
      height: height,
      scaleX: 1,
      scaleY: 1,
      minimap: props,
    };

    miniMapWrapper.current = new MiniMapWrapper(
      miniMap.current as HTMLDivElement,
      _context?.canvas.current?.stageWrapper(),
      minmapProps,
    );
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        minimapWrapper: () => miniMapWrapper.current,
        fullMapSizeChange: () => {
          sizeChanged();
        },
      };
    },
    [miniMapWrapper.current],
  );

  return (
    <FlexLayout css={miniMapStyled} direction={'column'} gap={0}>
      <MinimapHeader>
        <IconButton onClick={() => setMinimize(!Minimize)}>
          {Minimize ? <ICON_AddNoneBorder /> : <ICON_Remove />}
        </IconButton>
      </MinimapHeader>

      <div
        ref={miniMap}
        css={css`
          display: ${Minimize ? 'none' : 'block'};
        `}
      >
        <div ref={viewBox} css={viewBoxStyled}></div>
      </div>
    </FlexLayout>
  );
};

export default memo(forwardRef(MiniMap));
