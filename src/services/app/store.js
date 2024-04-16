import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/authSlice'; // Import the auth reducer
import themeReducer from '../../features/theme/themeSlice'; // Import the theme reducer
import oneTimePassowordReducer from "../../features/one_time_password/one_time_password";

export const store = configureStore({
    reducer: {
        auth: authReducer, // Use the auth reducer
        theme: themeReducer, // Use the theme reducer
        otp: oneTimePassowordReducer
    }
});
