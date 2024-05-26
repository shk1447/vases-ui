import { Menu, MenuItem, styled } from "@mui/material";
import { MenuProps } from "@mui/material/Menu/Menu";
import { grey, state } from "@vases-ui/theme/colors";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    boxShadow: "0px 8px 12px rgba(42, 46, 57, 0.1)",
    borderRadius: 4,
    border: `1px solid ${grey[40]}`,
    minWidth: "160px",
    padding: "4px 0px",
    marginTop: "2px",
  },
}));

const Menu1Item = styled(MenuItem)(({ theme }) => ({
  minHeight: "36px",
  padding: "8px 12px",
}));

const Menu1 = (props: MenuProps) => (
  <StyledMenu
    {...props}
    MenuListProps={{
      sx: {
        fontFamily: "Noto Sans KR",
        fontSize: "14px",
        lineHeight: "20px",
        fontStyle: "normal",
        paddingTop: "0px !important",
        paddingBottom: "0px  !important",
        "& .MuiMenuItem-root:hover": {
          backgroundColor: state["hovered"],
        },
      },
    }}
  />
);
Menu1.Item = Menu1Item;
export default Menu1;
