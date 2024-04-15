/* eslint-disable react/prop-types */
// DarkModeButton.js

import { useSelector } from 'react-redux';

const ThemeToggleButton = ({ toggleDarkMode }) => {
  const darkMode = useSelector((state) => state.darkMode);
  console.log(darkMode);
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggleButton;
