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
import { Outlet, Link, useLocation } from 'react-router-dom';
import { themeChanger } from '../../features/theme/themeSlice';
import { useSelector } from 'react-redux';
import DarkTheme from '../../styles/Theme/Dark';
import LightTheme from '../../styles/Theme/Light';
import { ThemeProvider } from '@mui/material/styles';

function AdminLayout() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation(); // Use useLocation hook to get the current route

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
            <ListItem
              button
              component={Link}
              to='/admin/profile'
              selected={location.pathname === '/admin/profile'}
            >
              <ListItemText primary='Profile' />
            </ListItem>
            <ListItem
              button
              component={Link}
              to='/admin/generateInviteCode'
              selected={location.pathname === '/admin/generateInviteCode'}
            >
              <ListItemText primary='Generate Invite Code' />
            </ListItem>
            <ListItem
              button
              component={Link}
              to='/admin/createclassroom'
              selected={location.pathname === '/admin/createclassroom'}
            >
              <ListItemText primary='Create Classroom' />
            </ListItem>

            <ListItem
              button
              component={Link}
              to='/admin/attendance'
              selected={location.pathname === '/admin/attendance'}
            >
              <ListItemText primary='List Attendance' />
            </ListItem>

            <ListItem
              button
              component={Link}
              to='/admin/staff/attendance'
              selected={location.pathname === '/admin/staff/attendance'}
            >
              <ListItemText primary='Staff Attendance QR' />
            </ListItem>

            <ListItem
              button
              component={Link}
              to='/admin/staff/attendanceList'
              selected={location.pathname === '/admin/staff/attendanceList'}
            >
              <ListItemText primary='View Teacher Profile' />
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

export default AdminLayout;
