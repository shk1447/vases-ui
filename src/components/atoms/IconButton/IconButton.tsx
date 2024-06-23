import _IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(_IconButton)(({ theme }) => ({}));

const IconButton = ({ size = 'small', ...props }: IconButtonProps) => {
  const styledIconButton = <StyledIconButton size={size} {...props} />;

  return styledIconButton;
};

export default IconButton;
