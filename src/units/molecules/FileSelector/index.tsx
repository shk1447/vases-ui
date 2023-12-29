

import { jsx, css } from '@emotion/react'
import React, { useState } from 'react';
import { ListItem } from '@mui/material';
import { Box } from '../../atoms/Box';
import { Chip } from '../../atoms/Chip';
import { FileUploadButton } from '../FileUploadButton';
import { FlexLayout } from '../../atoms/Layout/FlexLayout';

export interface FileSelectorProps {
  selectType: 'single' | 'multi';
  onChange?: (data: File[]) => void;
  onError?: (data: string) => void;
}

export const FileSelector = (props: FileSelectorProps) => {
  const [loadedFileList, setLoadedFileList] = useState<File[]>([]);

  const handleFileDelte = (data: File) => () => {
    setLoadedFileList(files => files.filter(file => file.name !== data.name));
    props.onChange && props.onChange(loadedFileList);
  };

  const handleLoadedFiles = {
    onLoaded: (data: File[] | File) => {
      switch (props.selectType) {
        case 'single': {
          const file = data as File;

          if (!loadedFileList.find(q => q.name == file.name)) {
            setLoadedFileList(pre => [...pre, file]);
          } else {
            const error = '이미 존재하는 파일이 있습니다.';

            console.log(error);
            props.onError && props.onError(error);
          }

          break;
        }

        case 'multi': {
          const datas = data as File[];

          datas.forEach(file => {
            if (!loadedFileList.find(q => q.name == file.name)) {
              setLoadedFileList(pre => [...pre, file]);
              props.onChange && props.onChange(loadedFileList);
            } else {
              const error = '이미 존재하는 파일이 있습니다.';

              console.log(error);
              props.onError && props.onError(error);
            }
          });

          break;
        }
      }
    },
  };

  return (
    <Box
      sx={{ border: 1, borderColor: 'darkgrey' }}
      css={css`
        border-radius: 4px;
        width: 100%;
        height: 100%;
      `}
    >
      <FlexLayout
        direction="column"
        gap={20}
        css={css`
          height: 100%;
          align-items: center;
        `}
      >
        <FlexLayout direction="column" gap={4}>
          <FileUploadButton
            selectType={props.selectType}
            params={handleLoadedFiles}
          >
            Click to select Files
          </FileUploadButton>
        </FlexLayout>
        {loadedFileList.map(file => {
          return (
            <ListItem key={file.name}>
              <Chip label={file.name} onDelete={handleFileDelte(file)} />
            </ListItem>
          );
        })}
      </FlexLayout>
    </Box>
  );
};
