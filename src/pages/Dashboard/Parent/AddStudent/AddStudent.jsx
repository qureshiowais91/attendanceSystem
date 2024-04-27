// import { useState, useEffect } from 'react';
// import { TextField, Button, Grid, Typography, Container } from '@mui/material';
// import { addStudent, listClassroom } from '../../../../API/APIs';
// import { useSelector } from 'react-redux';
// const StudentDetailsForm = () => {
//   const token = useSelector((state) => state.auth.jwt);

//   const [classrooms,setclassroom]  = useState();
//   // const [classrooms, setClassrooms] = useState([]);
//   const [student, setStudent] = useState({
//     name: '',
//     birthdate: '',
//     classRoom: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudent((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       student: student,
//       token: token,
//     };

//     try {
//       const res = await addStudent(payload);
//       const isDone = await res.json();
//       if (isDone.message === 'Student added successfully') {
//         alert('Student added successfully');
//       }
//     } catch (error) {
//       alert(error);
//     }

//     // Handle form submission logic here (e.g., send data to backend)
//     console.log(student);
//   };

//   useEffect(() => {
//     (async () => {
//       const payload = {
//         token: token,
//       };

//       const res = await listClassroom(payload);
//       const list = await res.json();

//       setclassroom(list)
//     })();
//   }, [token]);

//   return (
//     <Container maxWidth='sm'>
//       <Typography variant='h4' align='center' gutterBottom>
//         Add Student
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label='Name'
//               name='name'
//               value={student.name}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label='Birthdate'
//               name='birthdate'
//               type='date'
//               value={student.birthdate}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//               inputProps={{
//                 max: new Date().toISOString().split('T')[0], // Set max date to today
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label='Classroom'
//               name='classRoom'
//               value={student.classRoom}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant='contained' color='primary' type='submit'>
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default StudentDetailsForm;
import  { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import { addStudent, listClassroom } from '../../../../API/APIs';
import { useSelector } from 'react-redux';

const StudentDetailsForm = () => {
  const token = useSelector((state) => state.auth.jwt);

  const [classrooms, setClassrooms] = useState([]);
  const [student, setStudent] = useState({
    name: '',
    birthdate: '',
    classRoom: '',
  });

  const handleChange = (e) => {
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
      // Create new Student 
      const res = await addStudent(payload);
      const isDone = await res.json();
      if (isDone.message === 'Student added successfully') {
        alert('Student added successfully');
      }

      // Add Student to Classroom
      console.log(student.classRoom);
      


    } catch (error) {
      alert(error);
    }

    // Reset form fields after submission
    setStudent({
      name: '',
      birthdate: '',
      classRoom: '',
    });
  };

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

  return (
    <Container maxWidth='sm'>
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
            <TextField
              fullWidth
              select
              label='Classroom'
              name='classRoom'
              value={student.classRoom}
              onChange={handleChange}
              SelectProps={{ native: true }}
            >
              <option value=''></option>
              {classrooms.map((classroom) => (
                <option key={classroom._id} value={classroom._id}>
                  {classroom.classroom}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' color='primary' type='submit'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default StudentDetailsForm;
