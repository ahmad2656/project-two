import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import Container from "react-bootstrap/Container";
import "./Homefour.css";

export default function Homefour() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <section className="sec-f">
      <Container>
        <div className="ac-main">
          <h4 id="freq">Frequently Asked Questions</h4>
          <Accordion
            className="accord"
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 300 } }}
            sx={{
              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-ic" />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="typo">
                What is Web domain and hosting?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="typo" id="tpara">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                magnam aliquam quaerat voluptatem ut enim ad minima veniam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-ic" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="typo">
                Google Cloud or Amzon?which best.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="typo" id="tpara">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                magnam aliquam quaerat voluptatem ut enim ad minima veniam.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-ic" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="typo">
                IT fields are very Benifitables.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="typo" id="tpara">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                magnam aliquam quaerat voluptatem ut enim ad minima veniam.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="arrow-ic" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="typo">
                Web Development is very profitable skill.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="typo" id="tpara">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                magnam aliquam quaerat voluptatem ut enim ad minima veniam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
