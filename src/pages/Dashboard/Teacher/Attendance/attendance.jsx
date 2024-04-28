import { useRef, useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  CircularProgress,
} from '@mui/material';
import ClassSelector from '../../../../components/UI/ClassroomSelect/ClassroomSelect';
import { getStudentsByClassroom } from '../../../../API/APIs';
import { useSelector } from 'react-redux';

const AttendanceComponent = () => {
  const attendanceListRef = useRef([]);
  const loadingRef = useRef(true); // Loading state for API call
  const token = useSelector((state) => state.auth.jwt); // Assuming auth.jwt is the token in your Redux state
  const [students, setStudents] = useState([]);

  const onClassSelect = (classroomId) => {
    (async () => {
      attendanceListRef.current = [];
      const payload = { token, classroomId: classroomId };
      const res = await getStudentsByClassroom(payload);
      const studentList = await res.json();

      setStudents(() => studentList.students);
      if (students) {
        loadingRef.current = false;
        console.log(students);
      }
    })();
  };

  const handleAttendanceChange = (studentId, status) => {
    const updatedAttendance = attendanceListRef.current.filter(
      (item) => item.studentId !== studentId
    );
    attendanceListRef.current = [...updatedAttendance, { studentId, status }];
  };

  const handleSubmitAttendance = () => {
    console.log(attendanceListRef.current);
  };

  return (
    <Box p={2}>
      <ClassSelector onClassSelect={onClassSelect} />
      {loadingRef.current ? (
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
          <Typography variant='h6'>Students:</Typography>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <Select
        value={''}
        onChange={(e) => handleAttendanceChange(e.target.value, 'absent')}
        displayEmpty
        MenuProps={{ PaperProps: { style: { maxHeight: 300 } } }} // Set max height for the dropdown menu
      >
        <MenuItem value='' disabled>
          Select Status
        </MenuItem>
        {students.map((student) => (
          <MenuItem key={student._id} value={student._id}>
            {student.name} - Absent
          </MenuItem>
        ))}
      </Select>
    </FormControl> 
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmitAttendance}
          >
            Submit Attendance
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AttendanceComponent;
