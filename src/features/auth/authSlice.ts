import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authApi = createApi({
  reducerPath: 'auth',
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder)=>({
    signin: builder.mutation({
      query: (signUser) => ({
        url: "auth/signin",
        method: "POST",
        body: signUser,
      }),
      invalidatesTags: ["Auth"],
    }),
  })
})
export const authReducer = authApi.reducer;
export const {useSigninMutation} = authApi;
export default authApi