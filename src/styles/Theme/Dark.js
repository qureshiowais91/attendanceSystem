import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
    palette: {
        type: 'dark', // Set the palette type to dark
        primary: {
            main: '#90caf9', // Change primary color for dark theme
        },
        secondary: {
            main: '#f48fb1', // Change secondary color for dark theme
        },
        background: {
            default: '#303030', // Default background color for dark theme
            paper: '#424242', // Paper background color for dark theme
        },
        text: {
            primary: '#ffffff', // Primary text color for dark theme
            secondary: '#eeeeee', // Secondary text color for dark theme
        },
        input: {
            textColor: '#ffffff', // Input text color for dark theme
        },
    },
});



export default DarkTheme