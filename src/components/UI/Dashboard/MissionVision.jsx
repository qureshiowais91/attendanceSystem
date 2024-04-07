import { Box } from '@mui/material';

export const MissionVision = () => {
  return (
    <Box component='div'>
      <h2>Mission & Vision</h2>
      <Box
        component='img'
        sx={{ width: 1 }}
        src='https://placehold.co/600x400'
        alt='Mission & Vision Image'
      ></Box>
      <p>
        Motto: To inspire and empower students to achieve their fullest
        potential.
      </p>
      <p>
        Mission Statement: Our mission is to provide a nurturing environment
        where every student can thrive academically, socially, and emotionally.
      </p>
      <p>
        Vision Statement: Our vision is to cultivate lifelong learners who
        contribute positively to their communities and the world.
      </p>
    </Box>
  );
};
