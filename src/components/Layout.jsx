import { useState } from 'react';
import ThemeToggleButton from '../components/Theme/ThemeToggle';
import { useDispatch } from 'react-redux';

import {
  AppBar,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import { themeChanger } from '../features/theme/themeSlice';
import { useSelector } from 'react-redux';
import DarkTheme from '../styles/Theme/Dark';
import LightTheme from '../styles/Theme/Light';
import { ThemeProvider } from '@mui/material/styles';

function Layout() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <div>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
            >
              Menu
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='temporary'
          anchor='left'
          open={openDrawer}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <List>
            <ListItem button component={Link} to='/'>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button component={Link} to='/Register'>
              <ListItemText primary='Register' />
            </ListItem>

            <ListItem button component={Link} to='/login'>
              <ListItemText primary='Login' />
            </ListItem>
            <ListItem button component={Link} to='/forgotpassword'>
              <ListItemText primary='Forgot Password' />
            </ListItem>
            <ListItem>
              {/* { darkMode, toggleDarkMode } */}
              <ThemeToggleButton
                toggleDarkMode={() => {
                  dispatch(themeChanger({ darkMode: true }));
                }}
              ></ThemeToggleButton>
            </ListItem>
          </List>
        </Drawer>
        <main style={{ marginTop: '64px' }}>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
