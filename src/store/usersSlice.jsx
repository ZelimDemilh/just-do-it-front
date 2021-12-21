import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadTasks } from './taskSlice';

export const getUsers = createAsyncThunk("users/get", async function () {
  const res = await fetch("http://localhost:6557/users/");
  const data = await res.json();

  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    pending: false,
    error: null
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.pending = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = null;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.payload.error;
    }
  }
});

export default usersSlice.reducer;
