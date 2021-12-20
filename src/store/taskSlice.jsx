import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const uploadTasks = createAsyncThunk(
    "tasks/uploadTasks",
    async function () {
        const res = await fetch("http://localhost:6557/tasks")

        const data = await res.json()

        return data
    })

const taskSlice = createSlice({
    name: "task",
    initialState: {
        task: [],
        pending: false,
        error: null
    },
    reducers: {
        getTasks(state, action) {
            state.task.push(action.payload)
        }
    },
    extraReducers: {
        [uploadTasks.pending]: (state, action) => {
            state.pending = true
            state.error = null
        },
        [uploadTasks.fulfilled]: (state, action) => {
            state.pending = false
            state.error = null
            state.task = action.payload
        },
        [uploadTasks.rejected]: (state, action) => {
            state.pending = false
            state.error = action.payload.error
        },
    }
})

export const {getTasks} = taskSlice.actions

export default taskSlice.reducer