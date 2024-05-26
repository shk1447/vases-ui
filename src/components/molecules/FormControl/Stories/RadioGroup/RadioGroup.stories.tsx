import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import FormControl from "../../FormControl";
export default {
  title: "Vases-UI/molecules/FormControl/RadioGroup",
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: `RadioGroup 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FormControl>;

export const Default: ComponentStory<typeof FormControl> = (args) => {
  const [value, setValue] = useState("Item");
  return (
    <div style={{ padding: "50px" }}>
      <FormControl {...args}>
        <FormControl.RadioGroup
          row
          onChange={(e: any) => {
            setValue(e.target.value);
            console.log(e);
          }}
          value={value}
        >
          <FormControl.RadioGroup.Radio
            label="Item"
            value="Item"
            componentsProps={{ typography: { variant: "med12" } }}
          />
          <FormControl.RadioGroup.Radio
            label="Item2"
            value="Item2"
            componentsProps={{ typography: { variant: "med12" } }}
          />
          <FormControl.RadioGroup.Radio
            label="Item3"
            value="Item3"
            componentsProps={{ typography: { variant: "med14" } }}
          />
        </FormControl.RadioGroup>
      </FormControl>
    </div>
  );
};

Default.bind({});
Default.args = {};
