import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  jwt: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.jwt = action.payload.jwt;
    },
  },
});

export const { userLogin } = authSlice.actions;

export default authSlice.reducer;
