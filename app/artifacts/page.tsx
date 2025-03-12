import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Container, Divider} from "@mui/material";


export default function ArtifactsPage() {
  return (
    <Container className='m-2'>
      <Typography variant='h4'>Projects</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Mobile POS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Scheduling Application</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='subtitle1' component='p'>
            Tech Stack:<br />
            Front-End: Vue<br />
            Backend: Node, Express<br />
            ORM: TypeORM<br />
            Database: SQLite3<br />
          </Typography>z
          <Divider />
          <Typography variant='body1' component='p'>
            Description: A barebones employee scheduling app that has many tables in a
            database that can be used to store employees, shifts, and departments. There
            will be authentication for employees who have credentials stored in the database.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Flyer Scanner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='subtitle1' component='p'>
            Tech Stack:<br />
            Front-End: Next.js<br />
            Backend: Node, RabbitMQ<br />
            AI: OpenAI, Gemini<br />
            ORM: Prisma<br />
            Database: Postgres
          </Typography>
          <Divider />
          <Typography variant='body1' component='p'>
            Description: This application will take a flyer that a user inputs and then use gemini
            to scan the raw text in the flyer. Afterwards, the raw text will be sent to
            OpenAI where it will be mapped to an object that will check if the product is
            in the clients Airtable and if it is it will place it into our database. From
            there the client can update his inventory with the products that were placed
            into our database.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}