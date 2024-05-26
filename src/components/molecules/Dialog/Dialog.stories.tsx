import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dialog from "./Dialog";
import { useState } from "react";
import Button from "../../atoms/Button";
import { Stack, Typography } from "@mui/material";
import { brand, grey } from "../../../theme/colors";

export default {
  title: "Vases-UI/molecules/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: `Dialog 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Dialog>;

const BaseDialog: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary">
        Open
      </Button>
      <Dialog open={open}>
        <Dialog.Title>
          <Typography variant="title2" color={brand.navy}>
            Title
          </Typography>
        </Dialog.Title>
        <Dialog.Description>
          <Typography variant="paragraph12" color={grey[100]}>
            description
          </Typography>
        </Dialog.Description>
        <Dialog.Body>Body</Dialog.Body>
        <Dialog.Buttons>
          <Stack gap="16px" direction="row-reverse">
            <Button variant="primary">Action</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Stack>
        </Dialog.Buttons>
      </Dialog>
    </>
  );
};

export const Base = BaseDialog.bind({});
Base.args = {};

// const LongTextDialog: ComponentStory<typeof Dialog> = (args) => {
//   const [open, setOpen] = useState<boolean>(false);
//   return (
//     <>
//       <Button onClick={() => setOpen(true)} variant="primary">
//         Open
//       </Button>
//       <Dialog open={open}>
//         <Dialog.Container>
//           <Dialog.Container.Title>
//             <Typography variant="title2" color={brand.navy}>
//               From its medieval origins to the digital era, learn everything
//               there is to know about the ubiquitous lorem ipsum passage.
//             </Typography>
//           </Dialog.Container.Title>
//           <Dialog.Container.Description>
//             description
//           </Dialog.Container.Description>
//           <Dialog.Container.Body>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//             ea commodo consequat. Duis aute irure dolor in reprehenderit in
//             voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//             officia deserunt mollit anim id est laborum.
//           </Dialog.Container.Body>
//           <Dialog.Container.Buttons>
//             <Stack gap="16px" direction="row-reverse">
//               <Button variant="primary">Action</Button>
//               <Button variant="primary" onClick={() => setOpen(false)}>
//                 Cancel
//               </Button>
//             </Stack>
//           </Dialog.Container.Buttons>
//         </Dialog.Container>
//       </Dialog>
//     </>
//   );
// };

// export const LongText = LongTextDialog.bind({});
// LongText.args = {};

// const FormDialog: ComponentStory<typeof Dialog> = (args) => {
//   const [open, setOpen] = useState<boolean>(false);
//   return (
//     <>
//       <Button onClick={() => setOpen(true)} variant="primary">
//         Open
//       </Button>
//       <Dialog open={open}>
//         <Dialog.Container>
//           <Dialog.Container.Title>
//             <Typography variant="title2" color={brand.navy}>
//               Create Dataset
//             </Typography>
//           </Dialog.Container.Title>
//           <Dialog.Container.Body>
//             <form>
//               <Stack gap="24px">
//                 <Stack gap="8px" style={{ width: "100%" }}>
//                   <FormControl>
//                     <FormControl.Label>Dataset Name</FormControl.Label>
//                     <FormControl.TextField placeholder="Typing"></FormControl.TextField>
//                   </FormControl>
//                 </Stack>
//                 <Stack gap="8px">
//                   <FormControl>
//                     <FormControl.Label>Description</FormControl.Label>
//                     <FormControl.TextField
//                       placeholder="What is Dataset about"
//                       multiline
//                       rows={3}
//                       maxRows={3}
//                     ></FormControl.TextField>
//                   </FormControl>
//                 </Stack>
//               </Stack>
//             </form>
//           </Dialog.Container.Body>
//           <Dialog.Container.Buttons>
//             <Stack gap="16px" direction="row-reverse">
//               <Button variant="primary">Action</Button>
//               <Button variant="primary" onClick={() => setOpen(false)}>
//                 Cancel
//               </Button>
//             </Stack>
//           </Dialog.Container.Buttons>
//         </Dialog.Container>
//       </Dialog>
//     </>
//   );
// };
// export const WithForm = FormDialog.bind({});
// WithForm.args = {};

// const AlertButtonDialog: ComponentStory<typeof Dialog> = (args) => {
//   const [open, setOpen] = useState<boolean>(false);
//   return (
//     <>
//       <Button onClick={() => setOpen(true)} variant="primary">
//         Open
//       </Button>
//       <Dialog open={open}>
//         <Dialog.Container>
//           <Dialog.Container.Title>
//             <Typography variant="title2" color={brand.navy}>
//               Title
//             </Typography>
//           </Dialog.Container.Title>
//           <Dialog.Container.Description>
//             Description
//           </Dialog.Container.Description>
//           <Dialog.Container.Body>Body</Dialog.Container.Body>

//           <Dialog.Container.Buttons>
//             <Stack gap="16px" direction="row-reverse">
//               <Button variant="primary">Action</Button>
//               <Button
//                 variant="primary"
//                 color="vases_alert"
//                 onClick={() => setOpen(false)}
//               >
//                 Cancel
//               </Button>
//             </Stack>
//           </Dialog.Container.Buttons>
//         </Dialog.Container>
//       </Dialog>
//     </>
//   );
// };

// export const AlertButton = AlertButtonDialog.bind({});
// AlertButton.args = {};
