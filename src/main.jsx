/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import ResetPassword from './pages/auth/forgotpassword';
import LandingPage from './pages/Home/index';
import Dashboard from './pages/Dashboard/Dashboard';

import DarkTheme from './styles/Theme/Dark';
// import LightTheme  from './styles/Theme/Light';
import {  ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from './services/app/store';
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

// const [darkMode, setDarkMode] = useState(false);

// const toggleDarkMode = () => {
//   setDarkMode(prevMode => !prevMode);
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={DarkTheme}>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </ThemeProvider>
);
