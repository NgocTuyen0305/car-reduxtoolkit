import { createSlice } from "@reduxjs/toolkit";
import { SignIn, SignUp } from "../../actions/auth";
const authSlice = createSlice({
  name: "auth",
  initialState: { users: {}, isAuthenticated: false, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignUp.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(SignIn.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export const authReducer = authSlice.reducer;
