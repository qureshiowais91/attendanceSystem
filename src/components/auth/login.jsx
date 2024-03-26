import { TextField, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Login() {
  const handler = () => {
    console.log('qweqwe');
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <TextField label='Email' variant='outlined' fullWidth margin='normal' />
        <TextField
          label='Password'
          variant='outlined'
          type='password'
          fullWidth
          margin='normal'
        />
        <Button
          onClick={handler}
          variant='contained'
          color='primary'
          fullWidth
          size='large'
          sx={{ mt: 2 }}
        >
        <NavLink to='/dashboard'>Login</NavLink>  
        </Button>
      </form>
    </div>
  );
}

export default Login;
