import { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from '@mui/material';
import { addStudent, joinClassroom } from '../../../../API/APIs';
import { useSelector } from 'react-redux';
import ClassSelector from '../../../../components/UI/ClassroomSelect/ClassroomSelect';

const StudentDetailsForm = () => {
  const token = useSelector((state) => state.auth.jwt);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [student, setStudent] = useState({
    name: '',
    birthdate: '',
  });
  const [classroomId, setClassroomId] = useState();

  const handleChange = (e) => {
    console.log(student);
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      student: student,
      token: token,
    };

    try {
      setLoading(true);

      // Create new Student
      const res = await addStudent(payload);
      const isDone = await res.json();

      // Add Student to Classroom if student creation is successful
      if (isDone.message === 'Student added successfully') {
        const joinPayload = {
          studentId: isDone.newStudent._id,
          classroomId: classroomId,
        };
        const payload = {
          joinPayload: joinPayload,
          token: token,
        };

        const joined = await joinClassroom(payload);
        await joined.json();
        alert('Student added successfully');
      } else {
        throw new Error('Failed to add student');
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
      setStudent({
        name: '',
        birthdate: '',
      });
    }
    // Reset form fields after submission
  };
  return (
    <Container maxWidth='sm'>
      {error ? (
        <Typography variant='body1'>
          Did not join a school? Contact school admin to add classrooms.
        </Typography>
      ) : (
        <>
          <Typography variant='h4' align='center' gutterBottom>
            Add Student
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Name'
                  name='name'
                  value={student.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Birthdate'
                  name='birthdate'
                  type='date'
                  value={student.birthdate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{
                    max: new Date().toISOString().split('T')[0], // Set max date to today
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <ClassSelector onClassSelect={setClassroomId}></ClassSelector>
              </Grid>
              <Grid item xs={12}>
                {loading ? (
                  <CircularProgress size={24} />
                ) : (
                  <Button variant='contained' color='primary' type='submit'>
                    Submit
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </>
      )}
    </Container>
  );
};

export default StudentDetailsForm;
