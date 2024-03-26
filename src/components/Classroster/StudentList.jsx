import { List, ListItem } from '@mui/material';
import ChildInformation from '../Dashboard/student';

function StudentList() {
    
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alex Johnson' },
  ];

  return (
    <List>
      {students.map((student) => (
        <ListItem key={student.id}>
          <ChildInformation studentInfo={student}></ChildInformation>
        </ListItem>
      ))}
    </List>
  );
}

export default StudentList;
