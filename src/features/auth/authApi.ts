import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pause } from "../../utils/pause";
const authApi = createApi({
  reducerPath: 'auth',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
      prepareHeaders: (Headers) => {
      const token = localStorage.getItem("accset_Token");
      Headers.set("authorization", `Bearer ${token}`);
      return Headers;
    },
    fetchFn: async (...args) => {
      await pause(2000);
      return fetch(...args);
  }
  }),
  endpoints: (builder)=>({
    signin: builder.mutation({
      query: (signinUser) => ({
        url: "auth/signin",
        method: "POST",
        body: signinUser,
      }),
      invalidatesTags: ["Auth"],
    }),
    signup: builder.mutation({
      query: (signupUser) => ({
        url: "auth/signup",
        method: "POST",
        body: signupUser,
      }),
      invalidatesTags: ["Auth"],
    }),
  })
})
export const authReducer = authApi.reducer;
export const {useSigninMutation,useSignupMutation} = authApi;
export default authApi