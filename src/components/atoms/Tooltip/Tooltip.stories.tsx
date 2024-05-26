import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../Button";
import Tooltip from "./Tooltip";

export default {
  title: "Vases-UI/atoms/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `Tooltip 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof Tooltip> = (args) => (
  <div
    style={{ top: "50px", left: "50px", position: "absolute", width: "300px" }}
  >
    <Tooltip title={"Default"}>
      <Button variant="primary" color="vases_primary">
        {"Tooltip"}
      </Button>
    </Tooltip>
  </div>
);

Default.bind({});
Default.args = {};
