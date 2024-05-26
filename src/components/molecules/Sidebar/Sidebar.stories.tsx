import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ReactComponent as LogoIcon } from "./Assets/logo.svg";
import { ReactComponent as DatasetIcon } from "./Assets/dataset.svg";
import { ReactComponent as ProjectIcon } from "./Assets/project.svg";
import { ReactComponent as SettingsIcon } from "./Assets/settings.svg";
import { ReactComponent as MonitoringIcon } from "./Assets/monitoring.svg";
import { ReactComponent as UserIcon } from "./Assets/user.svg";
import { ReactComponent as NotificationIcon } from "./Assets/notification.svg";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Link from "@mui/material/Link";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default {
  title: "Vases-UI/molecules/Sidebar",
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component: `Navigation 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Sidebar>;

export const Default: ComponentStory<typeof Sidebar> = (args) => {
  const [path, setPath] = useState<string>("");

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <Sidebar>
        <Sidebar.MenuArea>
          <Sidebar.MenuArea.Logo
            component={LogoIcon}
            style={{ width: "48px", height: "48px" }}
            viewBox="0 0 48 48"
          />
          <Sidebar.MenuArea.MainArea>
            <Link
              component={RouterLink}
              to="/dataset"
              onClick={() => {
                setPath("dataset");
              }}
            >
              <Sidebar.MenuArea.MainArea.Item
                selected={path === "dataset"}
                component={DatasetIcon}
                title="Dataset"
                defaultActivate
                style={{ width: "48px", height: "48px" }}
                viewBox="0 0 48 48"
                path="/dataset"
              />
            </Link>
            <Link
              component={RouterLink}
              to="/projects"
              onClick={() => setPath("projects")}
            >
              <Sidebar.MenuArea.MainArea.Item
                component={ProjectIcon}
                selected={path === "projects"}
                title="Projects"
                style={{ width: "48px", height: "48px" }}
                viewBox="0 0 48 48"
                path="/projects"
              />
            </Link>
            <Link
              component={RouterLink}
              to="/monitoring"
              onClick={() => setPath("monitoring")}
            >
              <Sidebar.MenuArea.MainArea.Item
                component={MonitoringIcon}
                selected={path === "monitoring"}
                title="Monitoring"
                style={{ width: "48px", height: "48px" }}
                viewBox="0 0 48 48"
                path="/monitoring"
              />
            </Link>
            <Link
              component={RouterLink}
              to="/settings"
              onClick={() => setPath("settings")}
            >
              <Sidebar.MenuArea.MainArea.Item
                selected={path === "settings"}
                component={SettingsIcon}
                title="Settings"
                style={{ width: "48px", height: "48px" }}
                viewBox="0 0 48 48"
                path="/settings"
              />
            </Link>
          </Sidebar.MenuArea.MainArea>
          <Sidebar.MenuArea.BottomArea>
            <Link component={RouterLink} to="/notification">
              <Sidebar.MenuArea.BottomArea.Item
                component={NotificationIcon}
                title="Notification"
                style={{ width: "40px", height: "40px" }}
                viewBox="0 0 40 40"
              />
            </Link>
            <Link component={RouterLink} to="/user">
              <Sidebar.MenuArea.BottomArea.Item
                component={UserIcon}
                title="User"
                style={{ width: "40px", height: "40px" }}
                viewBox="0 0 40 40"
              />
            </Link>
          </Sidebar.MenuArea.BottomArea>
        </Sidebar.MenuArea>
        <Sidebar.SubMenuArea parentSelected={path === "projects"}>
          <Sidebar.SubMenuArea.TitleArea>
            Projects
          </Sidebar.SubMenuArea.TitleArea>
          <Sidebar.SubMenuArea.MenuArea>
            <Link
              component={RouterLink}
              to="/projects/database"
              underline="none"
            >
              <Sidebar.SubMenuArea.MenuArea.Item
                selected={true}
                title="Database"
              />
            </Link>
            <Link component={RouterLink} to="/projects/train" underline="none">
              <Sidebar.SubMenuArea.MenuArea.Item
                selected={false}
                title="Training Parameter Settings"
              />
            </Link>
            <Link component={RouterLink} to="/projects/model" underline="none">
              <Sidebar.SubMenuArea.MenuArea.Item
                selected={false}
                title="Models"
              />
            </Link>
          </Sidebar.SubMenuArea.MenuArea>
        </Sidebar.SubMenuArea>
        {/* <Navigation.SubMenuArea parent="Projects">
            <Navigation.SubMenuArea.TitleArea>
              Projects
            </Navigation.SubMenuArea.TitleArea>
            <Navigation.SubMenuArea.MenuArea>
              <Link component={RouterLink} to="/projects/database" underline="none">
                <Navigation.SubMenuArea.MenuArea.Item title="Database" />
              </Link>
              <Link component={RouterLink} to="/projects/train" underline="none">
                <Navigation.SubMenuArea.MenuArea.Item title="Training Parameter Settings" />
              </Link>
              <Link component={RouterLink} to="/projects/model" underline="none">
                <Navigation.SubMenuArea.MenuArea.Item title="Models" />
              </Link>
            </Navigation.SubMenuArea.MenuArea>
          </Navigation.SubMenuArea>
          <Navigation.SubMenuArea parent="Dataset">
            <Navigation.SubMenuArea.TitleArea>
              Dataset
            </Navigation.SubMenuArea.TitleArea>
            <Navigation.SubMenuArea.MenuArea>
              <Link component={RouterLink} to="/projects/database" underline="none">
                <Navigation.SubMenuArea.MenuArea.Item title="Database" />
              </Link>
            </Navigation.SubMenuArea.MenuArea>
          </Navigation.SubMenuArea> */}
      </Sidebar>
      <div>Contents</div>
    </div>
  );
};

Default.bind({});
Default.args = {};
