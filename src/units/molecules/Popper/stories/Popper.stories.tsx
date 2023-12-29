import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Popper, usePopTriggerContext } from "..";

import { Button } from "../../../atoms";
import { SketchPicker } from "react-color";



export default {
  title: "VASES-UI/Molecules/Popper",
  component: Popper,
  parameters: {
    docs: {
      description: {
        component: `Popper 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as any;

export const ButtonTrigger: ComponentStory<any> = (args) => {
  return (
    <div style={{ width: "100%" }}>
      <Popper>
        <Popper.Trigger>
          <Button variant="contained">Button</Button>
        </Popper.Trigger>
        <Popper.Menu>
          <SketchPicker></SketchPicker>
        </Popper.Menu>
      </Popper>
    </div>
  );
};

ButtonTrigger.bind({});
ButtonTrigger.args = {};

export const DisabeldButtonTrigger: ComponentStory<any> = (args) => {
  return (
    <Popper>
      <Popper.Trigger>
        <Button disabled variant="contained">
          Button
        </Button>
      </Popper.Trigger>
      <Popper.Menu>
          <SketchPicker></SketchPicker>
        </Popper.Menu>
    </Popper>
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
      
    >
      <Popper>
        <Popper.Trigger>
          <Button variant="contained">Button</Button>
        </Popper.Trigger>
        <Popper.Menu anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} >
        
          <SketchPicker></SketchPicker>
        </Popper.Menu>
      </Popper>
    </div>
  );
};

Placement.bind({});
Placement.args = {
  placement: "bottom",
};
