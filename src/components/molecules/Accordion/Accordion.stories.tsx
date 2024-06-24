import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as PlusIcon } from './svg/plus.svg';
import { Accordion, AccordionDetails, AccordionSummary } from '.';
import { Typography } from '@vases-ui/components/atoms';
export default {
  title: 'Vases-UI/molecules/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `Accordion 입니다.`,
      },
      source: { type: 'code' },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Accordion>;

export const Default: ComponentStory<typeof Accordion> = args => (
  <div style={{ padding: '50px' }}>
    <Accordion expanded={true}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography variant="title2">Collapsible Group Item #1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={false}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography variant="title2">Collapsible Group Item #2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
);
Default.bind({});
Default.args = {};
