import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28, // Add border radius for buttons
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Add border radius for typography components
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Add border radius for input fields
        },
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#3a8ac9', // Darker shade of light blue
    },
    secondary: {
      main: '#5a9e56', // Darker shade of light green
    },
    tertiary: {
      main: '#d2851f', // Darker shade of light orange
    },
  },
    
});

export default LightTheme;
