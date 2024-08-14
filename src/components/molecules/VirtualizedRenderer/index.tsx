import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';

export interface VirtualizedRendererProps {
  direction: 'vertical' | 'horizontal';
  itemSize: number;
  itemCount: number;
  refItems?: any[];
  containerSize: number;
  overscanSize: number;
  onRenderItem: (index: number) => React.ReactNode;
  onScrollStatus?: (hasScroll: boolean) => void;
}

export interface ItemContainerProps {
  index: number;
  itemSize: number;
  direction: 'vertical' | 'horizontal';
}

export const ItemContainer = ({
  direction,
  index,
  itemSize,
  children,
}: React.PropsWithChildren<ItemContainerProps>) => {
  return (
    <div
      style={
        direction == 'vertical'
          ? {
              position: 'absolute',
              height: itemSize + 'px',
              width: '100%',
              top: index * itemSize + 'px',
            }
          : {
              position: 'absolute',
              width: itemSize + 'px',
              height: '100%',
              left: index * itemSize + 'px',
            }
      }
    >
      {children}
    </div>
  );
};

export type VirtaulizedHandle = {
  goToBottom: () => void;
  goToTop: () => void;
  goToItem: (index: number) => void;
};

export const VirtualizedRenderer = forwardRef(
  (
    {
      direction = 'vertical',
      containerSize,
      itemCount,
      refItems,
      itemSize,
      overscanSize = 5,
      onRenderItem,
      onScrollStatus,
    }: VirtualizedRendererProps,
    _ref: React.Ref<VirtaulizedHandle>,
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<React.ReactNode[]>([]);

    const handleScroll = (e: any) => {
      const rowCount = Math.floor(containerSize / itemSize);

      const prevCount = Math.floor(
        (direction === 'vertical' ? e.target.scrollTop : e.target.scrollLeft) /
          itemSize,
      );

      const nodes: any[] = [];

      for (let i = prevCount; i <= prevCount + rowCount + overscanSize; i++) {
        if (i === itemCount) {
          break;
        }

        nodes.push(
          <ItemContainer direction={direction} index={i} itemSize={itemSize}>
            {onRenderItem(i)}
          </ItemContainer>,
        );
      }

      setItems(nodes);
    };

    useImperativeHandle(_ref, () => ({
      goToBottom() {
        if (!ref.current) return;

        const where =
          direction === 'vertical'
            ? { top: ref.current.scrollHeight }
            : { left: ref.current.scrollWidth };
        ref.current.scrollTo({
          ...where,

          behavior: 'smooth',
        });
      },
      goToItem(index) {
        if (!ref.current) return;
        const where =
          direction === 'vertical'
            ? { top: itemSize * index }
            : { left: itemSize * index };
        ref.current.scrollTo({ ...where, behavior: 'smooth' });
      },
      goToTop() {
        if (!ref.current) return;

        const where = direction === 'vertical' ? { top: 0 } : { left: 0 };
        ref.current.scrollTo({
          ...where,
          behavior: 'smooth',
        });
      },
    }));

    useEffect(() => {
      if (ref.current) {
        const rowCount = Math.floor(containerSize / itemSize);

        const prevCount = Math.floor(
          direction === 'vertical'
            ? (ref.current as any).scrollTop
            : (ref.current as any).scrollLeft / itemSize,
        );

        const nodes: any[] = [];

        for (let i = 0; i < prevCount + rowCount + overscanSize; i++) {
          if (i === itemCount) break;
          nodes.push(
            <ItemContainer direction={direction} index={i} itemSize={itemSize}>
              {onRenderItem(i)}
            </ItemContainer>,
          );
        }

        setItems(nodes);
      }
    }, [refItems, itemCount, containerSize, itemSize, overscanSize, direction]);

    useEffect(() => {
      if (ref.current) {
        const { scrollHeight, clientHeight, clientWidth, scrollWidth } =
          ref.current;

        onScrollStatus &&
          onScrollStatus(
            direction === 'vertical'
              ? scrollHeight > clientHeight
              : scrollWidth > clientWidth,
          );
      }
    }, [ref.current, containerSize, direction, itemCount, itemSize, refItems]);

    return (
      <div
        ref={ref}
        style={
          direction === 'vertical'
            ? {
                width: '100%',
                height: containerSize + 'px',
                overflow: 'auto',
                position: 'relative',
              }
            : {
                height: '100%',
                width: containerSize + 'px',
                overflow: 'auto',
                position: 'relative',
              }
        }
        onScroll={handleScroll}
      >
        <div
          style={
            direction === 'vertical'
              ? { height: itemCount * itemSize + 'px', width: '100%' }
              : { width: itemCount * itemSize + 'px', height: '100%' }
          }
        >
          {items}
        </div>
      </div>
    );
  },
);
