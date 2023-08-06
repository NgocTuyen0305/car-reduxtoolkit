import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { pause } from "../../utils/pause";
import { IProduct } from "../../interfaces/products";
const productApi = createApi({
  reducerPath: "product",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => `products`,
      providesTags: ["Product"],
    }),
    getProductById: builder.query<IProduct, number>({
      query: (id) => `products/${id}`,
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation({
      query: (product: IProduct) => ({
        url: "products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `products/${product.id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    removeProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useAddProductMutation,
  useGetProductByIdQuery,
  useRemoveProductMutation,
  useUpdateProductMutation
} = productApi;
export const productReducer = productApi.reducer;
export default productApi