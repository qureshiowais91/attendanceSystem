import { useState, useEffect } from 'react';
import {
  Select,
  MenuItem,
  Container,
  Button,
  CircularProgress,
  Alert,
  Box,
  FormControl,
  InputLabel,
} from '@mui/material';
import { listClassroom, joinClassroomTeacher } from '../../../../API/APIs';
import { useSelector } from 'react-redux';

const ListClassrooms = () => {
  const token = useSelector((state) => state.auth.jwt);
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [Loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const payload = {
          token: token,
        };
        const res = await listClassroom(payload);
        const list = await res.json();
        setClassrooms(list);
        if (!Array.isArray(list)) {
          setLoading(true);
          setError('Join School First or School Did Not Created Any Classroom');
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    };
    fetchData();
  }, [token]);

  const handleClassroomSelect = (event) => {
    setSelectedClassroom(event.target.value);
    const selectedClassroomId = event.target.value
      ? classrooms.find(
          (classroom) => classroom.classroom === event.target.value
        )._id
      : '';
    setSelectedId(selectedClassroomId);
  };

  const handleSubmit = async () => {
    try {
      // console.log(selectedId);
      // You can perform further actions here with the selectedId
      if (!selectedId) {
        throw new Error('Select Classroom to Join');
      }
      const payload = {
        joinPayload: {
          classroomId: selectedId,
        },
        token: token,
      };
      await joinClassroomTeacher(payload);

      // Display alert if no errors
      alert('Successfully joined classroom!');
    } catch (error) {
      console.error('Error joining classroom:', error);
      // Handle error here (e.g., display error message)
      alert(error);
    }
  };

  return (
    <Container maxWidth='sm'>
      <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
        {/* <Typography variant='h4' align='center' gutterBottom>
          Select Classroom
        </Typography> */}
        {error && <Alert severity='error'>{error}</Alert>}

        <InputLabel id='classroom'>Select Classroom</InputLabel>
        <Select
          labelId='classroom'
          fullWidth
          value={selectedClassroom}
          onChange={handleClassroomSelect}
        >
          <MenuItem value='Select Classroom'>
            <em>Select Classroom</em>
          </MenuItem>
          {Loading ? (
            <CircularProgress size={24} />
          ) : (
            classrooms.map((classroom) => (
              <MenuItem key={classroom._id} value={classroom.classroom}>
                {classroom.classroom}
              </MenuItem>
            ))
          )}
        </Select>
        {Loading ? (
          <CircularProgress size={24} />
        ) : (
          <Box mt={2}>
            <Button variant='outlined' color='primary' onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        )}
      </FormControl>
    </Container>
  );
};

export default ListClassrooms;
