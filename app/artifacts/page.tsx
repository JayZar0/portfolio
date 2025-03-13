import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";
import Artifact from "@/app/components/artifact";


export default function ArtifactsPage() {
  return (
    <Container className='m-2'>
      <Typography variant='h4'>Projects</Typography>
      <Artifact stack='Java SQLite' title='Mobile POS'>
        A minimal point of sales system for mobile devices that is capable of storing
        product inventory and transactions. This was made as a school project for mobile
        application development for android. There are three different interfaces for the
        user to use such as the transaction list, the transaction creation screen and the
        main menu. There was also a plan to create a settings screen which would have been
        used to added sound to the application.
      </Artifact>
      <Artifact stack='Vue Node Express TypeORM SQLite3' title='Scheduling Application'>
        A barebones employee scheduling app that has many tables in a
        database that can be used to store employees, shifts, and departments. There
        will be authentication for employees who have credentials stored in the database.
        As of right now the two main login roles are managers and employees
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