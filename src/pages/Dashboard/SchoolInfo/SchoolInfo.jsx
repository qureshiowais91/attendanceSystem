import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography, CircularProgress } from '@mui/material';
import { profile } from '../../../API/APIs';

const SchoolInfo = () => {
  const token = useSelector((state) => state.auth.jwt);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await profile(token);
        const userData = await res.json();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  return (
    <Paper
      elevation={3}
      style={{ padding: '16px', maxWidth: '600px', margin: 'auto' }}
    >
      <Typography variant='h4' gutterBottom>
        My School
      </Typography>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100px',
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          {user && user.school ? (
            <>
              <Typography variant='h5' gutterBottom>
                {user.school.name}
              </Typography>
              <Typography variant='body1' gutterBottom>
                {user.school.address}
              </Typography>
              <Typography variant='body1' gutterBottom>
                {user.school.contactDetails}
              </Typography>
            </>
          ) : (
            <Typography variant='body1' gutterBottom>
              You Are A {user && user.role ? user.role : 'User'}
            </Typography>
          )}
        </>
      )}
    </Paper>
  );
};

export default SchoolInfo;
