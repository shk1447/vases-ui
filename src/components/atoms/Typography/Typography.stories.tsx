import { Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Vases-UI/atoms/Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: `Button 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = () => (
  <div
    style={{
      width: "100%",
      padding: "50px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="title1">Title 1</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="title2">Title 2</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="reg12">12 Reg</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="med12">12 Med</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="bol12">12 Bol</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="paragraph12">12 Paragraph</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="reg14">14 Reg</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="med14">14 Med</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="bol14">14 Bol</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="paragraph14">14 Paragraph</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="reg16">16 Reg</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="med16">16 Med</Typography>
    </div>
    <div style={{ padding: "5px 0px" }}>
      <Typography variant="bol16">16 Bol</Typography>
    </div>
  </div>
);
Default.args = {};
