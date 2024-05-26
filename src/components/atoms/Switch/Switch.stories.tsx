import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from "./Switch";
export default {
  title: "Vases-UI/atoms/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `Switch 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = (args) => (
  <div
    style={{ top: "50px", left: "50px", position: "absolute", width: "300px" }}
  >
    <Switch />
  </div>
);
Default.bind({});
Default.args = {};

export const Disabled: ComponentStory<typeof Switch> = (args) => (
  <div
    style={{ top: "50px", left: "50px", position: "absolute", width: "300px" }}
  >
    <Switch disabled />
  </div>
);
Disabled.bind({});
Disabled.args = {};
