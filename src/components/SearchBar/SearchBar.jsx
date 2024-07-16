import { TextField, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [teacher, setFindTeacher] = useState('');

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Search clicked');
    console.log(teacher);
  };

  const inputHandler = (e) => {
    setFindTeacher(() => {
      return e.target.value;
    });
  };

  //show array of emails
  const fetchData = () => {
      
  };

  return (
    <TextField
      onInput={inputHandler}
      id='search-input'
      placeholder='Enter Email...'
      variant='outlined'
      size='small'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <IconButton onClick={handleSearch} size='small'>
              <FaSearch />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;