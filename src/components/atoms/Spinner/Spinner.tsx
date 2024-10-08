import Backdrop from "@mui/material/Backdrop";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { black, grey, white } from "@vases-ui/theme/colors";
import React from "react";

export type SpinnerProps = {
  open: boolean;
  message?: string;
};

const Spinner = ({ open, message }: SpinnerProps) => {
  return (
    <Backdrop
      sx={{
        color: grey[5],
        zIndex: (theme) => 99999999,
      }}
      open={open}
    >
      <CircularProgress
        variant="determinate"
        sx={{
          color: black,
        }}
        size={32}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        sx={{
          color: white,
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={32}
        thickness={4}
      />
    </Backdrop>
  );
};

export default Spinner;
