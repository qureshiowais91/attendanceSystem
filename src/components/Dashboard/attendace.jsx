/* eslint-disable react/prop-types */
import { Typography, Grid, Paper } from '@mui/material';

// Attendance component
function Attendance({ attendance }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ p: 2, minHeight: '200px' }}>
        <Typography variant='h6' component='h2' gutterBottom>
          Attendance
        </Typography>
        {attendance.map((record, index) => (
          <Typography key={index} variant='body1' gutterBottom>
            Date: {record.date} - Status: {record.status}
          </Typography>
        ))}
      </Paper>
    </Grid>
  );
}

export default Attendance;
