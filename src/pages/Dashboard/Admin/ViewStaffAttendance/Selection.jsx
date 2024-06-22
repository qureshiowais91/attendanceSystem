import  { useState } from 'react';
import { Button, Box,  InputLabel,  TextField } from '@mui/material';
import SearchBar from '../../../../components/SearchBar/SearchBar';

const SelectionComponent = () => {
  const [selectedEmail, setSelectedEmail] = useState('');

  const handleEmailChange = (event) => {
    setSelectedEmail(event.target.value);
  };

  const handleSearchClick = () => {
    // Handle search functionality here with selectedEmail
    console.log('Search clicked with email:', selectedEmail);
    // Example: handleSearch(selectedEmail);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
       <SearchBar></SearchBar>
    </Box>
  );
};

export default SelectionComponent;
