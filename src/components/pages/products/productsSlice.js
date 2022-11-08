import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productId: localStorage.getItem("productId"),
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    uploadProducts: (state, action) => {
      state.products = [...action.payload];
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
  },
});

export const { uploadProducts, setProductId } = productsSlice.actions;

export default productsSlice.reducer;
