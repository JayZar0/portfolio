'use client'

import {Avatar, Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {ContactMail, Phone} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import * as React from 'react'
import LanguageComponent from "@/app/components/language";

export default function AboutMePage() {
  const Item = styled(Paper)(({theme}) => ({
    backgroundColor: "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
  }))

  const NestedItem = styled(Paper)(({ theme }) => {
    return ({
      backgroundColor: '#bbb',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
      }),
      margin: 10,
      flex: 1,
    })
  })

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid size={{xs: 12, sm: 12, md: 4}}>
          <Item className="m-1">
            <Avatar src="john.png" sx={{width: 100, height: 100}}/>
            <Typography variant="h6">John Lazaro</Typography>
            <Typography variant="body1">
              <ContactMail/> Email: john.e.lazaro@gmail.com
            </Typography>
            <Typography variant="body1">
              <Phone/> Phone Number: (306)850-8737
            </Typography>
          </Item>
          <Item className="m-1">
            <Typography variant="h6">Skills and Experience</Typography>
            <Typography variant="body1"></Typography>
          </Item>
        </Grid>
        <Grid size={{xs: 12, sm: 12, md: 8}}>
          <Item>
            <Typography variant="h6">About</Typography>
            <Typography variant="body1" component="p" textAlign="left">
              I started off as a student in electronics engineering with the interest of developing
              robotics. However, as time went on I found myself struggling when it came to developing hardware
              from scratch. Throughout my time of struggle in the engineering field, I started taking an interest
              towards software development since there are many similarities and also programming is a big portion
              of the electronic engineering field as well. Ever since the swap I&#39;ve been enjoying my time in
              the Computer Systems Technology program studying about networking, operating systems, software
              development, database management and project management.
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Typography variant='h5' component="h5" textAlign="center">
        Languages and Frameworks
      </Typography>
      <Grid container spacing={0} minHeight={300}>
        <Grid size={3} sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", height: "300"}}>
          <NestedItem>
            <LanguageComponent language='Vue.js'>
              Learned during Second year of Computer Systems Technology and was
              used as a front end for my employee scheduling application project.
            </LanguageComponent>
          </NestedItem>
          <NestedItem>
            <LanguageComponent language='React'>
              Learned along side with Next.js for my flyer project application during
              my second year in Computer Systems Technology.
            </LanguageComponent>
          </NestedItem>
        </Grid>
        <Grid size={3} sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", height: "300"}}>
          <NestedItem>
            <LanguageComponent language='C'>
              Learned basic C in first year engineering and eventually upgraded my knowledge
              in second year engineering for programming microcontrollers. Learned memory
              mapping as well as memory manipulation in second year Computer Systems Technology.
            </LanguageComponent>
          </NestedItem>
          <NestedItem>
            <LanguageComponent language='C#'>
              Learned in second year to better understand the different data structures and algorithms
              in programming. Developed our own list, binary trees, hashtables and sorting classes.
            </LanguageComponent>
          </NestedItem>
        </Grid>
        <Grid size={3}  sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", height: "300"}}>
          <NestedItem>
            <LanguageComponent language='SQL'>
              Learned basic SQL in first year for Computer Systems Technology. Learned advanced querying
              and interfaces in second year.
            </LanguageComponent>
          </NestedItem>
          <NestedItem>
            <LanguageComponent language='VBA'>
              Learned how to create macros and modify them, as well as creating functions to be used in excel
              for sorting and organizing data.
            </LanguageComponent>
          </NestedItem>
        </Grid>
        <Grid size={3} sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", height: "300"}}>
          <NestedItem>
            <LanguageComponent language='Next.js'>
              Framework used in my school project learning the page router for our research and then eventually
              learning to use the app router for the actual project.
            </LanguageComponent>
          </NestedItem>
          <NestedItem>
            <LanguageComponent language='Java'>
              First language that we learned to use in Computer Systems Technology where I learned the basics of
              object oriented programming as well as threading, recursion and had my first try at agile programming.
            </LanguageComponent>
          </NestedItem>
        </Grid>
      </Grid>
    </Container>
  )
}