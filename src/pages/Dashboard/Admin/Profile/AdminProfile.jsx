import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useEffect, useState } from 'react';
import { profile } from '../../../../API/APIs';
import { useSelector } from 'react-redux';

const AdminProfile = () => {
  const token = useSelector((state) => state.auth.jwt);
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await profile(token);
        const userData = await res.json();
        setUser(userData);
        console.log(userData);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  const cardStyle = {
    margin: '16px',
    padding: '20px',
    borderRadius: '8px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    textAlign: 'left', // Align label text to the left
  };

  const infoStyle = {
    marginBottom: '8px',
    padding: '2px',
  };
  return (
    <>
      <Typography variant='h5' gutterBottom>
        Admin Profile
      </Typography>
      <Card style={cardStyle}>
        <CardContent>
          <div style={infoStyle}>
            <Typography variant='body1' style={labelStyle}>
              Email
            </Typography>
            <Typography variant='body1'>{user.email}</Typography>
          </div>
          <div style={infoStyle}>
            <Typography variant='body1' style={labelStyle}>
              Phone Number
            </Typography>
            <Typography variant='body1'>{user.phonenumber}</Typography>
          </div>
          <div style={infoStyle}>
            <Typography variant='body1' style={labelStyle}>
              Verified
            </Typography>
            <Typography variant='body1'>
              {user.verified ? 'Yes' : 'No'}
            </Typography>
          </div>
          <div style={infoStyle}>
            <Typography variant='body1' style={labelStyle}>
              School
            </Typography>
            <Typography variant='body1'>
              {user.school ? user.school.name : 'N/A'}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminProfile;
