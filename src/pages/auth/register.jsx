/* eslint-disable no-dupe-keys */
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { register } from '../../API/APIs';

function Register() {
  const [user, setUser] = useState({});

  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(user);
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (user.password === user.confirmpassword) {
      const payload = {
        email: user.email,
        password: user.password,
        role: 'teacher',
      };
      register(payload);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <TextField
          label='Email'
          onChange={handler}
          variant='outlined'
          fullWidth
          margin='normal'
          name='email'
        />
        <TextField
          label='Password'
          name='password'
          variant='outlined'
          type='password'
          fullWidth
          margin='normal'
          onChange={handler}
        />
        <TextField
          label='Confirm Password'
          variant='outlined'
          type='password'
          name='confirmpassword'
          fullWidth
          onChange={handler}
          margin='normal'
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          size='large'
          onClick={registerHandler}
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
