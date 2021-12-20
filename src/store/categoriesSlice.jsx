import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const uploadCategories = createAsyncThunk(
  "categories/uploadCategories",
  async function () {
    const res = await fetch("http://localhost:6557/categories");

    const data = await res.json();

    return data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    error: null,
    pending: false,
    categories: [],
  },
  reducers: {},
  extraReducers: {
    [uploadCategories.pending]: (state) => {
      state.pending = true;
      state.error = null;
    },
    [uploadCategories.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = null;
      state.categories = action.payload;
    },
    [uploadCategories.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.payload.error;
    },
  },
});

// export const {} = categorySlice.actions

export default categorySlice.reducer;
