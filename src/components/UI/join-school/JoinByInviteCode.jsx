import { useState } from 'react';
import { joinbyInviteCode } from '../../../API/APIs';
import { useSelector } from 'react-redux';
import { CircularProgress, Alert, Box, Button, TextField } from '@mui/material';

const JoinByInviteCode = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [Loading, setLoading] = useState();
  const [res, setRes] = useState();
  const [error, setError] = useState();
  const token = useSelector((state) => {
    return state.auth.jwt;
  });

  const payload = {
    token: token,
    inviteCode: inviteCode,
  };

  const handleInviteCodeInput = async (e) => {
    const value = e.target.value;
    setInviteCode(value);
  };

  const handleJoin = async () => {
    try {
      setLoading(true);
      const joinData = await joinbyInviteCode(payload);
      const schoolUser = await joinData.json();
      console.log(schoolUser);
      if (schoolUser?.inviteCode === inviteCode) {
        setRes('Joined A School SuccessFully');
        setError(false);
      } else {
        setError(schoolUser['error']);
        setRes(false);
      }
    } catch (error) {
      console.log(error);
      setRes(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {res && <Alert severity='success'>{res}</Alert>}
      {error && <Alert severity='warning'>{error}</Alert>}
      <h2 >Join by Invite Code</h2>

      <TextField
        type='text'
        placeholder='Tap To Enter Code...'
        value={inviteCode}
        onChange={handleInviteCodeInput}
        variant='filled'
      />
      {Loading ? (
        <CircularProgress size={24} />
      ) : (
        <Box mt={4} >
          <Button onClick={handleJoin} variant='outlined'>
            Join
          </Button>
        </Box>
        // <button onClick={handleJoin}>Join</button>
      )}
    </Box>
  );
};

export default JoinByInviteCode;
