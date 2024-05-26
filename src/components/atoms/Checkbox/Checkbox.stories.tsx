import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";
export default {
  title: "Vases-UI/atoms/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `Checkbox 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <div style={{ width: "100%", padding: "50px" }}>
    <Checkbox {...args} />
  </div>
);
Default.bind({});
Default.args = {
  disabled: false,
};

export const Indeterminated: ComponentStory<typeof Checkbox> = (args) => (
  <div style={{ width: "100%", padding: "50px" }}>
    <Checkbox {...args} indeterminate />
  </div>
);
Indeterminated.bind({});
Indeterminated.args = {
  disabled: false,
};
