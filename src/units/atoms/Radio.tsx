import * as React from 'react';
import Radio, {RadioProps as _RadioProps} from '@mui/material/Radio';
import _RadioGroup, {RadioGroupProps as _RadioGroupProps} from '@mui/material/RadioGroup';
import _FormControlLabel, {FormControlLabelProps as _FormControlLabelProps} from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { css, styled } from '@mui/material';


export interface RadioProps extends _RadioProps {
  value: string|number|boolean;
  label: string;
}

export interface RadioGroupProps extends _RadioGroupProps {
  label?: string;
  items: RadioProps[]
}

const StyledRadioGroup = styled(({ ...props }: RadioGroupProps) => (
  <_RadioGroup { ...props}  css={css`justify-content: space-around`}>
      {props.items.map((item, i) => {
        return <StyledRadioItem key={i} {...item}></StyledRadioItem>
      })}
     </_RadioGroup>
))(({ theme: _ }) => {
  return {};
});

const StyledRadioItem = styled((props: RadioProps) => (
  <_FormControlLabel value={props.value} control={<Radio />} label={props.label} />
))(({ theme: _ }) => ({}));


export const RadioGroup = (props: RadioGroupProps) => {
  const {label} = props;
  const styledRadioGroup = label ? (
    <FormControl css={css`width:100%`}>
      <FormLabel>{props.label}</FormLabel>
      <StyledRadioGroup {...props}/>
    </FormControl>
  ) : (
    <StyledRadioGroup {...props} />
  );

  return styledRadioGroup;
};

