import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: false,
};

export const themeSlice = createSlice({
    name: 'themeToggle',
    initialState,
    reducers: {
        themeChanger: (state,action) => {
            state.darkMode = (state.darkMode != action.payload.darkMode);
        },
    },
});

export const { themeChanger } = themeSlice.actions;

export default themeSlice.reducer;
