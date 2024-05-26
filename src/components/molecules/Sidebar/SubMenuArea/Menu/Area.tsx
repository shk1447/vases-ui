import { Stack } from "@mui/material";
import { ReactNode } from "react";
import SubMenuItem from "./Item";

interface MenuAreaProps {
  children: ReactNode;
}
const SubMenu = ({ children }: MenuAreaProps) => {
  return (
    <Stack
      direction="column"
      style={{ boxSizing: "border-box", width: "100%" }}
    >
      {children}
    </Stack>
  );
};
SubMenu.Item = SubMenuItem;
export default SubMenu;
