import { useEffect, useState } from "react";

export const useFetch = (url, method = 'GET', payload) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  const options = {
    method: method,
    body: payload,
    headers: {
      'Content-Type': 'application/json', // Adjust the content type as needed
      // Add more headers if necessary
    },
    mode: 'cors'
  };
  
  
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error)
        setdata(data)
        setloading(false)
      })
  }, [url]);

  return { data, loading, error };
};

export default useFetch;