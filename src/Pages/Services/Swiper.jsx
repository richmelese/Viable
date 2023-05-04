import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "../../Styles/Services/servicemain.css";
// import FaBeer from "@mui/icons-material";
import { AiOutlinePlus } from "react-icons/ai";

import { AiOutlineRight } from "react-icons/ai";
import ServPlan from "../../assets/ser-plan.png";

export default function SimpleAccordion() {
  const styles = {
    expand_icon: {
      color: "white",
    },
  };
  return (
    <div>
      <div>
        <div></div>
        <Accordion>
          <div className="All__text__Acc">
            <AccordionSummary
              expandIcon={<AiOutlinePlus className="icons-dot" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <p>Import and Export Services</p>
              </Typography>
            </AccordionSummary>
          </div>
          <AccordionDetails>
            <Typography>
              <p>
                {" "}
                Viable General Trading Dubai company can help you with all your
                exporting needs and ensure that your goods or products reach the
                right customer anywhere in the world.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Accordion>
        <div className="All__text__Acc">
          <AccordionSummary
            expandIcon={<AiOutlinePlus className="icons-dot" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p>Procurement Outsourcing Services</p>
            </Typography>
          </AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography>
            <p>
              {" "}
              It’s easy to see how a simple procurement solution can improve and
              enhance business activities. A smooth journey, from product
              sourcing and invoice payments to supplier management. Procurement
              solutions can save on cost and enhance process efficiencies, which
              in turn, add value to the business
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <div className="All__text__Acc">
          <AccordionSummary
            expandIcon={<AiOutlinePlus className="icons-dot" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <p>Stainless Steel Cleaning</p>
            </Typography>
          </AccordionSummary>
        </div>
        <AccordionDetails>
          <Typography>
            <p>
              {" "}
              Viable Stainless Steel Cleaning and Polishing services offer the
              best solution for cleaning, restoring, and preserving original
              stainless steel finish. Our quality of work speaks for itself.
              With us, it is easy to differentiate between pretreated and
              treated stainless steel
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <img className="serv__plan" src={ServPlan} alt="" /> */}
      <div
        style={{
          backgroundImage: `url(${ServPlan})`,
        }}
        className="main__image"
      >
        {/* <h1>Our Services</h1>{" "} */}
      </div>
    </div>
  );
}
