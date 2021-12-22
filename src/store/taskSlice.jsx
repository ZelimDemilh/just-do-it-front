import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const addTaskForm = createAsyncThunk(
  "taskForm/addTaskForm",
  async function ({
    heading: heading,
    description: description,
    price: price,
    category: category,
    latitude: latitude,
    longitude: longitude,
  }) {
    try {
      const res = await fetch("http://localhost:6557/tasks/add", {
        method: "POST",
        body: JSON.stringify({
          header: heading,
          description: description,
          price: price,
          category: category,
          latitude: latitude,
          longitude: longitude,
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      const data = await res.json()

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async function (id, { rejectWithValue }) {
    try {
      const res = await fetch(`http://localhost:6557/tasks//remove/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      const data = await res.json()

      if (data.error) {
        throw new Error(data.error)
      }

      return id
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const uploadTasks = createAsyncThunk(
  "tasks/uploadTasks",
  async function () {
    const res = await fetch("http://localhost:6557/tasks")

    const data = await res.json()

    return data
  }
)

const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
    pending: false,
    error: null,
  },
  reducers: {
    getTasks(state, action) {
      state.task.push(action.payload)
    },
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

    [addTaskForm.pending]: (state) => {
      state.pending = true
    },
    [addTaskForm.fulfilled]: (state, action) => {
      state.pending = false
      state.error = null
      state.task = [action.payload]
    },
    [addTaskForm.rejected]: (state, action) => {
      state.pending = false
      state.task = null
      state.error = action.payload
    },

    [deleteTask.pending]: (state) => {
      state.pending = true
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.pending = false
      state.error = null
      state.task = state.task.filter((task) => task._id !== action.payload)
    },
    [deleteTask.rejected]: (state, action) => {
      state.pending = false
      state.error = action.payload
    },
  },
})

export const { getTasks } = taskSlice.actions

export default taskSlice.reducer
