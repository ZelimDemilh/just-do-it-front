import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
    name: "signIn",
    initialState:{
        signingIn: false,
        userDate: {},
        error: null,
        token: localStorage.getItem('token')
    },
    reducers:{

    }
})

export const {} = signInSlice.actions

export default signInSlice.reducer


