import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import products from "../components/pages/products/productsSlice";
import category from "../slices/categorySlice";

export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, products, category },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
