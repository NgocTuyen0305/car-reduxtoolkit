import { createSlice } from "@reduxjs/toolkit";
const categorySlice = createSlice({
  name: 'categorySlice',
  initialState: {idCategory: null},
  reducers:{
    getIdCategory: (state,action)=>{
      state.idCategory = action.payload
    }
  }
})
export const {getIdCategory} = categorySlice.actions
export const categoryIDReducer = categorySlice.reducer