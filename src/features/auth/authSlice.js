import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  role: false,
  jwt: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.role = action.payload.role;
      state.jwt = action.payload.jwt;
    },
  },
});

export const { userLogin } = authSlice.actions;

export default authSlice.reducer;
