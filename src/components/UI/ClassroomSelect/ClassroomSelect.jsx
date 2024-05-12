/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { useSelector } from 'react-redux'; // Assuming you are using Redux for state management
import { listClassroom } from '../../../API/APIs';

// Import the custom hook

const ClassSelector = ({ onClassSelect }) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [classrooms, setClassrooms] = useState([]);
  const token = useSelector((state) => state.auth.jwt);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          token: token,
        };
        const res = await listClassroom(payload);
        const list = await res.json();
        setClassrooms(list);
        setLoading(false);
        setError('');
        if (list === 'schoolId is Missing') {
          console.log(classrooms);
          setLoading(true);
          setError('Join School or Contact Admin To Add Classrooms');
        } else {
          setError('');
        }
      } catch (error) {
        console.error('Error fetching classrooms:', error);
        setLoading(false);
        setError('Error fetching classrooms');
      }
    };

    fetchData();
  }, [token, classrooms]);

  const handleClassChange = (event) => {
    const { value } = event.target;
    setSelectedClass(() => value);
    onClassSelect(value);
  };

  return (
    <Box p={2}>
      <Typography variant='h5' mb={2}>
        Mark Attendance
        {error && <Alert severity='error'>{error}</Alert>}
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Select Class</InputLabel>
        <Select
          value={selectedClass}
          label='Select Class'
          onChange={handleClassChange}
        >
          <MenuItem value=''>Select Class</MenuItem>
          {Loading ? (
            <CircularProgress size={24} />
          ) : (
            classrooms.map((cls) => (
              <MenuItem key={cls._id} value={cls._id}>
                {cls.classroom}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ClassSelector;
