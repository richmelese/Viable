import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import FaBeer from "@mui/icons-material";
import { FaBeer } from "react-icons/fa";

import { AiOutlineRight } from "react-icons/ai";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlineRight />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <p>How do I become a customer?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To become a customer, fill out our business application. Submit the
            form online, Due to the volume of applications, a sales
            representative will contact you within 1-3 business days to setup
            your account.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlineRight />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <p>Do you do international shipments?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes. We can also arrange for booking.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlineRight />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <p>Do you offer specials or promotions?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we have monthly promotions released on the first of each month.
            Login in to our website to see our monthly promotion flyer and
            discount details. For current customers, your sales representative
            will also have a printed copy for you to review.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<AiOutlineRight />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
  );
}
