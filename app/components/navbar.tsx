'use client'
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MuseumIcon from '@mui/icons-material/Museum';
import {useState} from "react";
import {Close, Home, Menu} from "@mui/icons-material";
import {redirect} from "next/navigation";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";


export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false)

  // const toggleDrawer = (newOpen: boolean) => () => {
  //   setOpen(newOpen)
  // }

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

  // const DrawerList = (
  //   <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
  //     <List>
  //       {menuItems.map((item) => (
  //         <ListItem key={item.title}>
  //           <ListItemButton onClick={() => handleSelection(item.navigation)}>
  //             <ListItemIcon>{item.icon}</ListItemIcon>
  //             <ListItemText>{item.title}</ListItemText>
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // )

  function handleSelection(navigation: string | undefined) {
    setOpen(false)
    if (navigation != null) {
      redirect(navigation)
    }
  }

  return (
    <>
      {/*<Button onClick={toggleDrawer(true)}>Menu</Button>*/}
      {/*<Drawer open={open} onClose={toggleDrawer(false)}>*/}
      {/*  {DrawerList}*/}
      {/*</Drawer>*/}
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
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