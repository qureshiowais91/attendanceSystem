/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import ResetPassword from './pages/auth/forgotpassword';
import LandingPage from './pages/Home/index';
import Dashboard from './pages/Dashboard/Dashboard';
import OTPValidation from './pages/auth/otpvalidation';
import Profile from './pages/Profile/profile';

import ProtectedLayout from './components/ProtectedLayout';

import { Provider } from 'react-redux';
import { store } from './services/app/store';

import ProtectedRoute from './components/protectRoute';

import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

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
      <Route path='/user/' element={<ProtectedLayout />}>
        <Route
          path='/user/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path='/user/profile' element={<Profile />} />
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
