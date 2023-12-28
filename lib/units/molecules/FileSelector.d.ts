export interface FileSelectorProps {
    selectType: 'single' | 'multi';
    onChange?: (data: File[]) => void;
    onError?: (data: string) => void;
}
export declare const FileSelector: (props: FileSelectorProps) => import("@emotion/react/jsx-runtime").JSX.Element;
