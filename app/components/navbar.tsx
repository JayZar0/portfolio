'use client'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MuseumIcon from '@mui/icons-material/Museum';
import {useState} from "react";
import {Home} from "@mui/icons-material";
import {redirect} from "next/navigation";


export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const menuItems = [
    { title: 'Home', icon: <Home />, navigation: process.env.NEXT_PUBLIC_HOME },
    { title: 'About Me', icon: <AssignmentIndIcon />, navigation: process.env.NEXT_PUBLIC_ABOUT },
    { title: 'Artifacts', icon: <MuseumIcon />, navigation: process.env.NEXT_PUBLIC_ARTIFACTS }
  ]

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.title}>
            <ListItemButton onClick={() => handleSelection(item.navigation)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  function handleSelection(navigation: string | undefined) {
    if (navigation != null) {
      redirect(navigation)
    }
  }

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}