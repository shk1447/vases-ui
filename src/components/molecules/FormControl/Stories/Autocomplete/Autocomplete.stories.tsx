import Box from "@mui/material/Box";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Checkbox from "../../../../atoms/Checkbox";
import Autocomplete, { OptionProps } from "../../Component/Autocomplete";
import FormControl from "../../FormControl";
export default {
  title: "Vases-UI/molecules/FormControl/AutoComplete",
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component: `AutoComplete 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FormControl>;

export const Default: ComponentStory<typeof FormControl> = (args) => {
  const top100Films: OptionProps[] = [
    { title: "No Selection", value: "No Selection" },
    { title: "The Shawshank Redemption", value: "The Shawshank Redemption" },
    { title: "The Godfather", value: "The Godfather" },
    { title: "The Godfather: Part II", value: "The Godfather: Part II" },
    { title: "The Dark Knight", value: "The Dark Knight" },
    { title: "12 Angry Men", value: "N12 Angry Men" },
  ];

  const [films, setFilms] = useState<OptionProps[]>(top100Films);
  const [value] = useState<OptionProps>(top100Films[0]);

  const OptionsAdd = (value: any) => {
    setFilms([...films, { ...value }]);
  };

  return (
    <div style={{ padding: "50px" }}>
      <FormControl {...args} style={{ width: "336px" }}>
        <FormControl.AutoComplete
          selectedItem={value}
          onAddItem={OptionsAdd}
          options={films}
        />
      </FormControl>
    </div>
  );
};

Default.bind({});
Default.args = {};
