import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
  let [searchParams, setSearchParams] = useSearchParams();
  // const [school, setSchool] = useState(null);
   console.log(searchParams)
   const logSearchParams = () => {
    console.log(searchParams.get("id")); 
     // url is assumed as https://.....com?samplekey="dummy"
  };
  logSearchParams();
  const [school, setSchool] = useState(null);
  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const payload = {
          query: searchParams.get("id"),
        };
        const response = await publicprofile(payload);
       
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
  }, [searchParams.get("id")]);

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
