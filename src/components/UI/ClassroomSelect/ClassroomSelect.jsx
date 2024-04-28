/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import useClassList from '../../../hooks/useListClassroom';


// Import the custom hook

const ClassSelector = ({ onClassSelect }) => {
  const [selectedClass, setSelectedClass] = useState('');
  const classrooms = useClassList();

  const handleClassChange = (event) => {
    const { value } = event.target;
    setSelectedClass(()=>value);
    onClassSelect(value); 
  };

  return (
    <Box p={2}>
      <Typography variant='h5' mb={2}>
        Mark Attendance
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Select Class</InputLabel>
        <Select
          value={selectedClass}
          label='Select Class'
          onChange={handleClassChange}
        >
          <MenuItem value=''>Select Class</MenuItem>
          {classrooms.map((cls) => (
            <MenuItem key={cls._id} value={cls._id}>
              {cls.classroom}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ClassSelector;
