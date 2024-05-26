import { Stack } from "@mui/material";
import { Typography } from "@vases-ui/components/atoms";
import { grey } from "@vases-ui/theme/colors";
import React, { ReactNode } from "react";
import { ReactComponent as WarningLargeIcon } from "../../../../assets/WarningLarge.svg";

const NoImage = ({ children }: { children?: ReactNode }) => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"8px"}
      style={{
        top: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      <WarningLargeIcon />
      <Typography variant="reg12" color={grey[60]}>
        File cannot be found
      </Typography>
      {children}
    </Stack>
  );
};

export default NoImage;
