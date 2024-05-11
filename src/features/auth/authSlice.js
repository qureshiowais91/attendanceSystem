import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  role: false,
  jwt: false,
  id: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.role = action.payload.role;
      state.jwt = action.payload.jwt;
      state.id = action.payload.id;
    },
  },
});

export const { userLogin } = authSlice.actions;

export default authSlice.reducer;
