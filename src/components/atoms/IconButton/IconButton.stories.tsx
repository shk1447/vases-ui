import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "./IconButton";
import { ReactComponent as ZoomInIcon } from "./svg/zoomIn.svg";
export default {
  title: "Vases-UI/atoms/IconButton",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: `Button 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof IconButton>;

export const Default: ComponentStory<typeof IconButton> = (args) => (
  <div style={{ width: "100%", padding: "12px" }}>
    <IconButton {...args}>
      <ZoomInIcon />
    </IconButton>
  </div>
);
Default.bind({});
Default.args = {
  disabled: false,
};
