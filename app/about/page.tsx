'use client'

import {
  Avatar,
  Container,
  List,
  ListItemText,
  Pagination,
  Typography,
  Zoom,
  useTheme,
  Link,
  Grid
} from "@mui/material"
import {ContactMail, Phone} from "@mui/icons-material"
import {styled} from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import * as React from 'react'
import LanguageComponent from "@/app/components/language"
import ContactForm from "../components/contactform"


/**
 * This is the about page where it displays all of my information
 * @returns The about page
 */
export default function AboutMePage() {
  const [page, setPage] = React.useState(1)

  const theme = useTheme()
  const isDarkMode = theme.palette.mode === "dark"

  const items = [
    { language: "Vue.js", description: "Learned during Second year of Computer Systems Technology and was used as a front end for my employee scheduling application project." },
    { language: "React", description: "Learned alongside Next.js for my groups flyer project application during my second year in Computer Systems Technology." },
    { language: "C", description: "Learned basic C in first-year engineering and eventually upgraded my knowledge in second-year engineering for programming microcontrollers. Learned memory mapping as well as memory manipulation in second-year Computer Systems Technology." },
    { language: "C#", description: "Learned in second year to better understand the different data structures and algorithms in programming. Developed our own list, binary trees, hash tables, and sorting classes." },
    { language: "SQL", description: "Learned basic SQL in first year for Computer Systems Technology. Learned advanced querying and interfaces in second year." },
    { language: "VBA", description: "Learned how to create macros and modify them, as well as creating functions to be used in Excel for sorting and organizing data." },
    { language: "Next.js", description: "Framework used in my school project learning the page router for our research and then eventually learning to use the app router for the actual project." },
    { language: "Java", description: "First language that we learned to use in Computer Systems Technology where I learned the basics of object-oriented programming as well as threading, recursion, and had my first try at agile programming." },
    { language: "Prisma", description: "ORM used in the flyer scanner project to allow the application to communicate with the database." },
    { language: "TypeORM", description: "This ORM was used for the employee scheduler to allow the client application to perform full CRUD on the backend database." },
    { language: "Ionic", description: "A frame work for cross-platform mobile development that I learned to use on my own. I did research as I had full interest in making a mobile application. I am currently working on creating an administration dashboard using Ionic." },
    { language: "Python", description: "Self-studied out of interest of creating simple scripts. Developed a webscraper with python and used it for job scraping. In emerging technologies I learned to create generative models using pytorch." },
    { language: "Bash", description: "First scripting language learned during Advanced Operating systems to automate administrative tasks on linux." },
    { language: "Perl", description: "Scripting language learned during the second year during Advanced Operating systems to replace bash." },
    { language: "Jest", description: "Used for unit testing the flyer scanner application to make sure the server routes in Next.js were functional." },
    { language: "Cypress", description: "Used for UI testing the flyer scanner application to make sure that the applications UI features were doing what was shown in our sequence diagrams and testing charts." }
  ]
  const itemsPerPage = 8
  const totalPages = Math.ceil(items.length / itemsPerPage)
  const displayedLanguages = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: "center",
    p: 10,
    borderRadius: 2,
    boxShadow: isDarkMode ? "0px 4px 10px rgba(255,255,255,0.2)" : "0px 4px 10px rgba(0,0,0,0.2)",
    margin: 10,
  }))

  /**
   * This function will perform the page change for the languages and the frameworks
   */
  function handleChange(_event: React.ChangeEvent<unknown>, value: number) {
    setPage(value)
  }

  return (
    <Container className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-(family-name:--font-geist-sans)'>
      <Grid container spacing={4}>
        <Grid size={{xs: 12, sm: 6, md: 4}}>
          <Item className="m-1">
            <Avatar src="john.png" sx={{width: 100, height: 100}}/>
            <Typography variant="h6">John Lazaro</Typography>
            <Typography variant="body1">
              <ContactMail/>Email: <Link href="mailto:john.e.lazaro@gmail.com" underline="hover">john.e.lazaro@gmail.com</Link>
            </Typography>
            <Typography variant="body1">
              <Phone/> Phone Number: (306) 850-8737
            </Typography>
          </Item>
          <Item className="m-1">
            <Typography variant="h6">Experience</Typography>
            <List>
              <ListItemText>
                <Typography variant="subtitle1">Project Management Class in Saskatchewan Polytechnic</Typography>
                <Typography variant="caption">Created a full-stack application with a group that scans flyers and inputs the products in the clients inventory into a database.</Typography>
              </ListItemText>
            </List>
          </Item>
        </Grid>
        <Grid size={{xs: 12, sm: 6, md: 8}}>
          <Item>
            <Typography variant="h6">About</Typography>
            <Typography variant="body1" component="p" textAlign="justify">
              I started off as a student in electronics engineering with the interest of developing
              robotics. However, as time went on I found myself more interested in the programming
              aspect of the field and eventually developed interest in software development. That was
              when I decided to do some research into a software program in Saskatchewan Polytechnic
              and found Computer Systems Technology. I decided to register for the program and learned
              more than I had expected such as networking, database administration and cybersecurity.
              I had also learned about software development and the workflow of a project team when
              it comes to developing a full stack application.
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6">Contact Me</Typography>
            <ContactForm />
          </Item>
        </Grid>
      </Grid>
      <Typography variant='h5' component="h5" textAlign="center">
        Technology and Languages
      </Typography>
      <Grid container columns={12} columnSpacing={2} rowSpacing={2} minHeight={300}>
        {displayedLanguages.map(({ language, description }) => (
          <Zoom key={language} in={true} mountOnEnter unmountOnExit>
            <Grid 
              key={language}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                height: "300px",
                minWidth: "250px",
              }}
            >
              <LanguageComponent language={language}>{description}</LanguageComponent>
            </Grid>
          </Zoom>
        ))}
      </Grid>        
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        color="primary"
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
          "& .MuiPaginationItem-root": {
            color: theme.palette.text.primary,
            borderColor: theme.palette.text.primary,
          },
          "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.background.default,
          },
        }}
      />
    </Container>
  )
}