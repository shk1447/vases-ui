import { css } from "@emotion/css";
import type { EditorProps } from "../../";

const textEditorInternalClassname = css`
  appearance: none;

  box-sizing: border-box;
  inline-size: 100%;
  block-size: 100%;
  padding-block: 0;
  padding-inline: 6px;
  border: 2px solid #ccc;
  vertical-align: top;
  color: var(--rdg-color);
  background-color: var(--rdg-background-color);

  font-family: inherit;
  font-size: var(--rdg-font-size);

  &:focus {
    border-color: var(--rdg-selection-color);
    outline: none;
  }

  &::placeholder {
    color: #999;
    opacity: 1;
  }
`;

export const textEditorClassname = `rdg-text-editor ${textEditorInternalClassname}`;

function autoFocusAndSelect(input: HTMLInputElement | null) {
  input?.focus();
  input?.select();
}

export function TextEditor<TRow, TSummaryRow>({
  row,
  column,
  onRowChange,
  onClose,
}: EditorProps<TRow, TSummaryRow>) {
  return (
    <input
      className={textEditorClassname}
      ref={autoFocusAndSelect}
      value={row[column.key as keyof TRow] as unknown as string}
      onChange={(event) =>
        onRowChange({ ...row, [column.key]: event.target.value })
      }
      onBlur={() => onClose(true)}
    />
  );
}
