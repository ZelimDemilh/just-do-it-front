import { createSlice } from "@reduxjs/toolkit";

const registry = createSlice({
    name: "registry",
    initialState:{
        signingUp: false,
        error: null,
        isFulfilled: false
    },
    reducers:{

    }
})

export const {} = registry.actions

export default registry.reducer


