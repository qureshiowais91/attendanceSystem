import { Container, Grid } from '@mui/material';
import { BasicInfo } from '../../components/UI/Dashboard/BasicInfo';
import { ContactInfo } from '../../components/UI/Dashboard/ContactInfo';
// import { Curriculum } from '../../components/UI/Dashboard/Curriculum';
import { Facilities } from '../../components/UI/Dashboard/Facilities';
import { MissionVision } from '../../components/UI/Dashboard/MissionVision';

function Dashboard() {
  return (
    <div>
      <Container maxWidth='lg'>
        <Grid>
          <MissionVision></MissionVision>
          <Facilities></Facilities>
          <BasicInfo></BasicInfo>
          <ContactInfo></ContactInfo>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
