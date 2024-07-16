import  { useState } from 'react';
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
  Collapse,
} from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import { themeChanger } from '../../features/theme/themeSlice';
import { useSelector } from 'react-redux';
import DarkTheme from '../../styles/Theme/Dark';
import LightTheme from '../../styles/Theme/Light';
import { ThemeProvider } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function TeacherLayout() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const darkMode = useSelector((state) => state.theme.darkMode);

  const [openMenu, setOpenMenu] = useState({
    classManagement: false,
    attendance: false,
    communication: false,
    studentInformation: false,
    curriculum: false,
    dataReports: false,
    professionalDevelopment: false,
  });

  const handleClick = (category) => {
    setOpenMenu((prevOpenMenu) => ({
      ...prevOpenMenu,
      [category]: !prevOpenMenu[category],
    }));
  };

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
            <ListItem component={Link} to='/teacher/profile' onClick={handleDrawerClose}>
              <ListItemText primary='Profile' />
            </ListItem>

            {/* Class Management */}
            <ListItem button onClick={() => handleClick('classManagement')}>
              <ListItemText primary='Class Management' />
              {openMenu.classManagement ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.classManagement} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/lesson-planning'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Lesson Planner' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/assignments-grading'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Assignments and Grading' />
                </ListItem>
              </List>
            </Collapse>

            {/* Attendance */}
            <ListItem button onClick={() => handleClick('attendance')}>
              <ListItemText primary='Attendance' />
              {openMenu.attendance ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.attendance} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/attendance'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Record Student Attendance' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/view-attendance-reports'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='View Attendance Reports' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/late-arrival-alerts'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Receive Late Arrival Alerts' />
                </ListItem>
              </List>
            </Collapse>

            {/* Communication */}
            <ListItem button onClick={() => handleClick('communication')}>
              <ListItemText primary='Communication' />
              {openMenu.communication ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.communication} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/messaging-parents'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Messaging with Parents' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/schedule-meetings'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Schedule Parent-Teacher Meetings' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/school-announcements'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='School Announcements' />
                </ListItem>
              </List>
            </Collapse>

            {/* Student Information */}
            <ListItem button onClick={() => handleClick('studentInformation')}>
              <ListItemText primary='Student Information' />
              {openMenu.studentInformation ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.studentInformation} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/access-student-profiles'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Access Student Profiles' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/view-academic-records'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='View Academic Records' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/monitor-progress'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Monitor Progress and Assessments' />
                </ListItem>
              </List>
            </Collapse>

            {/* Curriculum */}
            <ListItem button onClick={() => handleClick('curriculum')}>
              <ListItemText primary='Curriculum' />
              {openMenu.curriculum ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.curriculum} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/course-catalog'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Course Catalog' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/curriculum-mapping'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Curriculum Mapping' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/exam-schedule'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Exam Schedule' />
                </ListItem>
              </List>
            </Collapse>

            {/* Data and Reports */}
            <ListItem button onClick={() => handleClick('dataReports')}>
              <ListItemText primary='Data and Reports' />
              {openMenu.dataReports ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.dataReports} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/generate-reports'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Generate Student Reports' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/analyze-performance'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Analyze Academic Performance' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/assessment-results'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Assessment Results' />
                </ListItem>
              </List>
            </Collapse>

            {/* Professional Development */}
            <ListItem button onClick={() => handleClick('professionalDevelopment')}>
              <ListItemText primary='Professional Development' />
              {openMenu.professionalDevelopment ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.professionalDevelopment} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/training-workshops'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Training and Workshops' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/continuing-education'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Continuing Education' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/teacher/certification-tracking'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Certification Tracking' />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={() => handleClick('settings')}>
  <ListItemText primary='Settings' />
  {openMenu.settings ? <ExpandLess /> : <ExpandMore />}
</ListItem>
<Collapse in={openMenu.settings} timeout='auto' unmountOnExit>
  <List component='div' disablePadding>
    <ListItem
      button
      component={Link}
      to='/teacher/join-school'
      onClick={handleDrawerClose}
      style={{ paddingLeft: '30px' }}
    >
      <ListItemText primary='Join School' />
    </ListItem>
    <ListItem
      button
      component={Link}
      to='/teacher/account-settings'
      onClick={handleDrawerClose}
      style={{ paddingLeft: '30px' }}
    >
      <ListItemText primary='Account Settings' />
    </ListItem>
    <ListItem
      button
      component={Link}
      to='/teacher/classroom-settings'
      onClick={handleDrawerClose}
      style={{ paddingLeft: '30px' }}
    >
      <ListItemText primary='Classroom Settings' />
    </ListItem>
    <ListItem
      button
      component={Link}
      to='/teacher/notification-preferences'
      onClick={handleDrawerClose}
      style={{ paddingLeft: '30px' }}
    >
      <ListItemText primary='Notification Preferences' />
    </ListItem>
    <ListItem
      button
      component={Link}
      to='/teacher/help-support'
      onClick={handleDrawerClose}
      style={{ paddingLeft: '30px' }}
    >
      <ListItemText primary='Help & Support' />
    </ListItem>
  </List>
</Collapse>


            {/* Dark Mode Toggle */}
            <ListItem>
              <ThemeToggleButton
                toggleDarkMode={() => {
                  dispatch(themeChanger({ darkMode: true }));
                }}
              />
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

export default TeacherLayout;
