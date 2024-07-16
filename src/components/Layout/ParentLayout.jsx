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

  const [openMenu, setOpenMenu] = useState({
    studentInfo: false,
    communication: false,
    attendanceNotifications: false,
    admissionEnrollment: false,
    financialInfo: false,
    curriculumAssessments: false,
    reportsProgress: false,
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
            <ListItem component={Link} to='/parent/profile' onClick={handleDrawerClose}>
              <ListItemText primary='Profile' />
            </ListItem>

            {/* Student Information */}
            <ListItem button onClick={() => handleClick('studentInfo')}>
              <ListItemText primary='Student Information' />
              {openMenu.studentInfo ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.studentInfo} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/parent/view-student-profiles'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='View Student Profiles' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/academic-records'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Academic Records' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/class-assignments'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Class Assignments' />
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
                  to='/parent/messaging-teachers'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Messaging with Teachers' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/schedule-meetings'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Schedule Parent-Teacher Meetings' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/school-announcements'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='School Announcements' />
                </ListItem>
              </List>
            </Collapse>

            {/* Attendance and Notifications */}
            <ListItem button onClick={() => handleClick('attendanceNotifications')}>
              <ListItemText primary='Attendance and Notifications' />
              {openMenu.attendanceNotifications ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.attendanceNotifications} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/parent/view-attendance'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='View Attendance Records' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/receive-notifications'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Receive Absence Notifications' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/late-arrival-alerts'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Late Arrival Alerts' />
                </ListItem>
              </List>
            </Collapse>

            {/* Admission and Enrollment */}
            <ListItem button onClick={() => handleClick('admissionEnrollment')}>
              <ListItemText primary='Admission and Enrollment' />
              {openMenu.admissionEnrollment ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.admissionEnrollment} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/parent/check-admission-status'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Check Admission Status' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/enrollment-updates'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Enrollment Process Updates' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/document-status'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Document Submission Status' />
                </ListItem>
              </List>
            </Collapse>

            {/* Financial Information */}
            <ListItem button onClick={() => handleClick('financialInfo')}>
              <ListItemText primary='Financial Information' />
              {openMenu.financialInfo ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.financialInfo} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/parent/pay-fees'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Pay Fees Online' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/fee-payment-history'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='View Fee Payment History' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/fee-waivers'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Fee Waivers Information' />
                </ListItem>
              </List>
            </Collapse>

            {/* Curriculum and Assessments */}
            <ListItem button onClick={() => handleClick('curriculumAssessments')}>
              <ListItemText primary='Curriculum and Assessments' />
              {openMenu.curriculumAssessments ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.curriculumAssessments} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/parent/course-catalog'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Course Catalog' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/exam-schedule'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Exam Schedule' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/assessment-results'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Student Assessment Results' />
                </ListItem>
              </List>
            </Collapse>

            {/* Reports and Progress */}
            <ListItem button onClick={() => handleClick('reportsProgress')}>
              <ListItemText primary='Reports and Progress' />
              {openMenu.reportsProgress ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.reportsProgress} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/parent/academic-performance'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='View Academic Performance Reports' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/attendance-reports'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Attendance Reports' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/parent/assessment-reports'
                  onClick={handleDrawerClose}
                  style={{ paddingLeft: '30px' }}
                >
                  <ListItemText primary='Assessment Reports' />
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

export default ParentLayout;
