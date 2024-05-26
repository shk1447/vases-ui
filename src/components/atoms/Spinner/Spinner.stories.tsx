import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./Spinner";

export default {
  title: "Vases-UI/atoms/Spinner",
  compoenent: Spinner,
  parameters: {
    docs: {
      description: {
        component: "Spinner 입니다",
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = (args) => (
  <Spinner open={true} />
);

Default.bind({});
Default.args = {};
