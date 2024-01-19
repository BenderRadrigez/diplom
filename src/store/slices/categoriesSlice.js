import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../../requests/getCategories";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    status: null,
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.status = "ready";
        state.list = action.payload;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.status = "error response getAllCategories";
      });
  },
});

export default categoriesSlice.reducer;
