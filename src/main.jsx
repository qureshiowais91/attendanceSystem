import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import ResetPassword from './pages/auth/forgotpassword';
import LandingPage from './pages/Home/index';
import Dashboard from './pages/Dashboard/Dashboard';

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
      </Route>
      <Route path='/school/dashboard' element={<Dashboard />} />
    </React.Fragment>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
);
