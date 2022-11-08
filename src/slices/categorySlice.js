import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoryId: 1,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    uploadCategories: (state, action) => {
      state.categories = [...action.payload];
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const { uploadCategories, setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
