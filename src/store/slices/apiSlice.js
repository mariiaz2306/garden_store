// src/store/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../config'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchCategories: builder.query({
      query: () => 'categories/all',
    }),
    fetchCategoryByName: builder.query({
      query: (name) => `categories/${name}`,
    }),
    fetchAllProducts: builder.query({
      query: () => 'products/all',
    }),
    fetchProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    postDiscount: builder.mutation({
      query: (discountData) => ({
        url: 'sale/send',
        method: 'POST',
        body: discountData,
      }),
    }),
  }),
})

// Экспортируем auto-generated хуки для использования в компонентах
export const {
  useFetchCategoriesQuery,
  useFetchCategoryByNameQuery,
  useFetchAllProductsQuery,
  useFetchProductByIdQuery,
  usePostDiscountMutation,
} = apiSlice
