import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  Alert
} from '@mui/material';
import ClassSelector from '../../../../components/UI/ClassroomSelect/ClassroomSelect';
import { getStudentsByClassroom, createAttendance } from '../../../../API/APIs';
import { useSelector } from 'react-redux';

const AttendanceComponent = () => {
  const [students, setStudents] = useState([]);
  const token = useSelector((state) => state.auth.jwt);
  const [loading, setLoading] = useState(false);
  const [classroomId, setClassroomId] = useState(false);
  const [resMessage,setResMessage]  = useState();
  // const [error, setError] = useState();

  const onClassSelect = async (classroomId) => {
    setLoading(true);
    try {
      const payload = { token, classroomId };
      const res = await getStudentsByClassroom(payload);
      const studentList = await res.json();
      studentList.students.map((student) => ({
        ...student,
        absent: false, // Assuming initial attendance is set to false (not absent)
      }));
      setClassroomId(() => classroomId);
      setStudents(studentList.students);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student._id === studentId
          ? { ...student, absent: !student.absent }
          : student
      )
    );
  };

  const handleSubmitAttendance = async () => {
    setLoading(true);
    setResMessage();
    const absentStudents = students.filter((student) => student.absent);
    const presentStudents = students.filter((student) => !student.absent);

    const payload = {
      token: token,
      attendance: {
        absents: absentStudents.map((student) => student._id),
        presents: presentStudents.map((student) => student._id),
        classroomId: classroomId,
      },
    };
    // console.log(payload);
    try {
      const res = await createAttendance(payload);
      const attendance = await res.json();
      if (attendance=="Attendance has already been submitted for this classroom today.") {
        setLoading(false);
        console.log(attendance)
        // console.log(attendance);
        setResMessage("Attendance has already been submitted for this classroom today.");
      }
    setLoading(false)
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Box p={2}>
      <ClassSelector onClassSelect={onClassSelect} />
      {resMessage && <Alert severity='info'>{resMessage}</Alert>}
      {loading ? (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          minHeight={200}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box mt={2}>
          <Typography variant='h6'>Students of Selected Class</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell align='right'>Toggle Absent</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell align='right'>
                      <Switch
                        checked={student.absent}
                        onChange={() => handleToggleAttendance(student._id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmitAttendance}
          >
            Mark Attendance
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AttendanceComponent;
