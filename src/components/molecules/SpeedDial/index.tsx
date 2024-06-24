import { styled } from '@mui/material';
import _SpeedDial, {
  SpeedDialProps as _SpeedDialProps,
} from '@mui/material/SpeedDial';
import _SpeedDialIcon, {
  SpeedDialIconProps as _SpeedDialIconProps,
} from '@mui/material/SpeedDialIcon';
import _SpeedDialAction, {
  SpeedDialActionProps as _SpeedDialActionProps,
} from '@mui/material/SpeedDialAction';
import { Children } from 'react';

export interface SpeedDialProps extends _SpeedDialProps {}
export interface SpeedDialIconProps extends _SpeedDialIconProps {}
export interface SpeedDialActionProps extends _SpeedDialActionProps {}

const StyledSpeedDial = styled(({ ...props }: SpeedDialProps) => (
  <_SpeedDial {...props} />
))(({ theme: _ }) => {
  return {};
});

const StyledSpeedDialIcon = styled(({ ...props }: SpeedDialIconProps) => (
  <_SpeedDialIcon {...props} />
))(({ theme: _ }) => {
  return {};
});

const StyledSpeedDialAction = styled(({ ...props }: SpeedDialActionProps) => (
  <_SpeedDialAction {...props} />
))(({ theme: _ }) => {
  return {};
});

export const SpeedDial = (props: SpeedDialProps) => {
  const styled = (
    <StyledSpeedDial {...props}>
      {Children.toArray(props.children)}
    </StyledSpeedDial>
  );
  return styled;
};

export const SpeedDialIcon = (props: SpeedDialIconProps) => {
  const styled = <StyledSpeedDialIcon {...props} />;
  return styled;
};

export const SpeedDialAction = (props: SpeedDialActionProps) => {
  const styled = <StyledSpeedDialAction {...props} />;
  return styled;
};
