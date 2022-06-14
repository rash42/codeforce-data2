import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from "react-redux";





function SideBar() {
    const isDrawerOpen = useSelector((state) => state.drawer.isOpen)


    const list = (anchor) => (
        <Box
            sx={{ width: {
                xs: 600,
                sm: 250,
            }, marginTop: 10 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
            //color={'secondary'}

        >
            <List >
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{color: (theme) => theme.palette.custom.contrastText}}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon sx={{color: (theme) => theme.palette.custom.contrastText}}/> : <MailIcon  sx={{color: (theme) => theme.palette.custom.contrastText}}/>}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{color: (theme) => theme.palette.custom.contrastText}}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon sx={{color: (theme) => theme.palette.custom.contrastText}}/> : <MailIcon sx={{color: (theme) => theme.palette.custom.contrastText}}/>}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <Drawer
                anchor={'left'}
                open={isDrawerOpen}
                elevation={0}
                variant={'persistent'}
                // onClose={toggleDrawer('left', false)}
                color={'secondary'}
                // sx={{
                //     "& .MuiDrawer-paper": { borderWidth: 0, background: 'custom.main' }
                // }}
                sx={(theme) => ({
                    "& .MuiDrawer-paper": {
                        borderWidth: 0,
                        background: theme.palette.custom.main,
                    },
                    
                 })}
              >
            {list('left')}
        </Drawer>
            </React.Fragment >
      )
}

export default SideBar