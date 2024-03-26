/* eslint-disable react/prop-types */
import { Grid, Paper, Typography } from '@mui/material';

function ChildInformation({ studentInfo }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ p: 2, minHeight: '200px' }}>
        <Typography variant='h6' component='h2' gutterBottom>
        Student
        </Typography>
        <Typography variant='body1' gutterBottom>
          Name: {studentInfo.name}
        </Typography>
        <Typography variant='body1' gutterBottom>
          Grade: {studentInfo.grade}
        </Typography>
        <Typography variant='body1' gutterBottom>
          School: {studentInfo.school}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default ChildInformation;
