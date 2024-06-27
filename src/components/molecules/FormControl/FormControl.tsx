import { FormControlProps } from '@mui/material/FormControl';
import TextField from './Component/TextField';
import Label from './Component/Label';
import FORM_CONTROL from '@mui/material/FormControl';
import RadioGroup from './Component/RadioGroup';
import CheckboxGroup from './Component/CheckboxGroup';
import HelperText from './Component/HelperText';
import Dropdown from './Component/Dropdown';
import Calendar from './Component/Calendar';
import Autocomplete from './Component/Autocomplete';
import ColorPicker from './Component/ColorPicker';
import { Children, cloneElement, isValidElement } from 'react';

const FormControl = ({ children, ...props }: FormControlProps) => (
  <FORM_CONTROL sx={{ gap: '4px' }} {...props}>
    {Children.map(children, child => {
      if (isValidElement(child)) {
        return cloneElement(child, child.props);
      }

      return child;
    })}
  </FORM_CONTROL>
);

FormControl.Label = Label;
FormControl.Dropdown = Dropdown;
FormControl.TextField = TextField;
FormControl.RadioGroup = RadioGroup;
FormControl.CheckboxGroup = CheckboxGroup;
FormControl.Calendar = Calendar;
FormControl.HelperText = HelperText;
FormControl.AutoComplete = Autocomplete;
FormControl.ColorPicker = ColorPicker;
export default FormControl;
