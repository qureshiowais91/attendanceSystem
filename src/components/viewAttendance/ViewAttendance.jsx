import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { viewattandance } from '../../API/APIs'; // Adjusted function name for consistency
import { useSelector } from 'react-redux';

function ViewAttendance() {
  const [attendance, setAttendance] = useState(false);
  const token = useSelector((state) => state.auth.jwt);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = { token: token };
        const data = await viewattandance(payload);
        const res = await data.json();
        setAttendance(res);
        console.log(attendance);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };  

    fetchData();
  }, [token]);

  const columns = [
    { field: 'presentTotal', headerName: 'Present Total', width: 150 },
    { field: 'absentTotal', headerName: 'Absent Total', width: 150 },
    { field: 'classroom', headerName: 'Classroom', width: 150 },
    // Add more columns as needed
  ];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {attendance ? (
        <DataGrid
          rows={attendance["attendanceSummary"]}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row._id}
        />
      ) : (
        'Loading Report...'
      )}
    </Box>
  );
}

export default ViewAttendance;
