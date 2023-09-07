import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { pause } from "../../utils/pause";
// import { IProduct } from "../../interfaces/products";
const categoryApi = createApi({
  reducerPath: "categories",
  tagTypes: ["Categories"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    prepareHeaders: (headers) => {
      const Authentication = localStorage.getItem("persist:root");
      const authenticationData = JSON.parse(Authentication);
      const authData = JSON.parse(authenticationData.Authentication);
      const { token } = authData;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: ["Categories"],
    }),
    getCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: ["Categories"],
    }),
    addCategory: builder.mutation({
      query: (Category) => ({
        url: "/categories",
        method: "POST",
        body: Category,
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation({
      query: (Category) => ({
        url: `/categories/${Category.id}`,
        method: "PATCH",
        body: Category,
      }),
      invalidatesTags: ["Categories"],
    }),
    removeCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});
export const {
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useGetCategoryByIdQuery,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation
} = categoryApi;
export const categoryReducer = categoryApi.reducer;
export default categoryApi;
