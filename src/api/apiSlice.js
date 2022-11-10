import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vivian-real.salawat.me/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Basket"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getViewBasket: builder.query({
      query: () => ({
        url: "/baskets/demo",
        method: "GET",
      }),
      providesTags: ["Basket"],
    }),
    getMe: builder.query({
      query: () => "/getme",
    }),
    addToBasket: builder.mutation({
      query: (data) => ({
        url: "/baskets",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Basket"],
    }),
    deleteOrder: builder.mutation({
      query: ({ basketId, order_id }) => ({
        url: `baskets/${basketId}/${order_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Basket"],
    }),
    updateOrder: builder.mutation({
      query: ({ basketId, order_id, quantity }) => ({
        url: `baskets/${basketId}/${order_id}`,
        method: "PATCH",
        body: { count: quantity },
      }),
      invalidatesTags: ["Basket"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetAllProductsQuery,
  useGetViewBasketQuery,
  useGetMeQuery,
  useAddToBasketMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = apiSlice;
