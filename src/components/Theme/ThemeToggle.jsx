/* eslint-disable react/prop-types */
// DarkModeButton.js

import { useSelector } from 'react-redux';

const ThemeToggleButton = ({ toggleDarkMode }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  // useEffect(() => {
  //   console.log(darkMode);
  // }, [darkMode]);

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggleButton;
