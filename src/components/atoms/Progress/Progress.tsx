import { styled } from '@mui/material';
import _LinearProgress, {
  LinearProgressProps,
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { primary } from '@vases-ui/theme/colors';
const StyledLinearProgress = styled(_LinearProgress)(({ theme, color }) => ({
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: color == 'primary' ? primary[100] : color,
  },
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
}));

const Progress = () => <></>;

export const LinearProgress = ({ ...props }: LinearProgressProps) => {
  return <StyledLinearProgress {...props} />;
};

Progress.Linear = LinearProgress;
export default Progress;
