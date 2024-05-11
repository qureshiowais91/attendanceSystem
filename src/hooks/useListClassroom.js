import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Assuming you are using Redux for state management
import { listClassroom } from '../API/APIs';

const useClassList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const token = useSelector((state) => state.auth.jwt);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          token: token,
        };
        const res = await listClassroom(payload);
        const list = await res.json();
        setClassrooms(list);
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    };

    fetchData();
  }, []);

  return classrooms;
};

export default useClassList;
