import { Container, Grid } from '@mui/material';
import ChildInformation from './student';
import Attendance from './attendace';

function Dashboard() {
  const studentInfo = {
    name: 'John Doe',
    grade: '5th Grade',
    school: 'ABC Elementary School',
  };

  const attendance = [
    { date: '2022-10-01', status: 'Present' },
    { date: '2022-10-02', status: 'Absent' },
    { date: '2022-10-03', status: 'Present' },
  ];

  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <ChildInformation studentInfo={studentInfo} />
          <Attendance attendance={attendance} />
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
