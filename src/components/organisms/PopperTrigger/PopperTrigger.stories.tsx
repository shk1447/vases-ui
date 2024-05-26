import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useRef } from "react";
import Button from "../../atoms/Button";
import PopperTrigger, { usePopTriggerContext } from "./PopperTrigger";

export default {
  title: "Vases-UI/organisms/PopperTrigger",
  component: PopperTrigger,
  parameters: {
    docs: {
      description: {
        component: `Popper Trigger 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as any;

const CustomMenu = () => {
  const popperTriggerContext = usePopTriggerContext();
  const open = Boolean(popperTriggerContext?.anchorEl);
  // popperTriggerContext?.setOpen(open);
  return (
    <Menu
      anchorEl={popperTriggerContext?.anchorEl}
      open={open}
      onClose={() => {
        popperTriggerContext?.setAnchorEl(null);
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
};
export const ButtonTrigger: ComponentStory<any> = (args) => {
  return (
    <div style={{ width: "100%" }}>
      <PopperTrigger>
        <PopperTrigger.Trigger>
          <Button variant="primary">Button</Button>
        </PopperTrigger.Trigger>
        <CustomMenu />
      </PopperTrigger>
    </div>
  );
};

ButtonTrigger.bind({});
ButtonTrigger.args = {};

export const DisabeldButtonTrigger: ComponentStory<any> = (args) => {
  return (
    <PopperTrigger>
      <PopperTrigger.Trigger>
        <Button disabled variant="primary">
          Button
        </Button>
      </PopperTrigger.Trigger>
      <CustomMenu />
    </PopperTrigger>
  );
};

DisabeldButtonTrigger.bind({});
DisabeldButtonTrigger.args = {};

interface PlacementProps {
  placement:
    | "auto-end"
    | "auto-start"
    | "auto"
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}
export const Placement: ComponentStory<any> = (args: PlacementProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: "500px",
        height: "500px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PopperTrigger>
        <PopperTrigger.Trigger>
          <Button variant="primary">Button</Button>
        </PopperTrigger.Trigger>
        <CustomMenu />
      </PopperTrigger>
    </div>
  );
};

Placement.bind({});
Placement.args = {
  placement: "bottom",
};
