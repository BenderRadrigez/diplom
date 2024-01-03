import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async () => {
    try {
      const response = await fetch("http://localhost:3333/categories/all");
      return await response.json();
    } catch (error) {
      console.error("Error! Can't access data from Category");
      throw error;
    }
  }
);
