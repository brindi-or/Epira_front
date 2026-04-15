import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { AccordionPrimary } from 'src/components/base/styles/accordion';

const accordionItems = [
  {
    question: 'Required files for ECTN generation',
    answer: [
      "The minimum required files for ECTN generation are:",
      "    - Bol of Lading (BOL) in PDF format",
      "    - Commercial Invoice in PDF format",
      "    - Fret paid",
      "    - Underlying Bill of Lading (UBL) in PDF format",
      "    - FIMEX inscription",
    ].map((item, index) => (
      <Typography key={index} variant="body2">{item}</Typography>
    ))
     },
  {
    question: 'Not required files for ECTN generation',
    answer: [
      "The minimum required files for ECTN generation are:",
      "    - La fiche GUCE ou la déclaration d’importation ",
      "    - La liste de colisage",
      "    - Carte grise pour les véhicules",
      "    - Attestation d’immatriculation",
    ].map((item, index) => (
      <Typography key={index} variant="body2">{item}</Typography>
    ))    
},
];
const Component = () => {
  return (
    <>
      {accordionItems.map((item, index) => (
        <AccordionPrimary
          square
          disableGutters={false}
          key={index}
          disabled={item.disabled}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDownTwoToneIcon />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <Typography variant="h5">{item.question}</Typography>
          </AccordionSummary>
          {item.answer && (
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          )}
        </AccordionPrimary>
      ))}
    </>
  );
};
export default Component;
