import { ComponentStory, ComponentMeta } from "@storybook/react";
import Progress from "./Progress";

export default {
  title: "Vases-UI/atoms/Progress(WIP)",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: `Progress 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Progress>;

export const Default: ComponentStory<typeof Progress> = (args) => (
  <div
    style={{ top: "50px", left: "50px", position: "absolute", width: "300px" }}
  >
    <Progress.Linear value={50} variant="determinate" />
  </div>
);
Default.bind({});
Default.args = {};
