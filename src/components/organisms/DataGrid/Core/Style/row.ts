import { css } from "@emotion/css";
export const row = css`
  display: contents;
  line-height: var(--rdg-row-height);
  background-color: var(--rdg-background-color);

  &:hover {
    background-color: var(--rdg-row-hover-background-color);
    cursor: pointer;
  }

  &[aria-selected="true"] {
    background-color: var(--rdg-row-selected-background-color);

    &:hover {
      background-color: var(--rdg-row-selected-hover-background-color);
    }
  }
`;

export const rowClassname = `rdg-row ${row}`;

export const rowSelected = css`
  outline: 0px solid var(--rdg-selection-color);
  outline-offset: 0px;
`;

export const rowSelectedClassname = "rdg-row-selected";
export const rowSelectedWithFrozenCell = css`
  &::before {
    content: "";
    display: inline-block;
    height: 100%;
    position: sticky;
    inset-inline-start: 0;
    border-inline-start: 2px solid var(--rdg-selection-color);
  }
`;
