import { Container, Typography, Grid, Button, Box, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container maxWidth='lg' style={{ marginTop: '50px' }}>
      <Grid container spacing={3} justifyContent='center'>
        {/* School Management Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant='outlined' style={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5' gutterBottom>
                School Management
              </Typography>
              <Typography variant='body1' paragraph>
                Our software simplifies school management tasks, making it easy to
                organize and streamline administrative processes.
              </Typography>
              <Button
                component={Link}
                to='/register'
                variant='contained'
                color='primary'
                fullWidth
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Child Safety Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant='outlined' style={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5' gutterBottom>
                Child Safety
              </Typography>
              <Typography variant='body1' paragraph>
                Ensure the safety of children with our advanced tracking and attendance
                system, providing peace of mind to parents and schools.
              </Typography>
              <Button
                component={Link}
                to='/register'
                variant='contained'
                color='primary'
                fullWidth
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* School Listing Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant='outlined' style={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5' gutterBottom>
                School Listing
              </Typography>
              <Typography variant='body1' paragraph>
                List your school on our platform and allow parents to give reviews,
                helping other parents make informed decisions.
              </Typography>
              <Button
                component={Link}
                to='/register'
                variant='contained'
                color='primary'
                fullWidth
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Find Best School Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Card variant='outlined' style={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h5' gutterBottom>
                Find Best School
              </Typography>
              <Typography variant='body1' paragraph>
                Discover the best schools based on reviews and other details provided
                by schools and parents.
              </Typography>
              <Button
                component={Link}
                to='/register'
                variant='contained'
                color='primary'
                fullWidth
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box mt={5} textAlign='center'>
        {/* <Typography variant='body2'>
          © {new Date().getFullYear()} YourCompanyName. All rights reserved.
        </Typography> */}
      </Box>
    </Container>
  );
};

export default LandingPage;
