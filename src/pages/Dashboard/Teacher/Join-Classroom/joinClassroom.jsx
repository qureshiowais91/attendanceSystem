import  { useState, useEffect } from 'react';
import { Select, MenuItem, Typography, Container, Button } from '@mui/material';
import { listClassroom,joinClassroomTeacher } from '../../../../API/APIs';
import { useSelector } from 'react-redux';

const ListClassrooms = () => {
  const token = useSelector((state) => state.auth.jwt);
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassrooms, setSelectedClassrooms] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          token: token,
        };
        const res = await listClassroom(payload);
        const list = await res.json();
        setClassrooms(list);
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    };

    fetchData();
  }, [token]);

  const handleClassroomSelect = (event) => {
    setSelectedClassrooms(event.target.value);
    setSelectedIds(event.target.value.map((value) => classrooms.find((classroom) => classroom.classroom === value)._id));
  };

  const handleSubmit =async () => {
    console.log(selectedIds);
    // You can perform further actions here with the selectedIds

    const payload={
        joinPayload:{
            classroomId:selectedIds[0]
        },
        token:token
    }
    await joinClassroomTeacher(payload); 
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' align='center' gutterBottom>
        Select Classrooms
      </Typography>
      <Select
        fullWidth
        value={selectedClassrooms}
        onChange={handleClassroomSelect}
      >
        {classrooms.map((classroom) => (
          <MenuItem key={classroom._id} value={classroom.classroom}>
            {classroom.classroom}
          </MenuItem>
        ))}
      </Select>
      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default ListClassrooms;
