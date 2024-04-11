import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { login } from '../../API/APIs';

function Login() {
  const [user, setUser] = useState({});

  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const payload = {
      email: user.email,
      password: user.password,
    };
    login(payload);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <TextField
          name='email'
          label='Email'
          variant='outlined'
          onChange={handler}
          fullWidth
          margin='normal'
        />
        <TextField
          name='password'
          label='Password'
          variant='outlined'
          type='password'
          fullWidth
          onChange={handler}
          margin='normal'
        />
        <Button
          onClick={loginHandler}
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
