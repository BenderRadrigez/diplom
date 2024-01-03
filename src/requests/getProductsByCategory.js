import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsByCategory = createAsyncThunk(
  "productsByCategory/getProductsByCategory",
  async (categoryTitle) => {
    try{
        const response = await fetch(`http://localhost:3333/categories/${categoryTitle}`);
        return await response.json();
    }catch(error) {
        console.log("Error! Can't access data from ProductsByCategory");
        throw(error);
    }
  }
);
