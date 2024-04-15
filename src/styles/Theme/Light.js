import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
    palette: {
        type: 'light', // Set the palette type to light
        primary: {
            main: '#1976d2', // Change primary color for light theme
        },
        secondary: {
            main: '#dc004e', // Change secondary color for light theme
        },
        background: {
            default: '#f5f5f5', // Default background color for light theme
            paper: '#ffffff', // Paper background color for light theme
        },
        text: {
            primary: '#333333', // Primary text color for light theme
            secondary: '#555555', // Secondary text color for light theme
        },
        input: {
            textColor: '#333333', // Input text color for light theme
        },
    },
});

export default LightTheme;