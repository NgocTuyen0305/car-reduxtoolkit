import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: 'Authentication',
  initialState: {isLoggedIn: false,user: null,token: null},
  reducers:{
    login: (state)=>{
      state.isLoggedIn = true
    },
    logout: (state)=>{
      state.isLoggedIn = false
    },
    setUser: (state,action)=>{
      state.user = action.payload
    },
    setToken: (state,action)=>{
      state.token = action.payload
    },
  }
})

export const {login,logout,setUser,setToken} = authSlice.actions
export const authSliceReducer = authSlice.reducer