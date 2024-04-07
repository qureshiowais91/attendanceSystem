import { TextField, Button } from '@mui/material';

function ResetPassword() {
  return (
    <div>
      <h2>Forgot Password</h2>
      <form>
        <TextField label='Email' variant='outlined' fullWidth margin='normal' />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          size='large'
          sx={{ mt: 2 }}
        >
          Send Reset Link To Inbox
        </Button>
      </form>
    </div>
  );
}

export default ResetPassword;