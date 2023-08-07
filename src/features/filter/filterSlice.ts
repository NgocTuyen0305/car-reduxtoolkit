import {createSlice} from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filterProduct',
  initialState: {filterProduct: [], productsBeforeFilter:[]},
  reducers:{
    setProduct: (state,action)=>{
      state.productsBeforeFilter = action.payload
    },
    filterProduct: (state,action)=>{
      const {name} = action.payload;
      const productsAfterFilter = state.productsBeforeFilter.filter((product:any)=>{
        const nameMatch = product?.name?.toLowerCase()?.includes(name.toLowerCase());
        // const modelMatch = product?.model?.toLowerCase()?.includes(model.toLowerCase());
        // const priceMatch = product?.price?.toLowerCase()?.includes(price.toLowerCase());
        // const yearMatch = year === null || product?.year === year;
        return nameMatch
      })
      state.filterProduct = productsAfterFilter
    }
  }
})
export const {setProduct,filterProduct} = filterSlice.actions
export const filterReducer = filterSlice.reducer;