import { IconProps } from "../interfaces";
import { useState, useEffect } from "react";
import MainAreaItemIcon from "./Icon";
import { Tooltip } from "@vases-ui/components/atoms";
import { Box } from "@mui/material";

interface MainAreaItemProps extends IconProps {
  title: string;
  defaultActivate?: boolean;
  path: string;
  selected?: boolean;
}
const MainAreaItem = ({
  component,
  title,
  defaultActivate,
  style,
  viewBox,
  selected,
}: MainAreaItemProps) => {
  const [isItialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (isItialized) return;
    setIsInitialized(true);
  }, [isItialized, defaultActivate, title]);

  return (
    <MainAreaItemIcon
      component={component}
      style={style}
      viewBox={viewBox}
      data-activated={selected ? "true" : "false"}
    />
  );
};
export default MainAreaItem;
