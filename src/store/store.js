import { configureStore } from "@reduxjs/toolkit";
import categoriesSliceReducer from "./slices/categoriesSlice";
import filtersSliceReducer from "./slices/filtersSlice";
import productsSliceReducer from "./slices/productsSlice";
import basketSliceReducer from "./slices/basketSlice";
import productsByCategoryReducer from "./slices/productsByCategorySlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer,
    filters: filtersSliceReducer,
    products: productsSliceReducer,
    basket: basketSliceReducer,
    productsByCategory: productsByCategoryReducer,
  },
});
