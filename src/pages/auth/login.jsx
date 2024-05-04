import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { login } from '../../API/APIs';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector((state) => {
    return state.auth;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setError(''); // Clear any previous error message when user starts typing
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: user.email,
        password: user.password,
      };
      const res = await login(payload);
      const loggedin = await res.json();
      // console.log(loggedin);
      // console.log(role);

      alert(loggedin.message);
      dispatch(
        userLogin({
          isAuth: loggedin.isAuth,
          jwt: loggedin.token,
          role: loggedin.role,
        })
      );
      if (loggedin.isAuth) {
        if (loggedin.role == 'admin') {
          navigate('/admin/profile');
        } else if (loggedin.role == 'parent') {
          navigate('/parent/profile');
        } else if (loggedin.role == 'teacher') {
          navigate('/teacher/profile');
        }
      } else {
        navigate('/login');
      }
      // console.log({ isAuth: true, jwt: loggedin.token });
    } catch (error) {
      setError('Try Again');
    }
  };

  return (
    <div>
      <img width='200px' height='200px' src='/login_1.svg'></img>
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
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          size='large'
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
