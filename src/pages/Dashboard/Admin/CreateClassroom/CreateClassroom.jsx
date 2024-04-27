import { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { createClassroom } from '../../../../API/APIs'; // Assuming you have an API function for creating a classroom
import { useSelector } from 'react-redux';

const CreateClassroomForm = () => {
  const [classroom, setClassroom] = useState({});
  const token = useSelector((state) => state.auth.jwt);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassroom((prevClassroom) => ({
      ...prevClassroom,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        token: token,
        classroom: classroom,
      };

      const res = await createClassroom(payload); // Call the API function to create a classroom
      const isDone = await res.json();

      if (isDone.message === 'Classroom created successfully') {
        alert('Classroom created successfully');
        setClassroom({ name: '' }); // Reset form fields after successful creation
      }
    } catch (error) {
      alert('Error creating classroom:', error);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' align='center' gutterBottom>
        Create Classroom
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='classroom'
              name='classroom'
              value={classroom.classroom}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' color='primary' type='submit'>
              Create Classroom
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateClassroomForm;
