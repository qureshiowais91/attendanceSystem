import { useState } from 'react';
import { joinbyInviteCode } from '../../../API/APIs';
import { useSelector } from 'react-redux';

const JoinByInviteCode = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);
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
   const joinData = await joinbyInviteCode(payload);
   const schoolUser = joinData.json();
   console.log(schoolUser);
  };

  const handleJoin = () => {
    // Example: Process joining with the invite code
    if (isValidCode) {
      alert(`Joining with invite code: ${inviteCode}`);
      // Add your join logic here
    } else {
      alert('Please enter a valid invite code.');
    }
  };

  return (
    <div>
      <h1>Join by Invite Code</h1>
      <input
        type='text'
        placeholder='Enter invite code...'
        value={inviteCode}
        onChange={handleInviteCodeInput}
      />
      <button onClick={handleJoin}>Join</button>
      {isValidCode ? (
        <p>Valid invite code entered: {inviteCode}</p>
      ) : (
        <p>Please enter a valid invite code.</p>
      )}
    </div>
  );
};

export default JoinByInviteCode;
