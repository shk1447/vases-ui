import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled } from "@mui/material/styles";
import Slider from "..";
import { css } from "@emotion/css";

export default {
  title: "Vases-UI/atoms/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `Slider 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (args) => {
  const [value, setValue] = useState<number>(100);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (newValue >= 0) {
      setValue(newValue as number);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Slider
        value={value}
        valueLabelDisplay="auto"
        onChange={handleChange}
        style={{ width: "50%" }}
        {...args}
      />
    </div>
  );
};
Default.bind({});
Default.args = {
  min: 0,
  max: 200,
  defaultValue: 100,
  valueLabelDisplay: "auto",
  valueLabelFormat: (value: number) => {
    // return value + " %";
    return value;
  },
};

export const RangeSlider: ComponentStory<typeof Slider> = (args) => {
  const [value, setValue] = useState<number[]>([50, 100]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    setValue(newValue as number[]);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Slider
        value={value}
        onChange={handleChange}
        style={{ width: "50%" }}
        {...args}
      />
    </div>
  );
};

RangeSlider.bind({});
RangeSlider.args = {
  min: 0,
  max: 255,
  defaultValue: 100,
  valueLabelDisplay: "auto",
  valueLabelFormat: (value: number) => {
    return value;
  },
};

export const Disabled: ComponentStory<typeof Slider> = (args) => {
  const [value, setValue] = useState<number[]>([50, 100]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    setValue(newValue as number[]);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Slider
        value={value}
        onChange={handleChange}
        style={{ width: "50%" }}
        {...args}
      />
    </div>
  );
};

Disabled.bind({});
Disabled.args = {
  min: 0,
  max: 255,
  disabled: true,
  defaultValue: 100,
  valueLabelDisplay: "auto",
  valueLabelFormat: (value: number) => {
    return value;
  },
};
