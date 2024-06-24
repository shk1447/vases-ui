import { styled } from '@mui/material';

import _BottomNavigation, {
  BottomNavigationProps as _BottomNavigationProps,
} from '@mui/material/BottomNavigation';
import _BottomNavigationAction, {
  BottomNavigationActionProps as _BottomNavigationActionProps,
} from '@mui/material/BottomNavigationAction';

export interface BottomNavigationProps extends _BottomNavigationProps {}
export interface BottomNavigationActionProps
  extends _BottomNavigationActionProps {}

const StyledBottomNavigation = styled(({ ...props }: BottomNavigationProps) => (
  <_BottomNavigation {...props} />
))(({ theme: _ }) => {
  return {};
});

const StyledBottomNavigationAction = styled(
  ({ ...props }: BottomNavigationActionProps) => (
    <_BottomNavigationAction {...props} />
  ),
)(({ theme: _ }) => {
  return {};
});

export const BottomNavigation = ({ ...props }: BottomNavigationProps) => {
  const styled = <StyledBottomNavigation {...props} />;

  return styled;
};

export const BottomNavigationAction = ({
  ...props
}: BottomNavigationActionProps) => {
  const styled = <StyledBottomNavigationAction {...props} />;

  return styled;
};
