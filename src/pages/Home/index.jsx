import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Container maxWidth='lg' style={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* School Management Section */}
          <Grid item xs={12} sm={6}>
            <Typography variant='h4' gutterBottom>
              School Management
            </Typography>
            <Typography variant='body1' paragraph>
              Manage your school efficiently with our comprehensive school
              management solution.
            </Typography>
            <Button
              component={Link}
              to='/register'
              variant='contained'
              color='primary'
            >
              Learn More
            </Button>
          </Grid>

          {/* Child Safety Section */}
          <Grid item xs={12} sm={6}>
            <Typography variant='h4' gutterBottom>
              Child Safety
            </Typography>
            <Typography variant='body1' paragraph>
              Ensure the safety of children with our advanced child safety
              systems.
            </Typography>
            <Button
              component={Link}
              to='/register'
              variant='contained'
              color='primary'
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <Box>
        <Typography variant='body2'>
          © {new Date().getFullYear()} ProjectAlpha. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default LandingPage;
