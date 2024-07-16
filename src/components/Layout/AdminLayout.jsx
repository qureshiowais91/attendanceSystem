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
import { Outlet, Link, useLocation } from 'react-router-dom';
import { themeChanger } from '../../features/theme/themeSlice';
import { useSelector } from 'react-redux';
import DarkTheme from '../../styles/Theme/Dark';
import LightTheme from '../../styles/Theme/Light';
import { ThemeProvider } from '@mui/material/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FcList } from 'react-icons/fc';
import { VscServerProcess } from 'react-icons/vsc';
import { AiFillDatabase } from 'react-icons/ai';
import { FcMoneyTransfer } from 'react-icons/fc';
import { IoChatboxOutline } from 'react-icons/io5';
import { PiStudentBold } from 'react-icons/pi';
import { TbReportAnalytics } from 'react-icons/tb';
import { SiGoogleclassroom } from "react-icons/si";


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

  const [openMenu, setOpenMenu] = useState({
    attendance: false,
    admission: false,
    dataManagement: false,
    financialManagement: false,
    communication: false,
    academicManagement: false,
    reportsAnalytics: false,
    classroomManagment:false
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
          <ListItem button onClick={() => handleClick('classroomManagement')}>
          <SiGoogleclassroom /><ListItemText primary='Classroom' />
              {openMenu.classroomManagement ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.classroomManagement} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/admin/createClassroom'
                  selected={location.pathname === '/admin/createClassroom'}
                >
                  <ListItemText primary='Create Classroom' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/manageClassroom'
                  selected={location.pathname === '/admin/manageClassroom'}
                >
                  <ListItemText primary='Manage Classrooms' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/generateInviteCode'
                  selected={location.pathname === '/admin/generateInviteCode'}
                >
                  <ListItemText primary='Generate Invite Code' />
                </ListItem>
                {/* Add more classroom management related items as needed */}
              </List>
            </Collapse>

          <List>
            <ListItem button onClick={() => handleClick('attendance')}>
              <FcList />
              <ListItemText primary='Attendance ' />
              {openMenu.attendance ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.attendance} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/admin/recordAttendance'
                  selected={location.pathname === '/admin/recordAttendance'}
                >
                  <ListItemText primary='Record Attendance' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/attendanceDashboard'
                  selected={location.pathname === '/admin/attendanceDashboard'}
                >
                  <ListItemText primary='Attendance Dashboard' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/parentNotificationSettings'
                  selected={
                    location.pathname === '/admin/parentNotificationSettings'
                  }
                >
                  <ListItemText primary='Parent Notification Settings' />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => handleClick('admission')}>
              <VscServerProcess /> <ListItemText primary='Admission Process' />
              {openMenu.admission ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.admission} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/admin/admissionForms'
                  selected={location.pathname === '/admin/admissionForms'}
                >
                  <ListItemText primary='Admission Forms' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/documentUploadVerification'
                  selected={
                    location.pathname === '/admin/documentUploadVerification'
                  }
                >
                  <ListItemText primary='Document Upload and Verification' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/admissionStatusTracking'
                  selected={
                    location.pathname === '/admin/admissionStatusTracking'
                  }
                >
                  <ListItemText primary='Admission Status Tracking' />
                </ListItem>
               
                <ListItem
                  button
                  component={Link}
                  to='/admin/interviewScheduling'
                  selected={location.pathname === '/admin/interviewScheduling'}
                >
                  <ListItemText primary='Interview Scheduling' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/admissionDecisionManagement'
                  selected={
                    location.pathname === '/admin/admissionDecisionManagement'
                  }
                >
                  <ListItemText primary='Admission Decision ' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/enrollmentManagement'
                  selected={location.pathname === '/admin/enrollmentManagement'}
                >
                  <ListItemText primary='Enrollment ' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/waitlistManagement'
                  selected={location.pathname === '/admin/waitlistManagement'}
                >
                  <ListItemText primary='Waitlist ' />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => handleClick('dataManagement')}>
              <AiFillDatabase />
              <ListItemText primary='Data ' />
              {openMenu.dataManagement ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.dataManagement} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <List component='div' disablePadding>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/secureDocumentStorage'
                    selected={
                      location.pathname === '/admin/secureDocumentStorage'
                    }
                  >
                    <ListItemText primary='Secure Document Storage' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/accessControlManagement'
                    selected={
                      location.pathname === '/admin/accessControlManagement'
                    }
                  >
                    <ListItemText primary='Access Control ' />
                  </ListItem>
                </List>

                <List component='div' disablePadding>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/studentProfiles'
                    selected={location.pathname === '/admin/studentProfiles'}
                  >
                    <ListItemText primary='Student Profiles' />
                  </ListItem>

                </List>
                <ListItem
                  button
                  component={Link}
                  to='/admin/dataMigrationTransfers'
                  selected={
                    location.pathname === '/admin/dataMigrationTransfers'
                  }
                >
                  <ListItemText primary='Data Migration for Transfers' />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => handleClick('financialManagement')}>
              <FcMoneyTransfer />
              <ListItemText primary='Financial ' />
              {openMenu.financialManagement ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={openMenu.financialManagement}
              timeout='auto'
              unmountOnExit
            >
              <List component='div' disablePadding>
                <ListItem button>
                  <ListItemText primary='Payroll ' />
                </ListItem>
                <List component='div' disablePadding>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/automatedSalaryCalculation'
                    selected={
                      location.pathname === '/admin/automatedSalaryCalculation'
                    }
                  >
                    <ListItemText primary='Automated Salary Calculation' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/benefitsDeductionsManagement'
                    selected={
                      location.pathname ===
                      '/admin/benefitsDeductionsManagement'
                    }
                  >
                    <ListItemText primary='Benefits and Deductions ' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/timeAttendanceIntegration'
                    selected={
                      location.pathname === '/admin/timeAttendanceIntegration'
                    }
                  >
                    <ListItemText primary='Time and Attendance Integration' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/complianceReporting'
                    selected={
                      location.pathname === '/admin/complianceReporting'
                    }
                  >
                    <ListItemText primary='Compliance Reporting' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/payrollHistoryStatements'
                    selected={
                      location.pathname === '/admin/payrollHistoryStatements'
                    }
                  >
                    <ListItemText primary='Payroll History and Statements' />
                  </ListItem>
                </List>

                <ListItem button>
                  <ListItemText primary='Fee ' />
                </ListItem>
                <List component='div' disablePadding>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/feeCollection'
                    selected={location.pathname === '/admin/feeCollection'}
                  >
                    <ListItemText primary='Fee Collection' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/paymentTracking'
                    selected={location.pathname === '/admin/paymentTracking'}
                  >
                    <ListItemText primary='Payment Tracking' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/feeWaivers'
                    selected={location.pathname === '/admin/feeWaivers'}
                  >
                    <ListItemText primary='Fee Waivers' />
                  </ListItem>
                </List>
              </List>
            </Collapse>

            <ListItem button onClick={() => handleClick('communication')}>
              <IoChatboxOutline />
              <ListItemText primary='Communication' />
              {openMenu.communication ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu.communication} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItem button>
                  <ListItemText primary='Parent-Teacher Communication' />
                </ListItem>
                <List component='div' disablePadding>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/messaging'
                    selected={location.pathname === '/admin/messaging'}
                  >
                    <ListItemText primary='Messaging' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/meetings'
                    selected={location.pathname === '/admin/meetings'}
                  >
                    <ListItemText primary='Meetings' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/announcements'
                    selected={location.pathname === '/admin/announcements'}
                  >
                    <ListItemText primary='Announcements' />
                  </ListItem>
                </List>

                <ListItem button>
                  <ListItemText primary='Internal Communication' />
                </ListItem>
                <List component='div' disablePadding>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/staffCollaboration'
                    selected={location.pathname === '/admin/staffCollaboration'}
                  >
                    <ListItemText primary='Staff Collaboration' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/notifications'
                    selected={location.pathname === '/admin/notifications'}
                  >
                    <ListItemText primary='Notifications' />
                  </ListItem>
                </List>
              </List>
            </Collapse>

            <ListItem button onClick={() => handleClick('academicManagement')}>
              <PiStudentBold />
              <ListItemText primary='Academic ' />
              {openMenu.academicManagement ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={openMenu.academicManagement}
              timeout='auto'
              unmountOnExit
            >
              <List component='div' disablePadding>
                <ListItem button>
                  <ListItemText primary='Curriculum ' />
                </ListItem>

                <ListItem
                  button
                  component={Link}
                  to='/admin/classAssignments'
                  selected={location.pathname === '/admin/classAssignments'}
                >
                  <ListItemText primary='Class Assignments' />
                </ListItem>
                <List component='div' disablePadding>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/courseCatalog'
                    selected={location.pathname === '/admin/courseCatalog'}
                  >
                    <ListItemText primary='Course Catalog' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/lessonPlanning'
                    selected={location.pathname === '/admin/lessonPlanning'}
                  >
                    <ListItemText primary='Lesson Planning' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/curriculumMapping'
                    selected={location.pathname === '/admin/curriculumMapping'}
                  >
                    <ListItemText primary='Curriculum Mapping' />
                  </ListItem>
                </List>

                <ListItem button>
                  <ListItemText primary='Assessment and Grading' />
                </ListItem>
                <List component='div' disablePadding>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/gradebook'
                    selected={location.pathname === '/admin/gradebook'}
                  >
                    <ListItemText primary='Gradebook' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/assessmentCreation'
                    selected={location.pathname === '/admin/assessmentCreation'}
                  >
                    <ListItemText primary='Assessment Creation' />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to='/admin/gradingPolicies'
                    selected={location.pathname === '/admin/gradingPolicies'}
                  >
                    <ListItemText primary='Grading Policies' />
                  </ListItem>
                </List>
              </List>
            </Collapse>

            <ListItem button onClick={() => handleClick('reportsAnalytics')}>
              <TbReportAnalytics />{' '}
              <ListItemText primary='Reports and Analytics' />
              {openMenu.reportsAnalytics ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={openMenu.reportsAnalytics}
              timeout='auto'
              unmountOnExit
            >
              <List component='div' disablePadding>
                <ListItem
                  button
                  component={Link}
                  to='/admin/attendanceReports'
                  selected={location.pathname === '/admin/attendanceReports'}
                >
                  <ListItemText primary='Attendance Reports' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/admissionReports'
                  selected={location.pathname === '/admin/admissionReports'}
                >
                  <ListItemText primary='Admission Reports' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/financialReports'
                  selected={location.pathname === '/admin/financialReports'}
                >
                  <ListItemText primary='Financial Reports' />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to='/admin/academicPerformanceReports'
                  selected={
                    location.pathname === '/admin/academicPerformanceReports'
                  }
                >
                  <ListItemText primary='Academic Performance Reports' />
                </ListItem>
              </List>
            </Collapse>
            
            <ListItem>
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
