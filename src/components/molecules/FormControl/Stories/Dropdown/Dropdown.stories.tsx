import Typography from '@mui/material/Typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { grey } from '../../../../../theme/colors';
import FormControl from '../../FormControl';
import { ReactComponent as SampleIcon } from '../../Assets/Sample.svg';
export default {
  title: 'Vases-UI/molecules/FormControl/Dropdown',
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: `Dropdown 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FormControl>;

export const Default: ComponentStory<typeof FormControl> = args => {
  const [current, setCurrent] = useState('a');

  return (
    <div
      style={{
        padding: '50px',
      }}
    >
      <FormControl {...args} onChange={(e: any) => setCurrent(e.target.value)}>
        <FormControl.Label>
          <Typography variant="med12" sx={{ color: grey[80] }}>
            Label
          </Typography>
        </FormControl.Label>

        <FormControl.Dropdown
          value={current}
          helperText={args.error ? 'Error Message' : ''}
          onChange={(e: any) => console.log(e)}
        >
          <FormControl.Dropdown.Item key={'a'} value={'a'}>
            <FormControl.Dropdown.Item.Text>
              <Typography variant="med14">a</Typography>
            </FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
          <FormControl.Dropdown.Item key={'b'} value={'b'}>
            <FormControl.Dropdown.Item.Text>
              <Typography variant="med14">b</Typography>
            </FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
          <FormControl.Dropdown.Item key={'c'} value={'c'}>
            <FormControl.Dropdown.Item.Text>
              <Typography variant="med14">c</Typography>
            </FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
          <FormControl.Dropdown.Item key={'d'} value={'d'}>
            <FormControl.Dropdown.Item.Text>
              <Typography variant="med14">d</Typography>
            </FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
          <FormControl.Dropdown.Item key={'e'} value={'e'}>
            <FormControl.Dropdown.Item.Text>
              <Typography variant="med14">e</Typography>
            </FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
          <FormControl.Dropdown.Item key={'f'} value={'f'}>
            <FormControl.Dropdown.Item.Text>
              <Typography variant="med14">f</Typography>
            </FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
        </FormControl.Dropdown>
        <FormControl.HelperText>Helper Text</FormControl.HelperText>
      </FormControl>
    </div>
  );
};

Default.bind({});
Default.args = {};

export const Indent_And_Icon: ComponentStory<typeof FormControl> = args => {
  const [current, setCurrent] = useState('a');

  return (
    <div style={{ padding: '50px' }}>
      <FormControl
        {...args}
        defaultValue={current}
        onChange={(e: any) => setCurrent(e.target.value)}
        style={{ width: '336px' }}
      >
        <FormControl.Label>
          <Typography variant="med12" sx={{ color: grey[80] }}>
            Label
          </Typography>
        </FormControl.Label>

        <FormControl.Dropdown value={current}>
          <FormControl.Dropdown.Item key={'a'} value={'a'}>
            <FormControl.Dropdown.Item.Text>
              <Typography variant="med14">a</Typography>
            </FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
          <FormControl.Dropdown.Item key={'b'} value={'b'}>
            <FormControl.Dropdown.Item.Text
              primary={
                <div style={{ display: 'flex' }}>
                  <FormControl.Dropdown.Item.Icon>
                    <SampleIcon />
                  </FormControl.Dropdown.Item.Icon>
                  <Typography variant="med14">b</Typography>
                </div>
              }
            ></FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
          <FormControl.Dropdown.Item key={'c'} value={'c'}>
            <FormControl.Dropdown.Item.Text
              inset
              primary={
                <div style={{ display: 'flex' }}>
                  <FormControl.Dropdown.Item.Icon>
                    <SampleIcon />
                  </FormControl.Dropdown.Item.Icon>
                  <Typography variant="med14">c</Typography>
                </div>
              }
            ></FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
          <FormControl.Dropdown.Item key={'d'} value={'d'}>
            <FormControl.Dropdown.Item.Text
              primary={
                <div style={{ display: 'flex' }}>
                  <FormControl.Dropdown.Item.Icon>
                    <SampleIcon />
                  </FormControl.Dropdown.Item.Icon>
                  <Typography variant="med14">d</Typography>
                </div>
              }
            ></FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
          <FormControl.Dropdown.Item key={'e'} value={'e'}>
            <FormControl.Dropdown.Item.Text
              inset
              primary={
                <div style={{ display: 'flex' }}>
                  <FormControl.Dropdown.Item.Icon>
                    <SampleIcon />
                  </FormControl.Dropdown.Item.Icon>
                  <Typography variant="med14">e</Typography>
                </div>
              }
            ></FormControl.Dropdown.Item.Text>
          </FormControl.Dropdown.Item>
        </FormControl.Dropdown>
        <FormControl.HelperText>Helper Text</FormControl.HelperText>
      </FormControl>
    </div>
  );
};
Indent_And_Icon.bind({});
Indent_And_Icon.args = {};
