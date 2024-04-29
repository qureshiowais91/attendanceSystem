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
} from '@mui/material';
import ClassSelector from '../../../../components/UI/ClassroomSelect/ClassroomSelect';
import { getStudentsByClassroom, createAttendance } from '../../../../API/APIs';
import { useSelector } from 'react-redux';

const AttendanceComponent = () => {
  const [students, setStudents] = useState([]);
  const token = useSelector((state) => state.auth.jwt);
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(false);

  const onClassSelect = async (classroomId) => {
    setLoading(true);
    const payload = { token, classroomId };
    const res = await getStudentsByClassroom(payload);
    const studentList = await res.json();
    const updatedStudents = studentList.students.map((student) => ({
      ...student,
      absent: false, // Assuming initial attendance is set to false (not absent)
    }));
    setStudents(updatedStudents);
    setLoading(false);
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
    const absentStudents = students.filter((student) => student.absent);
    const presentStudents = students.filter((student) => !student.absent);

    const payload = {
      token: token,
      attendance: {
        absents: absentStudents.map((student) => student._id),
        presents: presentStudents.map((student) => student._id),
        // Add other necessary fields such as date, time, schoolId
      },
    };
    console.log(payload);
    try {
      setTimeout(() => {
        setHidden(false);
      }, 1000 * 60 * 60 * 4);

      const res = await createAttendance(payload);
      const attendance = await res.json();
      if (attendance) {
        console.log(attendance);
      }
      setHidden(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p={2}>
      <ClassSelector onClassSelect={onClassSelect} />
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
            style={{ display: hidden ? 'none' : 'block' }}
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
