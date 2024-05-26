import DataGrid, { SortColumn } from "../";
import { useMemo, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DataGridGrouping from "./Grouping";
import DataGridAllFeatures from "./AllFeatures";
import DataGridTreeView from "./TreeView";
import DataGridCustomGrouping from "./CustomGrouping";
import { SelectColumn } from "@vases-ui/components/organisms/DataGrid/Extensions/Columns";
import DataGridCommonFeatures from "./CommonFeatures";

export default {
  title: "Vases-UI/organisms/DataGrid",
  component: DataGrid,
  parameters: {
    docs: {
      description: {
        component: `DataGrid 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DataGrid>;

export const CommonFeatures = () => {
  return <DataGridCommonFeatures />;
};

export const AllFeatures: ComponentStory<typeof DataGrid> = (args) => (
  <DataGridAllFeatures />
);
AllFeatures.bind({});

AllFeatures.args = {};

export const TreeView: ComponentStory<typeof DataGrid> = (args) => (
  <DataGridTreeView />
);
TreeView.bind({});

TreeView.args = {};

export const DefaultGrouping: ComponentStory<typeof DataGrid> = (args) => (
  <DataGridGrouping />
);
DefaultGrouping.bind({});

DefaultGrouping.args = {};

export const CustomGrouping: ComponentStory<typeof DataGrid> = (args) => (
  <DataGridCustomGrouping />
);
CustomGrouping.bind({});

CustomGrouping.args = {};
