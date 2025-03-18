import {Divider, Typography, useTheme} from "@mui/material";
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
    borderRadius: 2,
    boxShadow: isDarkMode ? "0px 4px 10px rgba(255,255,255,0.2)" : "0px 4px 10px rgba(0,0,0,0.2)",
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