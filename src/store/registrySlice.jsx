import { createSlice } from "@reduxjs/toolkit";

const registrySlice = createSlice({
    name: "registry",
    initialState:{
        signingUp: false,
        error: null,
        isFulfilled: false
    },
    reducers:{

    }
})

export const {} = registrySlice.actions

export default registrySlice.reducer


