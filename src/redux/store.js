import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./ProductCards/ProductCards.slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});