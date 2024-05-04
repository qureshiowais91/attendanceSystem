import { useState } from 'react';
import { useSelector } from 'react-redux';
import { updateInviteCode } from '../../../API/APIs';

const GenerateInviteCode = () => {
  const token = useSelector((state) => {
    return state.auth.jwt;
  });
  const [inviteCode, setInviteCode] = useState('');
  const inviteCodeLength = 10; // Default length of the invite code
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  const generateInviteCode = async (e) => {
    e.preventDefault();

    let newInviteCode = '';
    for (let i = 0; i < inviteCodeLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newInviteCode += charset[randomIndex];
    }
    setInviteCode(newInviteCode);

    const payload = {
      inviteCode: {"inviteCode" :newInviteCode},
      token: token,
    };

    const res = await updateInviteCode(payload);
    const updateded = await res.json();
    // console.log(updateded);
  };

  return (
    <div>
      <button onClick={generateInviteCode}>Generate Invite Code</button>
      <p>Generated Invite Code: {inviteCode}</p>
    </div>
  );
};

export default GenerateInviteCode;
