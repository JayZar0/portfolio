import {Typography} from "@mui/material";
import * as React from "react";

/**
 * This component is to hold one of the languages for the about page
 * @param language this prop will be the heading
 * @param children this prop will be the description
 * @constructor
 */
export default function LanguageComponent({language, children}: {language?: string, children?:React.ReactNode}) {
  return (
    <>
      <Typography variant='subtitle1' component='span'>
        {language}
      </Typography>
      <Typography variant='caption' component='p'>
        {children}
      </Typography>
    </>
  )
}