import { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { resetpassword } from '../../API/APIs';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const email = useSelector((state) => state.otp.email);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      newpassword: password,
    };

    // Check if the passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const res = await resetpassword(payload);
      console.log(res);
      const isReset = await res.json();
      console.log(isReset);
      // Check the response for success or failure
      if (isReset['success']) {
        // Password reset successful, display success message or redirect to login page
        console.log('Password reset successful');
        setMessage('Password reset successful');
      } else {
        // Password reset failed, display error message to the user
        setMessage(res.message || 'Password reset failed');
      }
    } catch (error) {
      // Handle any network errors or unexpected exceptions
      setMessage('An error occurred. Please try again later.');
      console.error('Password reset error:', error);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' align='center'>
        Reset Password
      </Typography>
      {message && <Typography color='error'>{message}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label='New Password'
          type='password'
          value={password}
          onChange={handlePasswordChange}
          margin='normal'
          variant='outlined'
          required
          fullWidth
        />
        <TextField
          label='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          margin='normal'
          variant='outlined'
          required
          fullWidth
        />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          Reset Password
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;
