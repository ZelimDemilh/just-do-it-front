import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const login = createAsyncThunk(
  "signIn/login",
  async function (userData, { rejectWithValue }) {
    try {
      const res = await fetch("http://localhost:6557/users/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      })

      const data = await res.json()

      if (data.error) {
        throw new Error(data.error)
      }

      localStorage.setItem("token", data.token)

      return data.token
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    pending: false,
    userDate: {},
    error: null,
    token: localStorage.getItem("token"),
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.pending = true
      state.error = null
    },
    [login.fulfilled]: (state, action) => {
      state.pending = false
      state.error = null
      state.token = action.payload
    },
    [login.rejected]: (state, action) => {
      state.pending = false
      state.error = action.payload
    },
  },
})

// export const {} = signInSlice.actions

export default signInSlice.reducer
