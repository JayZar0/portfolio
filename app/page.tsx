import {Box, Typography, List, ListItem} from "@mui/material";

/**
 * This is the Home page where the users are directed when visiting the page
 * @returns 
 */
export default function Home() {
  return (
    <Box
      className="
        grid 
        grid-rows-[20px_1fr_20px] 
        h-screen
        items-center 
        justify-items-center 
        min-h-screen 
        p-8 
        pb-20 
        gap-16 
        sm:p-20 
        font-(family-name:--font-geist-sans)
      "
    >
      <Typography variant='h1' className="row-start-2">John Lazaro</Typography>
      <List className='row-start-3 align-top'>
        <ListItem><Typography variant='subtitle1'>Experienced Troubleshooter</Typography></ListItem>
        <ListItem><Typography variant='subtitle1'>Aspiring Programmer</Typography></ListItem>
        <ListItem><Typography variant='subtitle1'>Cybersecurity Enthusiast</Typography></ListItem>
      </List>
    </Box>
  )
}
