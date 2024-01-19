import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../requests/getProducts";

const allProductsSlice = createSlice({
  name: "products",
  initialState: {
    status: null,
    list: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.status = "ready";
      state.list = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.status = "error response getAllProducts";
    });
  },
});

export default allProductsSlice.reducer;
