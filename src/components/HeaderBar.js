import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { modeAction } from '../features/mode/modeSlice'
import { useSelector, useDispatch } from 'react-redux'
import { CssBaseline, Divider } from "@mui/material";
import { drawerAction } from '../features/drawer/drawerSlice'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppsIcon from '@mui/icons-material/Apps';
import ToggleButton from '@mui/material/ToggleButton';
import NightlightIcon from '@mui/icons-material/Nightlight';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 32,
  color: theme.palette.custom.contrastText,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  border: '1px solid transparent',
  boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
  shadowColor: '#000',
  // shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.93),
    boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  width: 'auto',
  flexGrow: 1,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: theme.spacing(40),
    flexGrow: 0
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  paddingRight: theme.spacing(0),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc( ${theme.spacing(5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '0px'
    },
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    
  },
}));



function HeaderBar() {


  const themeMode = useSelector((state) => state.mode.type)
  const dispatch = useDispatch()
  //dispatch(modeAction.toggleMode())
  const toggleDrawer = () => {
    dispatch(drawerAction.toggleDrawer())
  }
  const toggleMode = () => {
    dispatch(modeAction.toggleMode())
  }

  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    console.log(event.currentTarget);
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} >
      <CssBaseline />
      <AppBar position="fixed" color="custom" elevation={0} sx={{ zIndex: 1201 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block'}}}>
            Codeforces Data
          </Typography>


          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color: '#607574'}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 1, display: {xs: 'none', sm: 'block'} }}></Box>
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box> */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ToggleButton
              value="check"
              selected={ themeMode === 'dark' ? true : false}
              sx={{
                borderRadius: 8,
                border: 'none',
              }}
              onChange={toggleMode}
              color={'warning'}
            >
              <NightlightIcon />
            </ToggleButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent='1' color="warning">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge variant='dot' color='warning' overlap='circular'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge variant='dot' color="warning" overlap='circular'>
                <AppsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar><Divider></Divider>
      </AppBar>
      
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}


export default HeaderBar