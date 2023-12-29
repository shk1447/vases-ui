import React, { useState } from 'react';
import {
  FileSelector,
  FileSelectorProps,
} from '..';

export default {
  title: 'VASES-UI/Molecules/FileSelector',
  component: FileSelector,
};

export const Single = () => {
  return (
    <>
      <FileSelector selectType="single"></FileSelector>
    </>
  );
};
Single.storyName = 'Single';

export const Multiple = () => {
  return (
    <>
      <FileSelector selectType="multi"></FileSelector>
    </>
  );
};
Multiple.storyName = 'Multiple';
Multiple.parameters = {
  docs: {
    description: {
      story: '> 여러 파일을 선택할 수 있는 FileSelector 입니다.',
    },
  },
};
