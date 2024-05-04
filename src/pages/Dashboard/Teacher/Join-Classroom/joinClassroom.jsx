// import  { useState, useEffect } from 'react';
// import { Select, MenuItem, Typography, Container, Button } from '@mui/material';
// import { listClassroom,joinClassroomTeacher } from '../../../../API/APIs';
// import { useSelector } from 'react-redux';

// const ListClassrooms = () => {
//   const token = useSelector((state) => state.auth.jwt);
//   const [classrooms, setClassrooms] = useState([]);
//   const [selectedClassrooms, setSelectedClassrooms] = useState([]);
//   const [selectedIds, setSelectedIds] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const payload = {
//           token: token,
//         };
//         const res = await listClassroom(payload);
//         const list = await res.json();
//         setClassrooms(list);
//       } catch (error) {
//         console.error('Error fetching classrooms:', error);
//       }
//     };

//     fetchData();
//   }, [token]);

//   const handleClassroomSelect = (event) => {
//     setSelectedClassrooms(event.target.value);
//     setSelectedIds(event.target.value.map((value) => classrooms.find((classroom) => classroom.classroom === value)._id));
//   };

//   const handleSubmit =async () => {
//     console.log(selectedIds);
//     // You can perform further actions here with the selectedIds

//     const payload={
//         joinPayload:{
//             classroomId:selectedIds[0]
//         },
//         token:token
//     }
//     await joinClassroomTeacher(payload); 
//   };

//   return (
//     <Container maxWidth='sm'>
//       <Typography variant='h4' align='center' gutterBottom>
//         Select Classrooms
//       </Typography>
//       <Select
//         fullWidth
//         multiple
//         value={selectedClassrooms}
//         onChange={handleClassroomSelect}
//         renderValue={(selected) => selected.join(', ')}
//       >
//         {classrooms.map((classroom) => (
//           <MenuItem key={classroom._id} value={classroom.classroom}>
//             {classroom.classroom}
//           </MenuItem>
//         ))}
//       </Select>
//       <Button variant='contained' color='primary' onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Container>
//   );
// };

// export default ListClassrooms;
import { useState, useEffect } from 'react';
import { Select, MenuItem, Typography, Container, Button } from '@mui/material';
import { listClassroom, joinClassroomTeacher } from '../../../../API/APIs';
import { useSelector } from 'react-redux';

const ListClassrooms = () => {
  const token = useSelector((state) => state.auth.jwt);
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState('');
  const [selectedId, setSelectedId] = useState('');

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
    setSelectedClassroom(event.target.value);
    const selectedClassroomId = event.target.value ? classrooms.find((classroom) => classroom.classroom === event.target.value)._id : '';
    setSelectedId(selectedClassroomId);
  };

  const handleSubmit = async () => {
    try {
      // console.log(selectedId);
      // You can perform further actions here with the selectedId
        if(!selectedId){
            throw new Error("Select Classroom to Join")
        }
      const payload = {
        joinPayload: {
          classroomId: selectedId
        },
        token: token
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
      <Typography variant='h4' align='center' gutterBottom>
        Select Classroom
      </Typography>
      <Select
        fullWidth
        value={selectedClassroom}
        onChange={handleClassroomSelect}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
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
