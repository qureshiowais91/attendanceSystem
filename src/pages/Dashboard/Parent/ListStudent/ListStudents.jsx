import { useEffect, useState } from 'react';
// import { useTable } from 'react-table';
// import COLUMNS from './columns';
import { students } from '../../../../API/APIs';
import { useSelector } from 'react-redux';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

export const ListStudents = () => {
  const [data, setData] = useState();
  const [token, setToken] = useState();
  const [id, setID] = useState();
  const [Loading, setLoading] = useState();
  // const columns = useMemo(() => COLUMNS,[]);
  const user = useSelector((state) => {
    return state.auth;
  });
  console.log(user)

  useEffect(() => {
    setLoading(true);
    setID(user.id);
    console.log(user.id)
    setToken(user.jwt);
    (async () => {
      try {
        const payload = {
          query: `?page=1&limit=10&parent=${id}`,
          token: token,
        };
        const res = await students(payload);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const student = await res.json();
        setData(student.results);
        setLoading(false);
      } catch (error) {
        console.error('An error occurred:', error);
        setLoading(false);

        // Handle the error as needed, such as displaying a message to the user or retrying the operation.
      } finally {
        setLoading(false);
      }
    })();
  }, [token]);

  return (
    <Table>
      {Loading ? (
        <div>Loading</div>
      ) : (
        <>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Birthdate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((student) => (
              <TableRow key={student._id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.birthdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </>
      )}
    </Table>
  );
};
