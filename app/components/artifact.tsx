import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {Divider} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import React from "react";

export default function Artifact({
  title,
  stack,
  children
}: {
  title?: string;
  stack?: string;
  children?: React.ReactNode
}) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography variant='h6' component="h6">{ title }</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='caption' component='p' color='gray'>Tech Stack: { stack }</Typography>
        <Divider />
        <Typography variant='body1' component='p'>
          { children }
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}