import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItemCart: (state, action) => {
      const productCart = action.payload;
      const exitProductIndex = state.items.findIndex(
        (item) => item.id == productCart.id
      );
      if (exitProductIndex === -1) {
        state.items.push(productCart);
      } else {
        state.items[exitProductIndex].quantily++;
      }
    },
    increase: (state, action) => {
      state.items.find((item) => item.id === action.payload)
        .quantily++;
    },
    decrease: (state, action) => {
      const productFound = state.items.find(
        (item) => item.id == action.payload
      );
      productFound.quantily--;
      if (productFound.quantily < 1) {
        const confirm = window.confirm("Bạn có muốn xóa khỏi giỏ hàng?");
        if (confirm)
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        productFound.quantily = 1;
      }
    },
  },
});
export const {addItemCart,increase,decrease} = cartSlice.actions
export const cartReducer = cartSlice.reducer;
