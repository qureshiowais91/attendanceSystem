import { useState } from 'react';
import { TextField, Button, CircularProgress, Alert, Box } from '@mui/material';
import { login } from '../../API/APIs';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
// import LogRocket from 'logrocket';

function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [resError, setResError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setError('');
  };
  // LogRocket.identify(user.email, {
  //   email: user.email,
  // });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const payload = {
        email: user.email,
        password: user.password,
      };
      const res = await login(payload);
      const loggedin = await res.json();
      // console.log(loggedin['error']);
      // console.log(loggedin)
      if (loggedin['error']) {
        setResError(
          loggedin['error'] +
            ' Please email projectalphainfotech@gmail.com to request manual verification.'
        );
      }
      // alert(loggedin['error']);
      dispatch(
        userLogin({
          isAuth: loggedin.isAuth,
          jwt: loggedin.token,
          role: loggedin.role,
          id: loggedin._id,
        })
      );
      if (loggedin.isAuth) {
        switch (loggedin.role) {
          case 'admin':
            navigate('/admin/profile');
            break;
          case 'parent':
            navigate('/parent/mychild');
            break;
          case 'teacher':
            navigate('/teacher/profile');
            break;
        }
      } else {
        navigate('/login');
      }
      // console.log({ isAuth: true, jwt: loggedin.token });
    } catch (error) {
      setError('Try Again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mt={2} width={300}>
      <img width='150px' height='150px' src='/login_1.svg'></img>
      {resError && <Alert severity='error'>{resError}</Alert>}
      <form onSubmit={handleLogin}>
        <TextField
          name='email'
          label='Email'
          variant='outlined'
          onChange={handleChange}
          fullWidth
          margin='normal'
        />
        <TextField
          name='password'
          label='Password'
          variant='outlined'
          type='password'
          fullWidth
          onChange={handleChange}
          margin='normal'
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading ? (
          <CircularProgress size={24} />
        ) : (
          <Button
            type='submit'
            variant='outlined'
            color='primary'
            fullWidth
            size='large'
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        )}
      </form>
    </Box>
  );
}

export default Login;
