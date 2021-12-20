import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registration = createAsyncThunk(
  "users/registration",
  async function (userData, { rejectWithValue }) {
    try {
      const res = await fetch("http://localhost:6557/users/registration", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const registrySlice = createSlice({
  name: "registry",
  initialState: {
    pending: false,
    error: null,
    resMessage: null,
  },
  reducers: {},
  extraReducers: {
    [registration.pending]: (state) => {
      state.pending = true;
    },
    [registration.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = null;
      state.resMessage = action.payload;
    },
    [registration.rejected]: (state, action) => {
      state.pending = false;
      state.resMessage = null;
      state.error = action.payload;
    },
  },
});

// export const {} = registrySlice.actions

export default registrySlice.reducer;
