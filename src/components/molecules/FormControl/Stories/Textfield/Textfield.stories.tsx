import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormControl from "../../FormControl";
import { ReactComponent as SearchIcon } from "../../Assets/Search.svg";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { grey } from "../../../../../theme/colors";

export default {
  title: "Vases-UI/molecules/FormControl/Textfield",
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: `Textfield 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FormControl>;

export const Default: ComponentStory<typeof FormControl> = (args) => {
  return (
    <div style={{ padding: "50px" }}>
      <FormControl
        {...args}
        onChange={(e: any) => console.log(e)}
        style={{ width: "336px" }}
      >
        <FormControl.Label>
          <Typography variant="med12" sx={{ color: grey[80] }}>
            Label
          </Typography>
          <Typography variant="reg12" sx={{ color: grey[60] }}>
            (Optional)
          </Typography>
        </FormControl.Label>
        <FormControl.TextField
          placeholder="Typing"
          defaultValue="hello vases"
        ></FormControl.TextField>
        <FormControl.HelperText>Helper Text</FormControl.HelperText>
      </FormControl>
    </div>
  );
};
Default.bind({});
Default.args = {};

export const Multiline: ComponentStory<typeof FormControl> = (args) => (
  <div style={{ padding: "50px" }}>
    <FormControl
      {...args}
      onChange={(e: any) => console.log(e)}
      style={{ width: "336px" }}
      required
    >
      <FormControl.Label>
        <Typography variant="med12" sx={{ color: grey[80] }}>
          Label
        </Typography>
      </FormControl.Label>
      <FormControl.TextField
        placeholder="Typing"
        multiline
        rows={3}
        maxRows={3}
      ></FormControl.TextField>
      <FormControl.HelperText>Helper Text</FormControl.HelperText>
    </FormControl>
  </div>
);

Multiline.bind({});
Multiline.args = {};

const CustomSearchFieldIcon = styled(InputAdornment)(({ theme }) => ({
  "& :hover": {
    borderRadius: 4,
    backgroundColor: "rgba(125, 127, 134, 0.1);",
  },
}));
export const SearchBox: ComponentStory<typeof FormControl> = (args) => (
  <div style={{ padding: "50px" }}>
    <FormControl
      {...args}
      onChange={(e: any) => console.log(e)}
      style={{ width: "336px" }}
    >
      <FormControl.TextField
        placeholder="Search by keyword..."
        InputProps={{
          endAdornment: (
            <CustomSearchFieldIcon position="end">
              <SearchIcon />
            </CustomSearchFieldIcon>
          ),
        }}
        style={{
          width: "280px",
        }}
      ></FormControl.TextField>
      <FormControl.HelperText>Helper Text</FormControl.HelperText>
    </FormControl>
  </div>
);

SearchBox.bind({});
SearchBox.args = {};
