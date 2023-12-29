import React, { ChangeEvent, forwardRef } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { IconButton } from '@mui/material';
import { FlexLayout } from '../../atoms/Layout/FlexLayout';
import { ICON_UploadFile } from '../../styles/icons';

export type ParamsMap = {
  [index: string]: any;

  single: {
    onLoaded: (data: File) => void;
  };
  multi: {
    onLoaded: (data: File[]) => void;
  };
};

export interface FileUploadButtonProps<K extends keyof ParamsMap> {
  accept?: string;
  selectType: K;
  params: ParamsMap[K];
  children?: React.ReactNode;
}

export const FileUploadButton = <T extends keyof ParamsMap>({
  accept,
  selectType,
  params,
  children,
}: FileUploadButtonProps<T>): ReactJSXElement => {
  const handleFileupload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    if (e.target.files.length !== 0) {
      switch (selectType) {
        case 'multi': {
          const multiParam = params as ParamsMap['multi'];
          multiParam.onLoaded([...e.target.files]);
          break;
        }

        case 'single': {
          const singleParam = params as ParamsMap['single'];
          singleParam.onLoaded(e.target.files[0]);
          break;
        }
      }
    }
  };

  return (
    <IconButton component="label">
      <input
        multiple={selectType === 'multi' ? true : false}
        type="file"
        hidden
        accept={accept}
        onChange={handleFileupload}
      />
      <FlexLayout direction="row" gap={4}>
        <ICON_UploadFile />
        <>{children}</>
      </FlexLayout>
    </IconButton>
  );
};
