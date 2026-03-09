import { Container, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

/**
 * This component is to hold one of the languages for the about page
 * @param language this prop will be the heading
 * @param children this prop will be the description
 * @constructor
 */
const NestedItem = styled(Paper)(({ theme }) => {
  const isDarkMode = theme.palette.mode === "dark"

  return ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: 10,
    flex: 1,
    minHeight: '250px',
    bgcolor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    p: 2,
    borderRadius: 10,
    boxShadow: isDarkMode ? "0px 4px 10px rgba(255,255,255,0.2)" : "0px 4px 10px rgba(0,0,0,0.2)",
  })
})

interface props {
  languages: Array<string>,
  header: string
}

/**
 * This component will store the programming languages and technologies that I have
 * learned throughout my life
 * @param param
 * @returns 
 */
export default function LanguageComponent({ languages, header }: props) {
  return (
    <NestedItem className='h-90 align-top'>
      <Typography variant='h6' className='col-start-1 col-end-3 align-top'>{header}</Typography>
      <Container className='flex flex-wrap item-start gap-3 justify-evenly'>
        {languages.map((tech) =>
          <Typography className='bg-blue-400 border border-blue-700 rounded-xl h-min px-2 py-1' key={tech}>{tech}</Typography>
        )}
      </Container>
    </NestedItem>
  )
}