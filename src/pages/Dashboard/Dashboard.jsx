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
