import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    confirmpassword: "fasle",
    email: "fasle",
    password: "fasle"
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userRegister: (state, action) => {
            state.confirm = action.payload.isAuth;
            state.jwt = action.payload.jwt
        },
    },
})

export const { userLogin } = authSlice.actions

export default authSlice.reducer