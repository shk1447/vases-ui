import { Button, Typography } from "@vases-ui/components/atoms";
import PopperTrigger, {
  usePopTriggerContext,
} from "@vases-ui/components/organisms/PopperTrigger";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu2 from "./Menu2";
import { ReactComponent as SampleIcon } from "../Assets/Sample.svg";

export default {
  title: "Vases-UI/molecules/Menu/Menu2",
  component: Menu2,
  parameters: {
    docs: {
      description: {
        component: `Menu1 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Menu2>;

const Menu = () => {
  const popperTriggerContext = usePopTriggerContext();
  const open = Boolean(popperTriggerContext?.anchorEl);
  console.log(open);

  return (
    <Menu2
      open={open}
      anchorEl={popperTriggerContext?.anchorEl}
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
    >
      <Menu2.Item selected>
        <Menu2.Item.Text
          primary={
            <div style={{ display: "flex" }}>
              <SampleIcon />
              <Typography variant="med14">Item1</Typography>
            </div>
          }
        ></Menu2.Item.Text>
      </Menu2.Item>
      <Menu2.Item>
        <Menu2.Item.Text
          primary={
            <div style={{ display: "flex" }}>
              <SampleIcon />
              <Typography variant="med14">Item2</Typography>
            </div>
          }
        ></Menu2.Item.Text>{" "}
      </Menu2.Item>
      <Menu2.Item>
        <Menu2.Item.Text
          primary={
            <div style={{ display: "flex" }}>
              <SampleIcon />
              <Typography variant="med14">Item3</Typography>
            </div>
          }
        ></Menu2.Item.Text>{" "}
      </Menu2.Item>
    </Menu2>
  );
};
export const Default: ComponentStory<typeof Menu2> = (...args) => {
  return (
    <div style={{ width: "100%", padding: "50px" }}>
      <PopperTrigger>
        <PopperTrigger.Trigger>
          <Button variant="primary">Button</Button>
        </PopperTrigger.Trigger>
        <Menu />
      </PopperTrigger>
    </div>
  );
};
Default.bind({});
Default.args = {};
