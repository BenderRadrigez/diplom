import { createSlice } from "@reduxjs/toolkit";

const localStorageProduct = JSON.parse(localStorage.getItem("product")) ?? [];

const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    basketList: localStorageProduct,
    basketCounter: localStorageProduct.length,
  },
  reducers: {
    addToCard(state, action) {
      const productCard = state.basketList.find(
        ({ id }) => id === action.payload.id
      );

      if (!productCard) {
        state.basketList.push({ ...action.payload, count: 1 });
      } else {
        productCard.count++;
      }
      localStorage.setItem("product", JSON.stringify(state.basketList));
    },

    countPlus(state, action) {
      state.basketList.find((el) => el.id === action.payload).count++;
      localStorage.setItem("product", JSON.stringify(state.basketList));
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

      localStorage.setItem("product", JSON.stringify(state.basketList));
    },

    funDelete(state, action) {
      state.basketList = state.basketList.filter(
        (el) => el.id !== action.payload
      );
      localStorage.setItem("product", JSON.stringify(state.basketList));
    },
  },
});

export default BasketSlice.reducer;
export const { addToCard, countPlus, countMinus, funDelete } =
  BasketSlice.actions;
