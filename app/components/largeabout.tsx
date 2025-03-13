import {Avatar, Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {ContactMail, Phone} from "@mui/icons-material";
import * as React from "react";
import {styled} from "@mui/system";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
}))

export default function AboutLargeScreen() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid size={4}>
          <Item className='m-1'>
            <Avatar src='john.png' sx={{ width: 100, height: 100 }} />
            <Typography variant='h6'>John Lazaro</Typography>
            <Typography variant='body1'><ContactMail /> Email: john.e.lazaro@gmail.com</Typography>
            <Typography variant='body1'><Phone /> Phone Number: (306)850-8737</Typography>
          </Item>
          <Item className='m-1'>
            <Typography variant='h6'>Skills and Experience</Typography>
            <Typography variant='body1'></Typography>
          </Item>
        </Grid>
        <Grid size={8}>
          <Item>
            <Typography variant='h6'>About</Typography>
            <Typography variant='body1' component='p' textAlign='left'>
              I started off as a student in electronics engineering with the interest of developing
              robotics. However, as time went on I found myself struggling when it came to developing hardware
              from scratch. Throughout my time of struggle in the engineering field,
              I started taking an interest towards software development since there are many
              similarities and also programming is a big portion of the electronic engineering field as well.
              Ever since the swap I&#39;ve been enjoying my time in the Computer Systems Technology program
              studying about networking, operating systems, software development, database management and
              project management.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Container>
  )
}