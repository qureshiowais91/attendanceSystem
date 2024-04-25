/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import ResetPassword from './pages/auth/forgotpassword';
import LandingPage from './pages/Home/index';
// import Dashboard from './pages/Dashboard/Dashboard';
import OTPValidation from './pages/auth/otpvalidation';
import Profile from './pages/Profile/profile';

// import ProtectedLayout from './components/Layout/AdminLayout';

import { Provider } from 'react-redux';
import { store } from './services/app/store';

// import ProtectedRoute from './components/protectRoute';

import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import ViewMembershipRequestsComponent from './components/UI/Request/viewRequests';
import AdminLayout from './components/Layout/AdminLayout';
import ParentLayout from './components/Layout/ParentLayout';
import TeacherLayout from './components/Layout/TeacherLayout';
import JoinByInviteCode from './components/UI/join-school/JoinByInviteCode';
import GenerateInviteCode from './pages/Dashboard/Admin/generateInviteCode';
import CreateSchool from './pages/Dashboard/Admin/CreateSchool/CreateSchool';
// import Scanner from './components/Scanner/Scanner';

// eslint-disable-next-line react-refresh/only-export-components
const PrivateRoute = ({ element, allowedRoles }) => {
  // Replace this with your actual authentication logic
  const userRole = 'admin'; // Example: 'admin', 'teacher', or 'parent'
  const isAuthorized = allowedRoles.includes(userRole);

  return isAuthorized ? element : <Navigate to='/unauthorized' replace />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ResetPassword />} />
        <Route path='/validateOtp' element={<OTPValidation />} />
      </Route>
      <Route path='/admin/' element={<AdminLayout />}>
        <Route path='/admin/profile' element={<Profile />} />
        <Route
          path='/admin/request'
          element={
            <PrivateRoute
              element={<ViewMembershipRequestsComponent />}
              allowedRoles={['admin']}
            />
          }
          allowedRoles={['admin']}
        />
        <Route
          path='/admin/generateInviteCode'
          element={<GenerateInviteCode />}
        />
        <Route path='/admin/createNewSchool' element={<CreateSchool />} />
      </Route>
      <Route path='/parent/' element={<ParentLayout />}>
        <Route path='/parent/profile' element={<Profile />} />
        <Route path='/parent/join-school' element={<JoinByInviteCode />} />
      </Route>
      <Route path='/teacher/' element={<TeacherLayout />}>
        <Route path='/teacher/profile' element={<Profile />} />
        <Route path='/teacher/join-school' element={<JoinByInviteCode />} />
      </Route>
    </React.Fragment>
  )
);

// Render the app with hooks
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
