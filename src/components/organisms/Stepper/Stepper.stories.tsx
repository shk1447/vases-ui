import Typography from "@mui/material/Typography";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useContext, useState } from "react";
import Button from "../../atoms/Button";
import { grey } from "../../../theme/colors";
import Stepper, { StepperContext } from "./";

export default {
  title: "Vases-UI/organisms/Stepper",
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: `Stepper 입니다.`,
      },
      source: { type: "code" },
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Stepper>;

interface CustomStepProps {
  step: number;
}
const CustomStep = ({ step }: CustomStepProps) => {
  const stepperContext = useContext(StepperContext);
  const [isClear, setIsClear] = useState<boolean>(false);

  return (
    <Stepper.Step>
      <Stepper.Step.Title
        step={step}
        title={
          <>
            <Typography variant="med14">Step {step + 1}</Typography>
            <Typography variant="reg12" color={grey[60]}>
              (Optional)
            </Typography>
          </>
        }
      />
      {stepperContext?.step === step ? (
        <Stepper.Step.Content enableNext={isClear}>
          Hello World{" "}
          <Button
            variant="primary"
            color="vases_success"
            onClick={() => {
              setIsClear(true);
            }}
          >
            Enalbe Next
          </Button>
        </Stepper.Step.Content>
      ) : (
        <></>
      )}
    </Stepper.Step>
  );
};

export const Default: ComponentStory<typeof Stepper> = (args) => {
  return (
    <div
      style={{
        width: "300px",
        position: "absolute",
        top: "50px",
        left: "50px",
        border: "1px solid black",
        backgroundColor: "white",
      }}
    >
      <Stepper>
        <CustomStep step={0} />
        <CustomStep step={1} />
        <CustomStep step={2} />
      </Stepper>
    </div>
  );
};

Default.bind({});
Default.args = {};
