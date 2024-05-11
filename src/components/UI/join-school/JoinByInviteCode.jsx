import { useState } from 'react';
import { joinbyInviteCode } from '../../../API/APIs';
import { useSelector } from 'react-redux';
import { CircularProgress, Alert } from '@mui/material';

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
    <div>
      <h1>Join by Invite Code</h1>
      {res && <Alert severity='success'>{res}</Alert>}
      {error && <Alert severity='warning'>{error}</Alert>}
      <input
        type='text'
        placeholder='Enter invite code...'
        value={inviteCode}
        onChange={handleInviteCodeInput}
      />
      {Loading ? (
        <CircularProgress size={24} />
      ) : (
        <button onClick={handleJoin}>Join</button>
      )}
    </div>
  );
};

export default JoinByInviteCode;
