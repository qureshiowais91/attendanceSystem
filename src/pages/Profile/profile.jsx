import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import { profile } from '../../API/APIs';
import { useEffect, useState } from 'react';

const SchoolProfile = () => {
  const token = useSelector((state) => {
    return state.auth.jwt;
  });

  // Define state to store the school profile
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch the school profile using the token
        const res = await profile(token);
        // Parse the response as JSON
        const UserData = await res.json();
        // Set the school profile in state
        setUser(UserData);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [token]); // Fetch the profile whenever the token changes

  // Render the school profile if available
  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant='h3' gutterBottom>
        Profile
      </Typography>
      {user && ( // Conditional rendering
        <>
          <Typography variant='h4' gutterBottom>
            Name: {user.school.name}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Address: {user.school.address}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Contact Details: {user.school.contactDetails}
          </Typography>
        </>
      )}
    </Paper>
  );
};

export default SchoolProfile;
