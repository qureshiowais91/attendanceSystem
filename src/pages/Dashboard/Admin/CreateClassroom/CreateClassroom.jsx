import { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Alert,
  CircularProgress,
} from '@mui/material';
import { createClassroom } from '../../../../API/APIs'; // Assuming you have an API function for creating a classroom
import { useSelector } from 'react-redux';

const CreateClassroomForm = () => {
  const [classroom, setClassroom] = useState({});

  const [Loading, setLoading] = useState();
  const [error, setError] = useState();
  const [res, setRes] = useState();
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
      setLoading(true);

      const payload = {
        token: token,
        classroom: classroom,
      };

      const res = await createClassroom(payload); // Call the API function to create a classroom
      const isDone = await res.json();

      if (isDone.message === 'Classroom created successfully') {
        setRes('Classroom created successfully');
        setClassroom({ name: '' }); // Reset form fields after successful creation
      }
    } catch (error) {
      setError(error);
      alert('Error creating classroom:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth='sm'>
      {res && <Alert severity='info'>{res}</Alert>}
      {error && <Alert severity='error'>{error}</Alert>}
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
            {Loading ? (
              <CircularProgress size={24} />
            ) : (
              <Button variant='contained' color='primary' type='submit'>
                Create Classroom
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateClassroomForm;
