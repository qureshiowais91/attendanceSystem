import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#7E57C2', // Dark Purple
    },
    secondary: {
      main: '#1a8273', // Darker shade of teal
    },
    tertiary: {
      main: '#b8962c', // Darker shade of yellow
    },
  },
});

export default DarkTheme;
