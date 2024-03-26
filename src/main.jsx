import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Register from './components/auth/register';
import Login from './components/auth/login';
import ResetPassword from './components/auth/forgotpassword';
import LandingPage from './components/Home/index';
import Dashboard from './components/Dashboard/Dashboard';
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
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </React.Fragment>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
);
