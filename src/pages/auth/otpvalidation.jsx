import { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { validateotp } from '../../API/APIs'; // Assuming you have an API function for OTP verification
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function OTPValidation() {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const email = useSelector((state) => state.otp.email);
  // console.log(email,"redux");
  const inputHandler = (e) => {
    setOTP(e.target.value);
  };

  const verifyHandler = async (e) => {
    e.preventDefault();
    try {
      const isValidOTP = await validateotp({ email: email, otp: otp });
      // const value = true; // Assuming verifyOTP returns a promise resolved with true/false based on OTP verification
      const value = await isValidOTP.json();
      console.log(value, 'value');
      if (value["error"]) {
        setError('Invalid OTP. Please try again.');
        throw new Error('error');
      } else {
        navigate('/resetpassword');
      }
    } catch (error) {
      setError('Error verifying OTP. Please try again.');
    }
  };

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh' }}
    >
      <Grid item xs={6} sm={6} md={8}>
        <form onSubmit={verifyHandler}>
          <img width='200px' height='200px' src='/OTP.svg'></img>

          <TextField
            label='Enter OTP'
            type='text'
            value={otp}
            onChange={inputHandler}
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <Button type='submit' variant='contained' color='primary' fullWidth>
            Reset Password
          </Button>
          {error && (
            <Typography
              variant='body1'
              color='error'
              align='center'
              sx={{ mt: 2 }}
            >
              {error}
            </Typography>
          )}
        </form>
      </Grid>
    </Grid>
  );
}

export default OTPValidation;
