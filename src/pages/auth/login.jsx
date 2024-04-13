import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { login } from '../../API/APIs';

function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

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
      await res.json();
    } catch (error) {
      setError('Try Again');
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
