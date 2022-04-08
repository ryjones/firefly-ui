import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import { DownloadJsonButton } from '../Buttons/DownloadJsonButton';
import { FFJsonViewer } from '../Viewers/FFJsonViewer';
import { FFAccordionHeader } from './FFAccordionHeader';
import { FFAccordionText } from './FFAccordionText';

interface Props {
  header: string;
  json: object;
  isOpen?: boolean;
  filename?: string;
}

export const JsonViewAccordion: React.FC<Props> = ({
  header,
  json,
  isOpen = false,
  filename,
}) => {
  const [expanded, setExpanded] = useState<boolean>(isOpen);

  return (
    <Accordion
      key={header}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <FFAccordionHeader
          leftContent={
            <FFAccordionText color="primary" text={header} isHeader />
          }
          rightContent={
            filename ? (
              <DownloadJsonButton
                filename={filename}
                jsonString={JSON.stringify(json)}
              />
            ) : (
              <></>
            )
          }
        />
      </AccordionSummary>
      <AccordionDetails>
        {/* Basic Data */}
        <Grid container item direction="row" alignItems="flex-end">
          <Grid item pb={1} xs={10} justifyContent="flex-start">
            <FFJsonViewer json={json} />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
