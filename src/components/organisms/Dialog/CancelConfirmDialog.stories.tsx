import { ComponentStory, ComponentMeta } from "@storybook/react";
import CancelConfirmDialog from "./CancelConfirmDialog";
import { useCallback, useEffect, useState } from "react";
import Button from "../../atoms/Button";
import { Stack, Typography } from "@mui/material";
import { brand, grey } from "../../../theme/colors";

export default {
  title: "Vases-UI/organisms/Dialog/CancelConfirmDialog",
  component: CancelConfirmDialog,
  parameters: {
    docs: {
      description: {
        component: `Confirm Dialog 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof CancelConfirmDialog>;

const BaseDialog: ComponentStory<typeof CancelConfirmDialog> = (args) => {
  const [open, setOpen] = useState<boolean>(false);
  const [condition, setCondition] = useState<boolean>(false);
  const cb = useCallback(() => {
    console.log("CLOSE!");

    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    // NOTE: setTimeout 조건을 달아두었던 이유? -> 뭔가 Condition의 변화가 있을 때만 confirm dialog를 열기 때문에, 그 조건을 넣었다는 가정
    setTimeout(() => {
      console.log("Change Condition");
      setCondition(true);
    }, 5000);
  }, [open]);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary">
        Open
      </Button>
      <CancelConfirmDialog
        open={open}
        onClose={cb}
        confirmDialogCondition={condition}
      >
        <CancelConfirmDialog.Title>
          <Typography variant="title2" color={brand.navy}>
            Title
          </Typography>
        </CancelConfirmDialog.Title>
        <CancelConfirmDialog.Description>
          <Typography variant="paragraph12" color={grey[100]}>
            description
          </Typography>
        </CancelConfirmDialog.Description>
        <CancelConfirmDialog.Body>Body</CancelConfirmDialog.Body>
        <CancelConfirmDialog.Buttons>
          <Stack gap="16px" direction="row-reverse">
            <Button variant="primary">Action</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Stack>
        </CancelConfirmDialog.Buttons>
      </CancelConfirmDialog>
    </>
  );
};

export const Base = BaseDialog.bind({});
Base.args = {};
