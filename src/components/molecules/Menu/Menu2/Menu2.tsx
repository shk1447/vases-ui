import styled from "@emotion/styled";
import { ListItemText, MenuItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu, { MenuProps } from "@mui/material/Menu";
import { grey } from "@vases-ui/theme/colors";
import { ReactNode } from "react";

const Menu2 = (props: MenuProps) => {
  return (
    <Menu
      PaperProps={{
        sx: {
          background: "#FFFFFF !important",
          border: `1px solid ${grey[40]}`,
          boxShadow: "0px 8px 12px rgba(42, 46, 57, 0.1)",
          borderRadius: "4px",
          transform: "translate(0px, 4px)!important",
        },
        elevation: 0,
      }}
      MenuListProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          padding: "4px 0px",
          gap: "4px",
          maxHeight: 128,
          overflowY: "auto",
          width: "360px",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
      {...props}
    >
      {props.children}
    </Menu>
  );
};

const StyledMenuItem = styled(MenuItem)(({ theme, selected }) => {
  return {
    width: "100%",
    height: "32px",
    padding: "8px 16px",
    gap: "8px",
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage: `${
        selected
          ? `url(
                "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.40951 11.5901L5.99951 13.0001L9.99951 17.0001L17.9995 9.00008L16.5895 7.58008L9.99951 14.1701L7.40951 11.5901Z' fill='%235457D8'/%3E%3C/svg%3E%0A"
              )`
          : ""
      }`,
      content: '""',
      paddingRight: "4px",
      transform: "translate(0, 1px)",
    },
  };
}) as any;

const StyledMenuItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "34px !important",
}));

StyledMenuItem.Text = ListItemText;
StyledMenuItem.Icon = StyledMenuItemIcon;
Menu2.Item = StyledMenuItem;

export default Menu2;
