import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormControl from "../../FormControl";
export default {
  title: "Vases-UI/molecules/FormControl/ColorPciker",
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: `ColorPicker 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FormControl>;

export const Default: ComponentStory<typeof FormControl> = (args) => {
  return (
    <div style={{ padding: "50px" }}>
      <FormControl style={{ width: "336px" }}>
        <FormControl.ColorPicker hex={"#000000"} onChange={() => {}} />
      </FormControl>
    </div>
  );
};

Default.bind({});
Default.args = {};
