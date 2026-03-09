'use client'

import { Tabs, Tab } from "@mui/material"
import React from "react"

export default function NavBarComponent() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      sx={{ borderRight: 1, borderColor: 'divider', position: 'fixed', filter: 'brightness(2)' }}
      className='z-3000 h-screen w-62.5'
    >
      <Tab label="John Lazaro" href='#about' />
      <Tab label="Experience" href='#experience' />
      <Tab label="Technology and Languages" href='#tech' />
      <Tab label="Contact Me" href='#contact' />
      <Tab label="Projects" href='#projects' />
    </Tabs>
  )
}