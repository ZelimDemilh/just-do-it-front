import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        task: [],
        pending: false,
        error: null
    },
    reducers:{

    }
})

export const {} = taskSlice.actions

export default taskSlice.reducer