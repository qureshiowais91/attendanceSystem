// import { Container, Grid } from '@mui/material';
// import { BasicInfo } from '../../components/UI/Dashboard/BasicInfo';
// import { ContactInfo } from '../../components/UI/Dashboard/ContactInfo';
// // import { Curriculum } from '../../components/UI/Dashboard/Curriculum';
// import { Facilities } from '../../components/UI/Dashboard/Facilities';
// import { MissionVision } from '../../components/UI/Dashboard/MissionVision';

// function Dashboard() {
//   return (
//     <div>
//       <Container maxWidth='lg'>
//         <Grid>
//           <MissionVision></MissionVision>
//           <Facilities></Facilities>
//           <BasicInfo></BasicInfo>
//           <ContactInfo></ContactInfo>
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default Dashboard;
import { Container, Grid, Typography } from '@mui/material';

function Dashboard() {
  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4' gutterBottom>
              We are under development
            </Typography>
            <Typography variant='h5' gutterBottom>
              Coming Soon
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
