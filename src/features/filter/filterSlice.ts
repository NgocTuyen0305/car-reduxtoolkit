import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filterProduct",
  initialState: { filterProduct: [], productsBeforeFilter: [] },
  reducers: {
    setProduct: (state, action) => {
      state.productsBeforeFilter = action.payload;
    },
    filterProduct: (state, action) => {
      const { name, calendar, petrol, price } = action.payload;
      const productsAfterFilter = state.productsBeforeFilter.filter(
        (product: any) => {
          const nameMatch = product?.name
            ?.toLowerCase()
            ?.includes(name.toLowerCase());
          const petrolMatch = product?.petrol
            ?.toLowerCase()
            ?.includes(petrol.toLowerCase());
          const yearMatch = calendar === null || product?.calendar === calendar;
          const priceMatch = price === null || product?.price === price;
          return nameMatch && yearMatch && petrolMatch && priceMatch;
        }
      );
      state.filterProduct = productsAfterFilter;
    },
  },
});
export const { setProduct, filterProduct } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
