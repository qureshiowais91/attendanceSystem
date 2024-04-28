/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const StudentList = ({ students }) => {
    console.log(students)
  return (
    <List>
      {students.map((student) => (
        <ListItem key={student.studentId}>
          <ListItemAvatar>
            <Avatar>{student.name[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText>
            <Typography>{student.studentId}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default StudentList;
