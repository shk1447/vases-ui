import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormControl from './FormControl';

import { Stack } from '@mui/material';

export default {
  title: 'Vases-UI/molecules/FormControl',
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: `FormControl 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FormControl>;

interface FormTestProps {
  oneError: boolean;
  oneDisabled: boolean;
  twoError: boolean;
  twoDisabled: boolean;
  threeError: boolean;
  threeDisabled: boolean;
}
const FormTest: ComponentStory<any> = (args: FormTestProps) => (
  <div style={{ padding: '50px' }}>
    <form>
      <Stack direction="column" gap="20px" width="100%">
        <Stack direction="row" gap="10px" width="100%">
          <FormControl
            error={args.oneError}
            disabled={args.oneDisabled}
            style={{ width: '100%' }}
          >
            <FormControl.Label>1</FormControl.Label>
            <FormControl.TextField
              placeholder="Typing"
              helperText={args.oneError ? 'Error Message' : ''}
            ></FormControl.TextField>
          </FormControl>
          <FormControl
            error={args.twoError}
            disabled={args.twoDisabled}
            style={{ width: '50%' }}
          >
            <FormControl.Label>2</FormControl.Label>
            <FormControl.TextField placeholder="Typing"></FormControl.TextField>
          </FormControl>
        </Stack>

        <FormControl
          error={args.threeError}
          disabled={args.twoDisabled}
          style={{ width: '100%' }}
        >
          <FormControl.Label>3</FormControl.Label>
          <FormControl.TextField
            placeholder="Typing"
            multiline
            rows={3}
            maxRows={3}
            helperText={'Message'}
          ></FormControl.TextField>
        </FormControl>
      </Stack>
    </form>
  </div>
);
export const Form = FormTest.bind({});
Form.args = {
  oneError: false,
  oneDisabled: false,
  twoError: false,
  twoDisabled: false,
  threeError: false,
  threeDisabled: false,
};
