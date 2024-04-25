import { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { createNewSchool } from '../../../../API/APIs';
import { useNavigate } from 'react-router-dom';

const CreateSchool = () => {
  var navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [message, setMessage] = useState('');

  const token = useSelector((state) => state.auth.jwt);
  const payload = {
    school: {
      name: name,
      address: address,
      contactDetails: contactDetails,
    },
    token: token,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to create school endpoint
      const response = await createNewSchool(payload);
      const school = await response.json();
      navigate('/admin/profile');

      console.log(school);
    } catch (error) {
      // Handle error if request fails
      setMessage('Failed to create school');
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Create School
      </Typography>
      {message && <Typography variant='body1'>{message}</Typography>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Name'
              variant='outlined'
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Address'
              variant='outlined'
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Contact Details'
              variant='outlined'
              fullWidth
              value={contactDetails}
              onChange={(e) => setContactDetails(e.target.value)}
              required
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={{ mt: 2 }}
        >
          Create School
        </Button>
      </form>
    </Container>
  );
};

export default CreateSchool;
