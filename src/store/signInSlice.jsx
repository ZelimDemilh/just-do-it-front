import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import jwt_decode from "jwt-decode"

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

      const decodedToken = jwt_decode(data.token)
      console.log(decodedToken)

      console.log(decodedToken.id)

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
  reducers: {
    resetError(state) {
      state.error = null
    },
  },
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

export const { resetError } = signInSlice.actions

export default signInSlice.reducer
