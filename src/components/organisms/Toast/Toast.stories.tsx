import { Box, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Button from '../../atoms/Button';
import { ReactComponent as CloseIcon } from './Assets/Close.svg';
import Toast from './Toast';

export default {
  title: 'Vases-UI/organisms/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `Dialog 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Toast>;

export const Default: ComponentStory<any> = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Button variant="primary" onClick={handleClick}>
        Open Toast
      </Button>
      <Toast
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Toast.Content
          severity="error"
          message={
            <>
              <Stack direction="column" gap="4px" width="auto">
                <Typography variant="bol12">Error</Typography>
                <Typography variant="med12">Message</Typography>
              </Stack>
            </>
          }
          action={
            <Box
              sx={{
                padding: '4px',
                cursor: 'pointer',
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </Box>
          }
        />
      </Toast>
    </>
  );
};
Default.bind({});
Default.args = {};
