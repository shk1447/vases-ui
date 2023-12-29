import { styled } from "@mui/material/styles";
import React, { DOMAttributes } from "react";


type MouseEvents = Pick<
  DOMAttributes<HTMLDivElement>,
  "onMouseOver" | "onMouseLeave" | "onMouseDown" | "onMouseUp"
>;

export interface FlexLayoutProps extends MouseEvents {
  direction: "row" | "column";
  gap: number;
  children?: React.ReactNode;
  className?: string;
}
const StyledContainer = styled('div')({display:'flex'})

const StyledSpacer = styled('div')({'flex': 1})


export const FlexLayout = ({ ...props }: FlexLayoutProps) => {
  const { className, gap, direction, children } = props;

  return (
    <StyledContainer
      {...props}
      className={className}
      sx={{flexDirection:direction,gap:`${gap}px`}}
    >
      {children}
    </StyledContainer>
  );
};

export interface SpacerProps {
  className?: string;
}

export const Spacer = (props: SpacerProps) => {
  const { className } = props;
  return <StyledSpacer className={className} />;
};
