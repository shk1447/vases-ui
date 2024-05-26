import Box from "@mui/material/Box";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Checkbox from "../../../../atoms/Checkbox";
import FormControl from "../../FormControl";
export default {
  title: "Vases-UI/molecules/FormControl/CheckboxGroup",
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: `CheckboxGroup 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FormControl>;

export const Default: ComponentStory<typeof FormControl> = (args) => {
  return (
    <div style={{ padding: "50px" }}>
      <FormControl {...args} onChange={(e: any) => console.log(e)}>
        <FormControl.CheckboxGroup>
          <FormControl.CheckboxGroup.Checkbox
            label="Item"
            value="Item"
            componentsProps={{ typography: { variant: "med12" } }}
            control={<Checkbox />}
          />
          <FormControl.CheckboxGroup.Checkbox
            label="Item2"
            value="Item2"
            componentsProps={{ typography: { variant: "med12" } }}
            control={<Checkbox />}
          />
          <FormControl.CheckboxGroup.Checkbox
            label="Item3"
            componentsProps={{ typography: { variant: "med12" } }}
            value="Item3"
            control={<Checkbox />}
          />
        </FormControl.CheckboxGroup>
      </FormControl>
    </div>
  );
};

Default.bind({});
Default.args = {};

export const Indeterminate: ComponentStory<typeof FormControl> = (args) => {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControl {...args} onChange={(e: any) => console.log(e)}>
        <FormControl.CheckboxGroup>
          <FormControl.CheckboxGroup.Checkbox
            label="Child 1"
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <FormControl.CheckboxGroup.Checkbox
            label="Child 2"
            control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          />
        </FormControl.CheckboxGroup>
      </FormControl>
    </Box>
  );

  return (
    <div style={{ padding: "50px", width: "150px" }}>
      <FormControl {...args} onChange={(e: any) => console.log(e)}>
        <FormControl.CheckboxGroup>
          <FormControl.CheckboxGroup.Checkbox
            label="Parent"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
        </FormControl.CheckboxGroup>
      </FormControl>

      {children}
    </div>
  );
};

Indeterminate.bind({});
Indeterminate.args = {};
