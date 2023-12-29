export type Item = {
  label: string;
  value: string;
  items?: Item[];
};

export type PropsWithItems<P> = P & { items: Item[] };
