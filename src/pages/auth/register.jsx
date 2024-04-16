/* eslint-disable no-dupe-keys */
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { register } from '../../API/APIs';

function Register() {
  const [user, setUser] = useState({});
  const [role, setRole] = useState('parent');

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password || !user.confirmpassword) {
      alert('Please fill in all fields');
    } else if (user.password !== user.confirmpassword) {
      alert('Passwords do not match');
    } else {
      const payload = {
        email: user.email,
        password: user.password,
        role: role,
      };
      const res = await register(payload);
      const success = await res.json();
      if (success) {
        alert(success.message);
      }
    }
  };

  return (
    <div >
      <img width="200px" height="200px" src='/register_1.svg'></img>
      <form>
        <TextField
          label='Email'
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
        <TextField
          label='Confirm Password'
          variant='outlined'
          type='password'
          name='confirmpassword'
          fullWidth
          onChange={handleInputChange}
          margin='normal'
        />
        <FormControl fullWidth margin='normal'>
          <InputLabel id='role-label'>I Am A</InputLabel>
          <Select
            labelId='role-label'
            id='role-select'
            value={role}
            onChange={handleRoleChange}
          >
            <MenuItem value='parent'>Parent</MenuItem>
            <MenuItem value='teacher'>Teacher</MenuItem>
          </Select>
        </FormControl>
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
