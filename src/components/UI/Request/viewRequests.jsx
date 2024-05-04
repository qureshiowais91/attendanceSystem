import { useState, useEffect } from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const ViewMembershipRequestsComponent = () => {
  const [membershipRequests, setMembershipRequests] = useState([]);

  // Dummy data for membership requests
  const dummyRequests = [
    {
      id: 1,
      type: 'student',
      studentName: 'John Doe',
      parentName: 'Michael Johnson',
    },
    { id: 2, type: 'teacher', name: 'Jane Smith' },
    { id: 3, type: 'parent', name: 'Michael Johnson' },
    {
      id: 4,
      type: 'student',
      studentName: 'Emily Davis',
      parentName: 'Sophia Davis',
    },
    { id: 5, type: 'teacher', name: 'David Brown' },
    { id: 6, type: 'parent', name: 'Sophia Davis' },
  ];

  // Simulate fetching membership requests (dummy data)
  useEffect(() => {
    setMembershipRequests(dummyRequests);
  }, []);

  const handleAccept = (requestId, requestType) => {
    // Dummy function to handle request acceptance
    // console.log(`Request ${requestId} (${requestType}) accepted.`);
  };

  const handleDecline = (requestId, requestType) => {
    // Dummy function to handle request decline
    // console.log(`Request ${requestId} (${requestType}) declined.`);
  };

  return (
    <div>
      <Typography variant='h5'>Membership Requests</Typography>
      <List>
        {membershipRequests.map((request) => (
          <ListItem key={request.id}>
            <ListItemText
              primary={
                request.type === 'student'
                  ? `Student: ${request.studentName} (Parent: ${request.parentName})`
                  : request.type === 'teacher'
                  ? `Teacher: ${request.name}`
                  : `Parent: ${request.name}`
              }
            />
            {(request.type === 'teacher' || request.type === 'parent') && (
              <>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => handleAccept(request.id, request.type)}
                >
                  Accept
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => handleDecline(request.id, request.type)}
                >
                  Decline
                </Button>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ViewMembershipRequestsComponent;
