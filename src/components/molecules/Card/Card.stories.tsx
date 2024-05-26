import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReactComponent as SampleIcon } from "./Assets/Sample.svg";
import { ReactComponent as EllipsisIcon } from "./Assets/Ellipsis.svg";
import PopTrigger, {
  usePopTriggerContext,
} from "../../organisms/PopperTrigger";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { alert, grey, state } from "../../../theme/colors";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Card from "./Card";
import IconButton from "@vases-ui/components/atoms/IconButton";

export default {
  title: "Vases-UI/molecules/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `Card 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Card>;

/**
 * 아래 코드는 예제 입니다.
 * 제품 코드에 포함되는 코드가 아닙니다.
 */
const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    boxShadow: "0px 8px 12px rgba(42, 46, 57, 0.1)",
    borderRadius: 4,
    border: `1px solid ${grey[40]}`,
    width: "160px",
    padding: "4px 0px",
  },
}));
const CustomMenu = () => {
  const popperTriggerContext = usePopTriggerContext();
  const open = Boolean(popperTriggerContext?.anchorEl);
  return (
    <StyledMenu
      anchorEl={popperTriggerContext?.anchorEl}
      open={open}
      onClose={() => {
        popperTriggerContext?.setAnchorEl(null);
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
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
    >
      <MenuItem
        style={{
          fontFamily: "Noto Sans KR",
          fontSize: "14px",
          lineHeight: "20px",
          fontStyle: "normal",
          fontWeight: 500,
          minHeight: "36px",
          padding: "8px 12px",
        }}
      >
        Duplicate
      </MenuItem>
      <MenuItem
        style={{
          fontFamily: "Noto Sans KR",
          fontSize: "14px",
          lineHeight: "20px",
          fontStyle: "normal",
          fontWeight: 500,
          minHeight: "36px",
          padding: "8px 12px",
        }}
      >
        Edit
      </MenuItem>
      <MenuItem
        style={{
          color: alert[100],
          fontFamily: "Noto Sans KR",
          fontSize: "14px",
          lineHeight: "20px",
          fontStyle: "normal",
          fontWeight: 500,
          minHeight: "36px",
          padding: "8px 12px",
        }}
      >
        Delete
      </MenuItem>
    </StyledMenu>
  );
};
/**
 * 예제 코드 끝
 */

export const Default: ComponentStory<typeof Card> = ({ onChange, ...args }) => {
  return (
    <div style={{ width: "100%", padding: "50px" }}>
      <Card
        style={{ width: "312px" }}
        {...args}
        onChange={(e: any) => console.log(e)}
      >
        <Card.Header
          avatar={<SampleIcon />}
          title={<Typography variant="med16">Shrimp</Typography>}
          action={
            <PopTrigger>
              <PopTrigger.Trigger>
                <IconButton aria-label="settings">
                  <EllipsisIcon />
                </IconButton>
              </PopTrigger.Trigger>
              <CustomMenu />
            </PopTrigger>
          }
        />
        <Card.Content>
          <Typography
            variant="med12"
            sx={{
              color: grey[100],
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Typography>
        </Card.Content>
        <Card.Footer>
          <Typography variant="med12" paragraph sx={{ color: grey[60] }}>
            Footer Text
          </Typography>
        </Card.Footer>
      </Card>
    </div>
  );
};
Default.bind({});
Default.args = {};

export const EmptyContent: ComponentStory<typeof Card> = ({
  onChange,
  ...args
}) => {
  return (
    <div style={{ width: "100%", padding: "50px" }}>
      <Card
        style={{ width: "312px" }}
        {...args}
        onChange={(e: any) => console.log(e)}
      >
        <Card.Header
          avatar={<SampleIcon />}
          title={
            <Typography variant="med16">Shrimp and Chorizo Paella</Typography>
          }
          action={
            <PopTrigger>
              <PopTrigger.Trigger>
                <IconButton aria-label="settings">
                  <EllipsisIcon />
                </IconButton>
              </PopTrigger.Trigger>
              <CustomMenu />
            </PopTrigger>
          }
        />
        <Card.Content></Card.Content>
        <Card.Footer>
          <Typography variant="med12" paragraph sx={{ color: grey[60] }}>
            Footer Text
          </Typography>
        </Card.Footer>
      </Card>
    </div>
  );
};
EmptyContent.bind({});
EmptyContent.args = {};
