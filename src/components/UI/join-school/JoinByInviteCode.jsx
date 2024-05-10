import { useState } from 'react';
import { joinbyInviteCode } from '../../../API/APIs';
import { useSelector } from 'react-redux';
import { CircularProgress, Alert } from '@mui/material';

const JoinByInviteCode = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);
  const [Loading, setLoading] = useState();
  const [res, setRes] = useState();
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

    // Example: Validate the invite code (replace with your validation logic)
    const isValid = value.trim() !== ''; // Validate if the code is not empty
    setIsValidCode(isValid);
  };

  const handleJoin = async () => {
    try {
      setLoading(true);
      if (isValidCode) {
        const joinData = await joinbyInviteCode(payload);
        const schoolUser = await joinData.json();
        if (schoolUser?.inviteCode === inviteCode) {
          setRes('Joined A School SuccessFully');
        }
        // Add your join logic here
      } else {
        alert('Please enter a valid invite code.');
      }
    } catch (error) {
      alert(error);
    } finally {
      // Add any cleanup logic here if needed
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Join by Invite Code</h1>
      {res && <Alert severity='success'>{res}</Alert>}
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
