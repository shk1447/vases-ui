import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import ListItem from '@mui/material/ListItem/ListItem';
import { IconButton } from '../IconButton';
import { ICON_Next, ICON_Prev } from '../../styles/icons';
import { LoadingOverlay } from '../../molecules/LoadingOverlay';
import { useResizeDetector } from 'react-resize-detector';
import { Box } from '../Box';

type SlideOption = {
  index: number;
};

type ScrollOption = {
  frame?: number;
  loading?: boolean;
};

type OptionMap = {
  slide: SlideOption;
  scroll: ScrollOption;
};

export interface CarouselProps<K extends keyof OptionMap> {
  type: K;
  option: OptionMap[K];
  items: string[];
  className?: string;
  useLoading?: boolean;
  onRenderItem?: (
    path: string,
    idx: number,
    isScrolling: boolean | undefined,
  ) => any;
}

export const Carousel = <K extends keyof OptionMap>(
  props: CarouselProps<K>,
) => {
  const { width, height, ref: containerRef } = useResizeDetector();
  const [idx, setIdx] = useState<number>(0);
  const { type, option, items, className, useLoading, onRenderItem } = props;

  const [itemWidth, setItemWidth] = useState<number>(0);

  useEffect(() => {
    if (type == 'slide') {
      const slideOption = option as SlideOption;
      if (slideOption.index) setIdx(slideOption.index);
    }
  }, []);

  const onImgLoad = (e: any) => {
    const { offsetWidth } = e.target;
    if (itemWidth < offsetWidth) {
      setItemWidth(offsetWidth);
    }
  };

  const renderRow = ({
    index,
    style,
    isScrolling,
  }: ListChildComponentProps) => {
    const scrollOption = option as ScrollOption;
    return (
      <>
        <ListItem style={style} key={index} component="div" disablePadding>
          {onRenderItem ? (
            onRenderItem(items[index], index, isScrolling)
          ) : scrollOption.loading && isScrolling ? (
            <>Loading....</>
          ) : (
            <img
              style={(option as ScrollOption).frame ? {
                width:'100%',
                height:'100%'
              } : {} }
              onLoad={onImgLoad}
              alt=""
              src={items[index]}
            />
          )}
        </ListItem>
      </>
    );
  };

  const renderItems = useMemo(() => {
    switch (type) {
      case 'scroll': {
        const scrollOption = option as ScrollOption;
        return width && width > 0 ? (
          <FixedSizeList
            useIsScrolling={useLoading}
            direction="horizontal"
            height={'100%'}
            width={width}
            itemSize={
              scrollOption.frame
                ? width / scrollOption.frame
                : itemWidth
                ? itemWidth
                : width
            }
            itemCount={items.length}
            overscanCount={5}
          >
            {renderRow}
          </FixedSizeList>
        ) : (
          <></>
        );
      }

      case 'slide': {
        return (
          <Box
            className={className}
            sx={{
              border:'1px solid white',
              position:'relative',
              height:'100%'
            }}
          >
            <img
            style={{
              position: 'absolute',
                height: '100%',
                width: '100%',
            }}
              
              alt=""
              src={items[idx]}
            />
            <IconButton
              onClick={() => setIdx(idx == 0 ? items.length - 1 : idx - 1)}
              sx={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translate(0%, -50%)'
              }}
              
            >
              <ICON_Prev />
            </IconButton>

            <IconButton
              onClick={() => setIdx(idx == items.length - 1 ? 0 : idx + 1)}
              sx={{
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translate(0%, -50%)',
              }}
            >
              <ICON_Next />
            </IconButton>
          </Box>
        );
      }
    }
  }, [items, type, idx, width, itemWidth]);

  useEffect(() => {
    if (containerRef.current) {
      const bounding = containerRef.current.getBoundingClientRect();

      setItemWidth(0);
    }
  }, [items]);

  return (
    <div
      // style={{ height: '100%', width: '100%' }}
      className={className}
      style={{
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      }}
      ref={containerRef}
    >
      {renderItems}
    </div>
  );
};
