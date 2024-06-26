import { Box, Stack } from '@mui/material';
import MUIDialog, { DialogProps } from '@mui/material/Dialog';
import React from 'react';
import { ReactNode } from 'react';

interface CustomDialogProps extends DialogProps {
  children: ReactNode;
  open: boolean;
}
const Dialog = (props: CustomDialogProps): JSX.Element => {
  const { children, open } = props;

  return (
    <MUIDialog {...props} open={open}>
      <Box sx={{ padding: '32px', height: '100%', overflow: 'hidden' }}>
        <Stack gap="16px" sx={{ flex: 1, height: '100%', overflow: 'hidden' }}>
          {React.Children.toArray(children).filter(
            (d: any) =>
              d.type.name === Dialog.Body.name ||
              d.type.name === Dialog.Description.name ||
              d.type.name === Dialog.Title.name,
          )}
          <div>
            {React.Children.toArray(children).filter(
              (d: any) => d.type.name === Dialog.Buttons.name,
            )}
          </div>
        </Stack>
      </Box>
    </MUIDialog>
  );
};

interface AreaProps {
  children: ReactNode;
}

const Title = ({ children }: AreaProps) => <div>{children}</div>;
Title.displayName = 'Title';
Dialog.Title = Title;

const Description = ({ children }: AreaProps) => <div>{children}</div>;
Description.displayName = 'Description';
Dialog.Description = Description;

const Body = ({ children }: AreaProps) => (
  <div style={{ overflow: 'auto', height: '100%', flex: 1 }}>{children}</div>
);
Body.displayName = 'Body';
Dialog.Body = Body;

const Buttons = ({ children }: AreaProps) => <>{children}</>;
Buttons.displayName = 'Buttons';
Dialog.Buttons = Buttons;

export default Dialog;
