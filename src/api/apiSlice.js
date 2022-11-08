import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vivian-real.salawat.me/api",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetCategoriesQuery, useGetAllProductsQuery } = apiSlice;
