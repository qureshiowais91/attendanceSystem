import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { publicprofile } from '../../../../API/APIs';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';

function PublicProfile() {
  const { id } = useParams(); // Assuming the school ID is passed as a parameter in the URL
  const [school, setSchool] = useState(null);
console.log(id)
  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const payload = {
          query: id,
        };
        const response = await publicprofile(payload);
        console.log(id);
        if (!response.ok) {
          throw new Error('Failed to fetch school data');
        }
        const data = await response.json();
        setSchool(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching school data:', error);
      }
    };

    fetchSchoolData();
  }, [id]);

  if (!school) {
    return <div>Loading...</div>;
  }

  return (
    <Box p={2} border={1} borderRadius={4}>
      <Typography variant='h2'>{school.name}</Typography>

      <Box mt={2}>
        <Typography>
          <strong>Address:</strong> {school.address}
        </Typography>
      </Box>

      <Divider variant='middle' />

      <Box mt={2}>
        <List>
          <ListItem>
            <ListItemText
              primary={<strong>Phone:</strong>}
              secondary={school.contactDetails}
            />
          </ListItem>
        </List>
      </Box>

      <Divider variant='middle' />

      <Box mt={2}>
        <Typography>
          <strong>Established Date:</strong> {school.establishedDate}
        </Typography>
      </Box>

      <Divider variant='middle' />

      <Box mt={2}>
        <Typography>
          <strong>Facilities:</strong> {school.facilities.join(', ')}
        </Typography>
      </Box>
      {/* Add more details as needed */}
    </Box>
  );
}

export default PublicProfile;
