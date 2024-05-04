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
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../features/auth/authSlice';

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [role, setRole] = useState('parent');
  const dispatch = useDispatch();

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
      const loggedin = await res.json();
      // console.log(loggedin);
      // console.log(role);

       dispatch(
        userLogin({
          isAuth: loggedin.isAuth,
          jwt: loggedin.token,
          role: loggedin.role,
        })
      );

      if (loggedin.isAuth) {
        if (loggedin.role == 'admin') {
          navigate('/admin/createNewSchool');
        } else if (loggedin.role == 'parent') {
          navigate('/parent/profile');
        } else if (loggedin.role == 'teacher') {
          navigate('/teacher/profile');
        }
      } else {
        navigate('/login');
      }
    }
  };

  return (
    <div>
      <img width='200px' height='200px' src='/register_1.svg'></img>
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
            <MenuItem value='admin'>School Administrator</MenuItem>
            {/* <MenuItem value='student'>Create a Child Profile</MenuItem> */}
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
