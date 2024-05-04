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
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [role, setRole] = useState('parent');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    // Clear previous errors for the field when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '', confirmpassword: '' };

    if (!user.email || !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(user.email)) {
      newErrors.email = 'Please enter a valid Gmail address';
      valid = false;
    }

    if (!user.password || user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    if (user.password !== user.confirmpassword) {
      newErrors.confirmpassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Prevent registration if form is not valid
    }

    // Proceed with registration logic
    const payload = {
      email: user.email,
      password: user.password,
      role: role,
    };
    const res = await register(payload);
    const loggedin = await res.json();
    console.log(loggedin);

    dispatch(
      userLogin({
        isAuth: loggedin.isAuth,
        jwt: loggedin.token,
        role: loggedin.role,
      })
    );

    if (loggedin.isAuth) {
      if (!loggedin.verified && !user.email.includes('@gmail.com')) {
        alert('Invalid Email');
      } else if (loggedin.role === 'admin') {
        navigate('/admin/createNewSchool');
      } else if (loggedin.role === 'parent') {
        navigate('/parent/profile');
      } else if (loggedin.role === 'teacher') {
        navigate('/teacher/profile');
      }
    } else {
      navigate('/login');
    }
  };  

  return (
    <div>
      <img width='200px' height='200px' src='/register_1.svg' alt='Register' />
      <form>
        <TextField
          label='Email'
          onChange={handleInputChange}
          variant='outlined'
          fullWidth
          margin='normal'
          name='email'
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label='Password'
          name='password'
          variant='outlined'
          type='password'
          fullWidth
          margin='normal'
          onChange={handleInputChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
        <TextField
          label='Confirm Password'
          variant='outlined'
          type='password'
          name='confirmpassword'
          fullWidth
          onChange={handleInputChange}
          margin='normal'
          error={Boolean(errors.confirmpassword)}
          helperText={errors.confirmpassword}
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
