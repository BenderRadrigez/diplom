import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try{
        const response = await fetch("http://localhost:3333/products/all");
        return await response.json();
    }
    catch(error){
        console.log("error fetching data in 'getAllProducts'" + error.message);
        throw error;
    }
  }
);
