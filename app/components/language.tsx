import {Divider, Typography} from "@mui/material";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

/**
 * This component is to hold one of the languages for the about page
 * @param language this prop will be the heading
 * @param children this prop will be the description
 * @constructor
 */
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
    minHeight: '250px',
  })
})

export default function LanguageComponent({language, children}: {language?: string, children?:React.ReactNode}) {
  return (
    <NestedItem>
      <Typography variant='subtitle1' component='span'>
        {language}
      </Typography>
      <Divider />
      <Typography variant='caption' component='p'>
        {children}
      </Typography>
    </NestedItem>
  )
}