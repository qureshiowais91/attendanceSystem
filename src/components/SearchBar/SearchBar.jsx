import { TextField, IconButton, InputAdornment } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const handleSearch = () => {
    // Handle search functionality here
    console.log('Search clicked');
  };

  const inputHandler = (e) => {
    console.log(e.target.value);
  };

  //show array of emails
  const fetchData = ()=>{
    
  }

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