import { IconProps } from "../interfaces";
import _SvgIcon from "@mui/material/SvgIcon";
import { styled } from "@mui/material/styles";
import { grey } from "../../../../../theme/colors";

const BottomAreaItemIcon = styled(_SvgIcon)<IconProps>(({ theme }) => ({
  stroke: grey[80],
  fill: grey[80],
  borderRadius: "50%",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(125, 127, 134, 0.1);",
  },
}));

export default BottomAreaItemIcon;
