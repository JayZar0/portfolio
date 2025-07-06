import {Container, Typography} from "@mui/material";
import Artifact from "@/app/components/artifact";

/**
 * This is the artifacts page that will showcase all the projects that I have
 * worked on
 * @returns 
 */
export default function ArtifactsPage() {
  return (
    <Container className='m-2 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Typography variant='h4' component='h4' margin={5}>Projects</Typography>
      <Artifact stack='Vue Express TypeORM SQLite3' title='Scheduling Application' image='/scheduler.png'>
        A barebones employee scheduling app that has many tables in a
        database that can be used to store employees, shifts, and departments. There
        will be authentication for employees who have credentials stored in the database.
        As of right now the two main login roles are managers and employees. The managers
        have are able to assign/edit shifts, edit and create employees.
      </Artifact>
      <Artifact stack='Next.js Node RabbitMQ Prisma Postgres' title='Flyer Scanner' image='/prj5.png'>
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