import { useState } from 'react';
import ThemeToggleButton from '../Theme/ThemeToggle';
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
import { themeChanger } from '../../features/theme/themeSlice';
import { useSelector } from 'react-redux';
import DarkTheme from '../../styles/Theme/Dark';
import LightTheme from '../../styles/Theme/Light';
import { ThemeProvider } from '@mui/material/styles';

function ParentLayout() {
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
            <ListItem component={Link} to='/parent/profile'>
              <ListItemText primary='Profile' />
            </ListItem>
            
            <ListItem component={Link} to='/parent/join-school'>
              <ListItemText primary='Join School' />
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

export default ParentLayout;
