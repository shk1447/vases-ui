import { styled } from '@mui/material/styles';
import FormGroup, { FormGroupProps } from '@mui/material/FormGroup';

import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

const StyledFormGroup = styled(FormGroup)(({ theme }) => ({}));
const CheckboxGroup = ({ children, ...props }: FormGroupProps) => {
  return <StyledFormGroup {...props}>{children}</StyledFormGroup>;
};

const CustomFormControl = styled(FormControlLabel)(({ theme }) => ({
  '&.Mui-disabled .MuiFormControlLabel-label': {
    opacity: 0.4,
  },
}));
const CheckboxControl = (props: FormControlLabelProps) => {
  return (
    <CustomFormControl {...props} control={props.control}></CustomFormControl>
  );
};
CheckboxGroup.Checkbox = CheckboxControl;
export default CheckboxGroup;
