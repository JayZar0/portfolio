import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";
import Artifact from "@/app/components/artifact";


export default function ArtifactsPage() {
  return (
    <Container className='m-2'>
      <Typography variant='h4'>Projects</Typography>
      <Artifact stack='Java' title='Mobile POS'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Artifact>
      <Artifact stack='Vue Node Express TypeORM SQLite3' title='Scheduling Application'>
        A barebones employee scheduling app that has many tables in a
        database that can be used to store employees, shifts, and departments. There
        will be authentication for employees who have credentials stored in the database.
      </Artifact>
      <Artifact stack='Next.js Node RabbitMQ Prisma Postgres' title='Flyer Scanner'>
        This application will take a flyer that a user inputs and then use gemini
        to scan the raw text in the flyer. Afterwards, the raw text will be sent to
        OpenAI where it will be mapped to an object that will check if the product is
        in the clients Airtable and if it is it will place it into our database. From
        there the client can update his inventory with the products that were placed
        into our database.
      </Artifact>
    </Container>
  )
}