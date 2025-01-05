import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategories: [],
  subCategories: [],
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllCategories(state, action) {
      state.allCategories = action.payload;
    },
    setSubCategories(state, action) {
      state.subCategories = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setAllCategories, setSubCategories, setProducts } =
  productSlice.actions;

export default productSlice.reducer;
