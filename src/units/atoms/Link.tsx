import React from "react";
import _Link, { LinkProps as _LinkProps } from "@mui/material/Link";
import { styled } from "@mui/material";

export type LinkProps = _LinkProps & any;

const StyledLink = styled((props: LinkProps) => {
  return <_Link {...props} />;
})(({ theme: _ }) => {
  return {};
});

export const Link = (props: LinkProps) => {
  return <StyledLink {...props} />;
};
