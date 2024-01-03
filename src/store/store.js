import { configureStore } from '@reduxjs/toolkit'
import categoriesSliceReducer from './slices/categoriesSlice'
import filtersSliceReduser from './slices/filtersSlice'
import saleSliceReduser from './slices/saleSlice'

export const store = configureStore({
    reducer:{
        categories : categoriesSliceReducer,
        filters : filtersSliceReduser,
        sale: saleSliceReduser,
    }
})