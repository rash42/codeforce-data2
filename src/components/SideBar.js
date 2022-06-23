import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import QuizIcon from '@mui/icons-material/Quiz';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BookIcon from '@mui/icons-material/Book';
import { useNavigate } from "react-router-dom";





function SideBar() {
    const isDrawerOpen = useSelector((state) => state.drawer.isOpen)
    const navigate = useNavigate()

    const info = [{
        text: 'Home',
        icon: <HomeIcon sx={{ color: (theme) => theme.palette.custom.contrastText }} />,
        link: '/'
    },
    {
        text: 'Contests',
        icon: <QuizIcon sx={{ color: (theme) => theme.palette.custom.contrastText }} />,
        link: '/contests'
    },
    {
        text: 'User Info',
        icon: <PersonIcon sx={{ color: (theme) => theme.palette.custom.contrastText }} />,
        link: '/user'
    },
    {
        text: 'Problem Set',
        icon: <AssignmentIcon sx={{ color: (theme) => theme.palette.custom.contrastText }} />,
        link: '/problems'
    },
    {
        text: 'Blogs',
        icon: <BookIcon sx={{ color: (theme) => theme.palette.custom.contrastText }} />,
        link: '/blogs'
    }]

    const list = (anchor) => (
        <Box
            sx={{
                width: {
                    xs: 600,
                    sm: 250,
                }, marginTop: 10
            }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        //color={'secondary'}

        >
            <List >
                {info.map((element, index) => (
                    <ListItem key={element.text} disablePadding sx={{ color: (theme) => theme.palette.custom.contrastText }}>
                        <ListItemButton onClick={() => navigate(element.link)}>
                            <ListItemIcon>
                                {element.icon}
                            </ListItemIcon>
                            <ListItemText primary={element.text} />
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