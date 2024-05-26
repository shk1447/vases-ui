import { IconProps } from "../interfaces";

import BottomAreaItemIcon from "./Icon";
import { useLocation } from "react-router-dom";

interface BottomAreaItemProps extends IconProps {
  title: string;
}

const BottomAreaItem = ({ component, style, viewBox }: BottomAreaItemProps) => {
  return (
    <BottomAreaItemIcon component={component} style={style} viewBox={viewBox} />
  );
};

export default BottomAreaItem;
