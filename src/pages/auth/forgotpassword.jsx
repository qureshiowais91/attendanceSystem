import { TextField, Button } from '@mui/material';
import { resetPassword } from '../../API/APIs';
import { useState } from 'react';
import { otp } from '../../features/one_time_password/one_time_password';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [email, setEmail] = useState(false);

  const inputHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const resetHandler = async (e) => {
    e.preventDefault();
    resetPassword({ email: email });
    dispatch(otp({ email: email }));
    navigate("/validateOtp");
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={resetHandler}>
        <TextField
          label='Email'
          onChange={inputHandler}
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          size='large'
          sx={{ mt: 2 }}
        >
          Send OTP
        </Button>
      </form>
    </div>
  );
}

export default ForgetPassword;
