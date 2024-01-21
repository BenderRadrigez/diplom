import { createSlice } from "@reduxjs/toolkit";

const localStorageProduct = JSON.parse(localStorage.getItem("product")) ?? [];

const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    basketList: localStorageProduct,
    basketCounter: localStorageProduct.length,
    count: 0,
  },
  reducers: {
    addToBasket(state, action) {
      const product = state.basketList.find(
        ({ id }) => id === action.payload.id
      );

      if (!product) {
        state.basketList.push({ ...action.payload, count: state.count });
      } else {
        product.count += state.count;
      }
      localStorage.setItem("product", JSON.stringify(state.basketList));
      state.basketCounter = state.basketList.length;
      console.log(state.count);
    },

    countPlus(state, action) {
      state.basketList.find((el) => el.id === action.payload).count++;
      localStorage.setItem("product", JSON.stringify(state.basketList));
      state.basketCounter = state.basketList.length;
    },

    countMinus(state, action) {
      const product = state.basketList.find((el) => el.id === action.payload);
      if (product.count > 1) {
        product.count--;
      } else {
        state.basketList = state.basketList.filter(
          (el) => el.id !== action.payload
        );
      }
      state.basketCounter = state.basketList.length;
      localStorage.setItem("product", JSON.stringify(state.basketList));
    },

    changeCounter(state, action){
      state.count = action.payload;
    },

    deleteFromBasket(state, action) {
      state.basketList = state.basketList.filter(
        (el) => el.id !== action.payload
      );
      state.basketCounter = state.basketList.length;
      localStorage.setItem("product", JSON.stringify(state.basketList));
    },
  },
});

export default BasketSlice.reducer;
export const { addToBasket, countPlus, countMinus, deleteFromBasket, changeCounter } =
  BasketSlice.actions;
