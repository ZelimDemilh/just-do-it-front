import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const profile = createAsyncThunk("users/profile", async function () {
  const res = await fetch("http://localhost:6557/users/profile");
  const data = await res.json();

  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {},
});

export default usersSlice.reducer;
