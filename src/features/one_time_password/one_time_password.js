import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: false,
    otp: false
};

export const onetTimePasswordSlice = createSlice({
    name: 'otp',
    initialState,
    reducers: {
        otp: (state, action) => {
            state.email = action.payload.email;
            state.otp = action.payload.otp;
        },
    },
});

export const { otp } = onetTimePasswordSlice.actions;

export default onetTimePasswordSlice.reducer;