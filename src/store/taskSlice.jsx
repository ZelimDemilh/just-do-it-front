import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode";

export const userResponse = createAsyncThunk(
    "tasks/response",
     async function (idTask, {rejectWithValue}) {
      try{

        const token = localStorage.getItem("token")

        const res = await fetch(`http://localhost:6557/tasks/respond/${idTask}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        const data = await res.json()

        if(data.error){
         throw new Error(data.error)
        }



        const decodeToken = await jwtDecode(token)

        const dataRes = {
          data,
          idUser: decodeToken.id,
          idTask: idTask
        }

        return dataRes
      } catch (e) {
        return rejectWithValue(e.error)
      }
    }
)

// export const completeTask = createAsyncThunk(
//     "tasks/completeTask",
//     async function (id, {rejectWithValue}) {
//
//       const res = await fetch("")
//
//     }
// )

export const addExecutor = createAsyncThunk(
    "tasks/addExecutor",
    async function ({id, idUser} , {rejectWithValue}) {
      try {
        const token = localStorage.getItem("token")

        const res = await fetch(`http://localhost:6557/tasks/executor/${id}`, {
          method: "POST",
          body: JSON.stringify({
            idUser: idUser
          }),
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
          }
        })

        const data = await res.json()

        if(data.error){
          throw new Error(data.error)
        }

        const decodeToken = await jwtDecode(token)

        const dataRes = {
          data,
          idUser: decodeToken.id,
          idTask: id
        }

        return dataRes
      } catch (e) {
        return rejectWithValue(e.error)
      }
    }
)

export const addTaskForm = createAsyncThunk(
  "taskForm/addTaskForm",
  async function ({
    heading: heading,
    description: description,
    price: price,
    category: category,
    latitude: latitude,
    longitude: longitude,
  }, {rejectWithValue}) {
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
      return rejectWithValue(e.error)
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
    allUsers: []
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

    [userResponse.pending]: (state, action) => {
      state.pending = true
      state.error = null
    },
    [userResponse.fulfilled]: (state, action) => {
      state.pending = false
      state.error = null
      state.task.forEach((item) => item._id === action.payload.idTask && item.candidates.push(action.payload.idUser))
    },
    [userResponse.rejected]: (state, action) => {
      state.pending = false
      state.error = action.payload.error
    },

    [addExecutor.pending]: (state, action) => {
      state.pending = true
      state.error = null
    },
    [addExecutor.fulfilled]: (state, action) => {
      state.pending = false
      state.error = null
      state.task.forEach((item) => item._id === action.payload.idTask && (item.executor = action.payload.idUser))
    },
    [addExecutor.rejected]: (state, action) => {
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
