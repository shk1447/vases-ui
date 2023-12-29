import React from 'react';
import _Autocomplete, {
  AutocompleteProps as _AutocompleteProps,
} from '@mui/material/Autocomplete';
import { styled } from '@mui/material';

export interface AutocompleteProps
  extends _AutocompleteProps<any, any, any, any> {
  label?: string;
}

const StyledAutoComplete = styled((props: AutocompleteProps) => (
  <_Autocomplete {...props} />
))(({ theme: _ }) => {
  return {
    '& .MuiInputBase-root': {
      padding: '0px !important',
    },
  };
});

export const Autocomplete = (props: AutocompleteProps) => {
  return <StyledAutoComplete {...props} />;
};
