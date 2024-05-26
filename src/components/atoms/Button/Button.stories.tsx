import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReactComponent as PlusIcon } from "./svg/plus.svg";
export default {
  title: "Vases-UI/atoms/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `Button 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: "100%", padding: "50px" }}>
    <Button {...args} disableElevation>
      Button
    </Button>
  </div>
);
Default.bind({});
Default.args = {
  color: "vases_primary",
  variant: "primary",
  disabled: false,
  size: "default",
};

// export const Icon: ComponentStory<typeof ICONBUTTON> = (args) => (
//   <div style={{ width: "100%", padding: "12px" }}>
//     <ICONBUTTON {...args}>
//       <TrashIcon />
//     </ICONBUTTON>
//   </div>
// );
// Icon.bind({});
// Icon.args = {
//   color: "vases_neutral",
//   disabled: false,
//   size: "default",
// };

export const StartIcon: ComponentStory<typeof Button> = (args) => (
  <div style={{ width: "100%", padding: "50px" }}>
    <Button {...args} startIcon={<PlusIcon />} disableElevation>
      Create Dataset
    </Button>
  </div>
);
StartIcon.bind({});
StartIcon.args = {
  color: "vases_primary",
  variant: "primary",
  disabled: false,
  size: "default",
};
