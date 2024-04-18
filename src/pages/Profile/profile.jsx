import { useState } from 'react';
import { Paper, Typography, Button } from '@mui/material';

const SchoolProfile = () => {
  // Dummy school data
  const [school, setSchool] = useState({
    name: 'ABC School',
    address: '123 Main Street, City, Country',
    contactDetails: 'school@example.com, (123) 456-7890',
  });

  const handleUpdate = () => {
    // Placeholder logic for updating school information
    alert('School information updated!');
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h2" gutterBottom>School Profile</Typography>
      <Typography variant="h4" gutterBottom>Name: {school.name}</Typography>
      <Typography variant="body1" gutterBottom>Address: {school.address}</Typography>
      <Typography variant="body1" gutterBottom>Contact Details: {school.contactDetails}</Typography>
      <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
    </Paper>
  );
};

export default SchoolProfile;
