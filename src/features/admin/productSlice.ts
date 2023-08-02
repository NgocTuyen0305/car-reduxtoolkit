import { createSlice } from "@reduxjs/toolkit";
import { addProduct, fetchProduct } from "../../actions/products";
const productAdminSlice = createSlice({
  name: "productsAdmin",
  initialState: { products: {}, error: "", isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
  },
});
export const productAdminReducer = productAdminSlice.reducer;
