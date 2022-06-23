import React from 'react'
import { Routes, Route } from 'react-router-dom';
import UpcommingContest from './UpcommingContest';
import UserInfo from './UserInfo';
import ProblemSet from './ProblemSet';
import Row from './Row';
import Blogs from './Blogs';
import HeaderBar from './HeaderBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from "react-redux";
import SideBar from './SideBar';
import { styled } from '@mui/material/styles';


const drawerWidth = 240;


const Smain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `0px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `${drawerWidth}px`,
        }),
    }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    minHeight: 100,
    justifyContent: 'flex-end',
}));

export default function Main() {
    const isDrawerOpen = useSelector((state) => state.drawer.isOpen)
    const themeMode = useSelector((state) => state.mode.type)
    const lightMode = createTheme({
        palette: {
            mode: 'light',
            custom: {
                main: '#ffffff',
                light: '#ffffff',
                dark: '#ffffff',
                contrastText: '#607574'
            },
        },
        mixins: {
            toolbar: {
                minHeight: 64
            }
        },
    })
    const darkMode = createTheme({
        mode: 'dark',
        palette: {
            custom: {
                // main: '#666666',
                main: '#121212',
                light: '#1F1B24',
                // dark: '#262626',
                dark: '#121212',
                // contrastText: '#ffffff',
                contrastText: '#bfbfbf'
            },
            mixins: {
                toolbar: {
                    minHeight: 64
                }
            },
        },
        components: {
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        color: '#ffffff'
                    }
                }
            },
            MuiTablePagination: {
                styleOverrides: {
                    root: {
                        color: '#ffffff'
                    }
                }
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        fill: '#ffffff'
                    }
                }
            }
        }
    })
    let theme
    if (themeMode === 'light') {
        theme = lightMode
    }
    else {
        theme = darkMode
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <style>{`body {background-color: ${theme.palette.custom.dark}`}</style>
                <header>
                    <HeaderBar></HeaderBar>
                </header>

                <SideBar></SideBar>

                <Smain open={isDrawerOpen}>
                    <DrawerHeader />
                    <Routes>
                        <Route path='/' element={<Row />}></Route>
                        <Route path='/contests' element={<UpcommingContest />}></Route>
                        <Route path='/user' element={
                            <React.Suspense fallback="Loading....">
                                <UserInfo />
                            </React.Suspense>
                        }>
                        </Route>
                        <Route path='/problems' element={<ProblemSet />}></Route>
                        <Route path='/blogs' element={<Blogs />}></Route>
                    </Routes>
                </Smain>

            </ThemeProvider>
        </>
    )
}
