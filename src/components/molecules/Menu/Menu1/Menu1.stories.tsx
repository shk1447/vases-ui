import { Button, Typography } from "@vases-ui/components/atoms";
import PopperTrigger, {
  usePopTriggerContext,
} from "@vases-ui/components/organisms/PopperTrigger";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Menu1 from "./Menu1";

export default {
  title: "Vases-UI/molecules/Menu/Menu1",
  component: Menu1,
  parameters: {
    docs: {
      description: {
        component: `Menu1 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Menu1>;

const Menu = () => {
  const popperTriggerContext = usePopTriggerContext();
  const open = Boolean(popperTriggerContext?.anchorEl);
  console.log(open);

  return (
    <Menu1
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
      <Menu1.Item>
        <Typography variant="med14">Item1</Typography>
      </Menu1.Item>
      <Menu1.Item>
        <Typography variant="med14">Item2</Typography>
      </Menu1.Item>
      <Menu1.Item>
        <Typography variant="med14">Item3</Typography>
      </Menu1.Item>
    </Menu1>
  );
};
export const Default: ComponentStory<typeof Menu1> = (...args) => {
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
