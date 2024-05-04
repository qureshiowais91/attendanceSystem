import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Assuming you are using Redux for state management
import { listClassroom } from '../API/APIs';

const useClassList = () => {
  const [classrooms, setClassrooms] = useState([]);
  const token = useSelector((state) => state.auth.jwt);

  // Access token from Redux state
  useEffect(() => {
    // console.log(token)

    const fetchData = async () => {
      try {
        const payload = {
          token: token,
        };

        // Assuming listClassroom is an async function that fetches class data
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
