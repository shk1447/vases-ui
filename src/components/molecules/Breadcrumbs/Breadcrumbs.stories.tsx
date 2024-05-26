import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled } from "@mui/material/styles";
import Breadcrumbs from "./Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { grey } from "../../../theme/colors";

export default {
  title: "Vases-UI/molecules/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component: `Breadcrumbs 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Breadcrumbs>;

const CustomLink = styled(Link)(({ theme }) => ({
  "&: hover": {
    opacity: 0.7,
  },
}));
export const Base: ComponentStory<typeof Breadcrumbs> = (args) => (
  <div style={{ width: "100%", padding: "50px" }}>
    <Breadcrumbs {...args}>
      <CustomLink href="https://www.naver.com" underline="none">
        <Typography variant="reg12" sx={{ color: grey[100] }}>
          Daum
        </Typography>
      </CustomLink>
      <CustomLink href="https://www.naver.com" underline="none">
        <Typography variant="reg12" sx={{ color: grey[100] }}>
          Google
        </Typography>
      </CustomLink>
      <Typography variant="med12" sx={{ color: grey[80] }}>
        Current
      </Typography>
    </Breadcrumbs>
  </div>
);
Base.bind({});
Base.args = {
  separator: "/",
};
