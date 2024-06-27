import { styled } from '@mui/material/styles';
import _FormHelperText from '@mui/material/FormHelperText';
import { alert, grey } from '../../../../theme/colors';
const StyledHelperText = styled(_FormHelperText)(({ theme, disabled }) => ({
  margin: '2px 0px 0px',
  fontStyle: 'normal', // 12reg
  fontWeight: '400', // 12reg
  fontFamily: 'Noto Sans KR', // 12reg
  fontSize: '12px', // 12reg
  lineHeight: '16px', // 12reg
  color: grey[80],
  '&.Mui-error': {
    color: alert[100],
  },
  '&.Mui-disabled': {
    color: grey[80],
  },
}));

const HelperText = () => {
  return <StyledHelperText />;
};

export default HelperText;
