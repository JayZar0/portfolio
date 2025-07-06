'use client'

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import {useState} from "react";
import {Article, Close, Home, Menu} from "@mui/icons-material";
import {redirect, usePathname} from "next/navigation";
import {
  SpeedDial, 
  SpeedDialAction, 
  SpeedDialIcon, 
  Tabs, 
  Tab, 
  useTheme, 
  useMediaQuery
} from "@mui/material";

/**
 * This is the navbar component that will allow the user to navigate around the page 
 */
export default function NavBar() {
  const menuItems = [
    { title: 'Home', icon: <Home />, navigation: process.env.NEXT_PUBLIC_HOME },
    { title: 'About Me', icon: <AssignmentIndIcon />, navigation: process.env.NEXT_PUBLIC_ABOUT },
    { title: 'Projects', icon: <Article />, navigation: process.env.NEXT_PUBLIC_ARTIFACTS }
  ]

  const relativePath = usePathname()

  const [open, setOpen] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(menuItems.findIndex(({navigation}) => navigation === relativePath))

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"))

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleSelection(navigation: string | undefined) {
    setOpen(false)
    setIndex(menuItems.findIndex(({navigation: nav}) => nav === navigation))
    if (navigation != null) {
      redirect(navigation)
    }
  }

  return (
    <>
      <Tabs 
        value={index}
        variant="standard"
        indicatorColor="secondary"
        textColor='inherit'
        hidden={!isMobile}
        sx= {{
          position: 'fixed',
          width: '100%',
          zIndex: 1,
          textColor: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        {menuItems.map(({title, icon, navigation}) => (
          <Tab
           key={title}
           icon={icon} 
           label={title}
           iconPosition='start'
           onClick={() => handleSelection(navigation)}
          />
        ))}
      </Tabs>
      <SpeedDial
        ariaLabel="Mobile Navigation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon icon={<Menu />} openIcon={<Close />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        hidden={isMobile}
      >
        {menuItems.map((item) => (
          <SpeedDialAction
            key={item.title}
            icon={item.icon}
            title={item.title}
            slotProps={{
              tooltip: {
                title: item.title,
                open: true,
                onClick: () => {
                  handleSelection(item.navigation)
                }
              }
            }}
            onClick={() => handleSelection(item.navigation)}
          />
        ))}
      </SpeedDial>
    </>
  )
}