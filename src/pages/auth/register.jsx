import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Alert,
  Box,
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
  const [resError, setResError] = useState();
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    phonenumber: '',
    confirmpassword: '',
  });
  const [loading, setLoading] = useState(false); // Added state for loading indicator
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

    // if (!user.email || !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(user.email)) {
    //   newErrors.email = 'Please enter a valid Gmail address';
    //   valid = false;
    // }

    if (!user.password || user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    if (user.password !== user.confirmpassword) {
      newErrors.confirmpassword = 'Passwords do not match';
      valid = false;
    }

    if (user.phonenumber) {
      console.log(user.phonenumber);
    }

    setErrors(newErrors);
    return valid;
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true); // Show loader when submitting

    const payload = {
      email: user.email,
      password: user.password,
      role: role,
      phonenumber: user.phonenumber,
    };

    try {
      const res = await register(payload);
      const loggedin = await res.json();
      console.log('test', loggedin);
      if (loggedin['error']) {
        setResError(loggedin['error']);
      }

      dispatch(
        userLogin({
          isAuth: loggedin.isAuth,
          jwt: loggedin.token,
          role: loggedin.role,
        })
      );

      if (loggedin.isAuth) {
        // for testing only
        // if (loggedin.verified && user.email.includes('@gmail.com'))
        if (loggedin.role === 'admin') {
          navigate('/admin/createNewSchool');
        } else if (loggedin.role === 'parent') {
          navigate('/parent/profile');
        } else if (loggedin.role === 'teacher') {
          navigate('/teacher/profile');
        }
      } else {
        navigate('/register');
      }
    } catch (error) {
      console.error('Error registering:', error);
    } finally {
      setLoading(false); // Hide loader after request completion
    }
  };

  return (
    <Box mt={2} width={300}>
      <img width='150px' height='150px' src='/register_1.svg' alt='Register' />
      {resError && <Alert severity='error'>{resError}</Alert>}
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
          label='Phone Number'
          onChange={handleInputChange}
          variant='outlined'
          fullWidth
          margin='normal'
          name='phonenumber'
          error={Boolean(errors.phonenumber)}
          helperText={errors.phonenumber}
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

        {loading ? (
          <CircularProgress size={24} />
        ) : (
          <Button
            type='submit'
            variant='outlined'
            color='primary'
            fullWidth
            size='large'
            onClick={registerHandler}
          >
            Register
          </Button>
        )}
      </form>
    </Box>
  );
}

export default Register;
