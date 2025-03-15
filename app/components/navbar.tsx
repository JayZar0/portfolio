'use client'

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MuseumIcon from '@mui/icons-material/Museum';
import {useState} from "react";
import {Close, Home, Menu} from "@mui/icons-material";
import {redirect} from "next/navigation";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";


export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  const menuItems = [
    { title: 'Home', icon: <Home />, navigation: process.env.NEXT_PUBLIC_HOME },
    { title: 'About Me', icon: <AssignmentIndIcon />, navigation: process.env.NEXT_PUBLIC_ABOUT },
    { title: 'Artifacts', icon: <MuseumIcon />, navigation: process.env.NEXT_PUBLIC_ARTIFACTS }
  ]

  function handleSelection(navigation: string | undefined) {
    setOpen(false)
    if (navigation != null) {
      redirect(navigation)
    }
  }

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon icon={<Menu />} openIcon={<Close />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {menuItems.map((item) => (
          <SpeedDialAction
            key={item.title}
            icon={item.icon}
            title={item.title}
            onClick={() => handleSelection(item.navigation)}
          />
        ))}
      </SpeedDial>
    </>
  )
}